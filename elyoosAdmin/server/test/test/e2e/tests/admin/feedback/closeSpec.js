'use strict';

let users = require('elyoos-server-test-util').user;
let dbDsl = require('elyoos-server-test-util').dbDSL;
let db = require('elyoos-server-test-util').db;
let requestHandler = require('elyoos-server-test-util').requestHandler;
let moment = require('moment');

describe('Integration Tests for closing a feedback', function () {

    let requestAgent, startTime;

    beforeEach(function () {
        return dbDsl.init(5, true);
    });

    afterEach(function () {
        return requestHandler.logout();
    });

    it('Close a bug', function () {

        let statusFeedbackId;
        startTime = Math.floor(moment.utc().valueOf() / 1000);

        dbDsl.createFeedbackBug('1', '1', 500, 600);

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '1', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.closedDate.should.be.at.least(startTime);
            res.body.creator.name.should.equals("user Meier");
            statusFeedbackId = res.body.statusFeedbackId;
            return db.cypher().match("(feedback:Feedback {feedbackId: '1'})<-[]-(status:Feedback:Comment:Status)<-[:IS_CREATOR]-(:User {userId: '1'})")
                .return('feedback, status').end().send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.status.should.equals("closed");
            feedback[0].status.created.should.be.at.least(startTime);
            feedback[0].status.text.should.equals("So ein Grund");
            feedback[0].status.status.should.equals("closed");
            feedback[0].status.feedbackId.should.equals(statusFeedbackId);
        });
    });

    it('Close a idea', function () {

        let statusFeedbackId;
        startTime = Math.floor(moment.utc().valueOf() / 1000);

        dbDsl.createFeedbackIdea('1', '1', 500, 600);

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '1', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.closedDate.should.be.at.least(startTime);
            res.body.creator.name.should.equals("user Meier");
            statusFeedbackId = res.body.statusFeedbackId;
            return db.cypher().match("(feedback:Feedback {feedbackId: '1'})<-[]-(status:Feedback:Comment:Status)<-[:IS_CREATOR]-(:User {userId: '1'})")
                .return('feedback, status').end().send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.status.should.equals("closed");
            feedback[0].status.created.should.be.at.least(startTime);
            feedback[0].status.text.should.equals("So ein Grund");
            feedback[0].status.status.should.equals("closed");
            feedback[0].status.feedbackId.should.equals(statusFeedbackId);
        });
    });

    it('Close a discussion', function () {

        let statusFeedbackId;
        startTime = Math.floor(moment.utc().valueOf() / 1000);

        dbDsl.createFeedbackDiscussion('1', '1', 507);
        dbDsl.createFeedbackDiscussionIdea('2', '1', '1', 509);

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '1', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.closedDate.should.be.at.least(startTime);
            res.body.creator.name.should.equals("user Meier");
            statusFeedbackId = res.body.statusFeedbackId;
            return db.cypher().match("(feedback:Feedback {feedbackId: '1'})<-[]-(status:Feedback:Comment:Status)<-[:IS_CREATOR]-(:User {userId: '1'})")
                .return('feedback, status').end().send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.status.should.equals("closed");
            feedback[0].status.created.should.be.at.least(startTime);
            feedback[0].status.text.should.equals("So ein Grund");
            feedback[0].status.status.should.equals("closed");
            feedback[0].status.feedbackId.should.equals(statusFeedbackId);
        });
    });

    it('Close a discussion idea', function () {

        let statusFeedbackId;
        startTime = Math.floor(moment.utc().valueOf() / 1000);

        dbDsl.createFeedbackDiscussion('1', '1', 507);
        dbDsl.createFeedbackDiscussionIdea('2', '1', '1', 509);

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '2', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.closedDate.should.be.at.least(startTime);
            res.body.creator.name.should.equals("user Meier");
            statusFeedbackId = res.body.statusFeedbackId;
            return db.cypher().match("(feedback:Feedback {feedbackId: '2'})<-[]-(status:Feedback:Comment:Status)<-[:IS_CREATOR]-(:User {userId: '1'})")
                .return('feedback, status').end().send();
        }).then(function (feedback) {
            feedback.length.should.equals(1);
            feedback[0].feedback.status.should.equals("closed");
            feedback[0].status.created.should.be.at.least(startTime);
            feedback[0].status.text.should.equals("So ein Grund");
            feedback[0].status.status.should.equals("closed");
            feedback[0].status.feedbackId.should.equals(statusFeedbackId);
        });
    });

    it('Close already closed feedback (400)', function () {

        dbDsl.createFeedbackIdea('1', '1', 500, 600, 'closed');

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '1', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(400);
        });
    });

    it('Close not existing feedback (400)', function () {

        dbDsl.createFeedbackIdea('1', '1', 500, 600);

        return dbDsl.sendToDb().then(function () {
            return requestHandler.login(users.validUser);
        }).then(function (agent) {
            requestAgent = agent;
            return requestHandler.post('/api/admin/feedback/close', {feedbackId: '2', reasonText: 'So ein Grund'}, requestAgent);
        }).then(function (res) {
            res.status.should.equal(400);
        });
    });
});
