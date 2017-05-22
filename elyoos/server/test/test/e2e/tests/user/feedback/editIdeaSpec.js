'use strict';

let users = require('elyoos-server-test-util').user;
let dbDsl = require('elyoos-server-test-util').dbDSL;
let requestHandler = require('elyoos-server-test-util').requestHandler;
let db = require('elyoos-server-test-util').db;
let moment = require('moment');

describe('Integration Tests edit idea feedback', function () {

    let startTime;

    beforeEach(function () {
        startTime = Math.floor(moment.utc().valueOf() / 1000);
        return dbDsl.init(4);
    });

    afterEach(function () {
        return requestHandler.logout();
    });


    it('Edit idea feedback', function () {

        dbDsl.createFeedbackIdea('1', {creatorUserId: '1', created: 504});

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function () {
            return requestHandler.post('/api/user/feedback/edit/idea', {
                title: 'title',
                description: 'description',
                feedbackId: '1'
            });
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.modified.should.be.at.least(startTime);
            return db.cypher().match("(feedback:Feedback:Idea {feedbackId: {feedbackId}})<-[:IS_CREATOR]-(:User {userId: '1'})")
                .return('feedback')
                .end({feedbackId: '1'}).send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.created.should.equals(504);
            feedback[0].feedback.modified.should.be.at.least(startTime);
            feedback[0].feedback.title.should.equals("title");
            feedback[0].feedback.description.should.equals("description");
            feedback[0].feedback.status.should.equals("open");
        });
    });

    it('Edit idea of other user fails', function () {

        dbDsl.createFeedbackIdea('1', {creatorUserId: '2', created: 504});

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function () {
            return requestHandler.post('/api/user/feedback/edit/idea', {
                title: 'title',
                description: 'description',
                feedbackId: '1'
            });
        }).then(function (res) {
            res.status.should.equal(400);
            return db.cypher().match("(feedback:Feedback:Idea {feedbackId: {feedbackId}})")
                .return('feedback')
                .end({feedbackId: '1'}).send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.created.should.equals(504);
            feedback[0].feedback.title.should.equals("idea1Title");
            feedback[0].feedback.description.should.equals("idea1Description");
            feedback[0].feedback.status.should.equals("open");
        });
    });

    it('Closed idea feedback can not be edited', function () {

        dbDsl.createFeedbackIdea('1', {creatorUserId: '1', created: 504, status: 'closed'});

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function () {
            return requestHandler.post('/api/user/feedback/edit/idea', {
                title: 'title',
                description: 'description',
                feedbackId: '1'
            });
        }).then(function (res) {
            res.status.should.equal(400);
            return db.cypher().match("(feedback:Feedback:Idea {feedbackId: {feedbackId}})")
                .return('feedback')
                .end({feedbackId: '1'}).send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.created.should.equals(504);
            feedback[0].feedback.title.should.equals("idea1Title");
            feedback[0].feedback.description.should.equals("idea1Description");
            feedback[0].feedback.status.should.equals("closed");
        });
    });
});
