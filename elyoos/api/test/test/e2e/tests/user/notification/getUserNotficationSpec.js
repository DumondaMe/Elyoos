'use strict';

const users = require('elyoos-server-test-util').user;
const dbDsl = require('elyoos-server-test-util').dbDSL;
const requestHandler = require('elyoos-server-test-util').requestHandler;

describe('Get notifications of a user', function () {


    beforeEach(async function () {
        await dbDsl.init(5);

        dbDsl.createRegion('region-1', {});
    });

    afterEach(function () {
        return requestHandler.logout();
    });

    it('Get notification when admin of commitment and commitment has been added to question', async function () {

        dbDsl.createQuestion('1', {
            creatorId: '2', question: 'Das ist eine Frage', description: 'description', topics: ['Spiritual'],
            language: 'de'
        });
        dbDsl.createCommitment('2', {
            adminId: '1', topics: ['Spiritual', 'Meditation'], language: 'de', created: 700, modified: 701,
            website: 'https://www.example.org/', regions: ['region-1'], title: 'Das ist ein Test'
        });
        dbDsl.createCommitmentAnswer('100', {
            creatorId: '2', questionId: '1', commitmentId: '10', created: 500, description: 'test'
        });

        dbDsl.notificationShowQuestionOnCommitmentRequest('50', {questionId: '1', commitmentId: '2', adminId: '1',
            created: 666});

        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.get('/api/user/notification');
        res.status.should.equal(200);
        res.body.numberOfNotifications.should.equals(1);
        res.body.notifications.length.should.equals(1);
        res.body.notifications[0].notificationId.should.equals('50');
        res.body.notifications[0].created.should.equals(666);
        res.body.notifications[0].type.should.equals('showQuestionRequest');
        res.body.notifications[0].commitmentId.should.equals('2');
        res.body.notifications[0].commitmentTitle.should.equals('Das ist ein Test');
        res.body.notifications[0].commitmentSlug.should.equals('das-ist-ein-test');
        res.body.notifications[0].questionId.should.equals('1');
        res.body.notifications[0].question.should.equals('Das ist eine Frage');
        res.body.notifications[0].questionSlug.should.equals('das-ist-eine-frage');

    });

    it('Get notification when user has been added to trust circle', async function () {

        dbDsl.createContactConnection('3', '1', null, 400);
        dbDsl.createContactConnection('4', '1', null, 401);
        dbDsl.notificationUserAddedToTrustCircle('50', {userId: '1', created: 678, trustCircleUsers:
                [{userId: '3', created: 400}, {userId: '4', created: 401}]});

        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.get('/api/user/notification');
        res.status.should.equal(200);
        res.body.numberOfNotifications.should.equals(1);
        res.body.notifications.length.should.equals(1);
        res.body.notifications[0].notificationId.should.equals('50');
        res.body.notifications[0].created.should.equals(678);
        res.body.notifications[0].type.should.equals('addedToTrustCircle');
        res.body.notifications[0].numberOfAddedUsers.should.equals(2);
        res.body.notifications[0].users.length.should.equals(2);
        res.body.notifications[0].users[0].userId.should.equals('4');
        res.body.notifications[0].users[0].added.should.equals(401);
        res.body.notifications[0].users[0].name.should.equals('user Meier4');
        res.body.notifications[0].users[0].slug.should.equals('user-meier4');
        res.body.notifications[0].users[0].thumbnailUrl.should.equals('profileImage/4/thumbnail.jpg');
        res.body.notifications[0].users[1].userId.should.equals('3');
        res.body.notifications[0].users[1].added.should.equals(400);
        res.body.notifications[0].users[1].name.should.equals('user Meier3');
        res.body.notifications[0].users[1].slug.should.equals('user-meier3');
        res.body.notifications[0].users[1].thumbnailUrl.should.equals('profileImage/3/thumbnail.jpg');
    });
});
