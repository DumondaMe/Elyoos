'use strict';

var users = require('elyoos-server-test-util').user;
var dbDsl = require('elyoos-server-test-util').dbDSL;
var requestHandler = require('elyoos-server-test-util').requestHandler;
var db = require('elyoos-server-test-util').db;
var moment = require('moment');

describe('Integration Tests creating a idea for a discussion', function () {

    var requestAgent, startTime;

    beforeEach(function () {
        startTime = Math.floor(moment.utc().valueOf() / 1000);
        return dbDsl.init(4);
    });

    afterEach(function () {
        return requestHandler.logout();
    });


    it('Create idea for discussion', function () {

        dbDsl.createFeedbackBug('1', '1', 500);
        dbDsl.createFeedbackBug('2', '4', 503, 'closed');

        dbDsl.createFeedbackIdea('3', '1', 504);
        dbDsl.createFeedbackIdea('4', '3', 506, 'closed');

        dbDsl.createFeedbackDiscussion('5', '1', 507);
        dbDsl.createFeedbackDiscussion('6', '2', 508, 'closed');

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/user/feedback/create', {
                discussion: {
                    title: 'title',
                    description: 'description',
                    discussionId: '5'
                }
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.created.should.be.at.least(startTime);
            res.body.creator.name.should.be.at.least('user Meier');
            return db.cypher().match(`(:Feedback:Discussion {feedbackId: '5'})<-[:IS_IDEA]-(feedback:Feedback:DiscussionIdea {feedbackId: {feedbackId}})
                                       <-[:IS_CREATOR]-(:User {userId: '1'})`)
                .return('feedback')
                .end({feedbackId: res.body.feedbackId}).send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.created.should.be.at.least(startTime);
            feedback[0].feedback.title.should.equals("title");
            feedback[0].feedback.description.should.equals("description");
            feedback[0].feedback.status.should.equals("open");
        });
    });

    it('Error code 400 for non existing ', function () {

        dbDsl.createFeedbackBug('1', '1', 500);
        dbDsl.createFeedbackBug('2', '4', 503, 'closed');

        dbDsl.createFeedbackIdea('3', '1', 504);
        dbDsl.createFeedbackIdea('4', '3', 506, 'closed');

        dbDsl.createFeedbackDiscussion('5', '1', 507);
        dbDsl.createFeedbackDiscussion('6', '2', 508, 'closed');

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/user/feedback/create', {
                discussion: {
                    title: 'title',
                    description: 'description',
                    discussionId: '4'
                }
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(400);
        });
    });
});
