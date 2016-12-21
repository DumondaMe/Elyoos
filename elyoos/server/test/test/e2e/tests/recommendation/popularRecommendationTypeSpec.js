'use strict';

var users = require('elyoos-server-test-util').user;
var dbDsl = require('elyoos-server-test-util').dbDSL;
var requestHandler = require('elyoos-server-test-util').requestHandler;

describe('Integration Tests for getting popular recommendations filtered by recommendation type', function () {

    var requestAgent;

    before(function () {
        return dbDsl.init(8).then(function () {
            dbDsl.createPrivacyNoContact(null, {profile: true, image: true, profileData: true, contacts: true, pinwall: true});
            dbDsl.createContactConnection('1', '2');
            dbDsl.createContactConnection('1', '3');

            dbDsl.createBookPage('1', ['en'], ['health'], 5072, 'HansMuster1', 1000);
            dbDsl.createBookPage('2', ['de'], ['personalDevelopment'], 5071, 'HansMuster2', 1001);
            dbDsl.createYoutubePage('3', ['fr'], ['personalDevelopment'], 5073, 'www.youtube.com', 'www.youtube.com/embed');
            dbDsl.createLinkPage('4', ['fr'], ['personalDevelopment'], 5074, 'www.link.com/link', 200);

            dbDsl.createBlog('5', '5', ['en'], ['health'], 5077, null, 250);
            dbDsl.createBlog('6', '1', ['en'], ['spiritual'], 5077, null, null);

            dbDsl.crateRecommendationsForPage('2', [{userId: '2', created: 500}, {userId: '3', created: 501}]);
            dbDsl.crateRecommendationsForPage('3', [{userId: '3', created: 502}, {userId: '4', created: 503}]);
            dbDsl.crateRecommendationsForPage('4', [{userId: '3', created: 504}, {userId: '4', created: 505},
                {userId: '5', created: 506}, {userId: '6', created: 507}]);
            dbDsl.crateRecommendationsForBlog('5', [{userId: '3', created: 508}, {userId: '4', created: 509}, {userId: '7', created: 510}]);
            return dbDsl.sendToDb();
        });
    });

    afterEach(function () {
        return requestHandler.logout();
    });

    it('Getting most popular recommendations filtered on books - Return 200', function () {

        return requestHandler.login(users.validUser).then(function (agent) {
            requestAgent = agent;
            return requestHandler.getWithData('/api/recommendation/popular', {
                skip: '0',
                maxItems: 10,
                onlyContact: false,
                period: 'all',
                recommendationType: ['Book']
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);

            res.body.recommendations.length.should.equals(1);

            res.body.recommendations[0].label.should.equals('Book');
            res.body.recommendations[0].pageId.should.equals('2');
            res.body.recommendations[0].numberOfRecommendations.should.equals(2);
        });
    });

    it('Getting most popular recommendations filtered on youtube - Return 200', function () {

        return requestHandler.login(users.validUser).then(function (agent) {
            requestAgent = agent;
            return requestHandler.getWithData('/api/recommendation/popular', {
                skip: '0',
                maxItems: 10,
                onlyContact: false,
                period: 'all',
                recommendationType: ['Youtube']
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);

            res.body.recommendations.length.should.equals(1);

            res.body.recommendations[0].label.should.equals('Youtube');
            res.body.recommendations[0].pageId.should.equals('3');
            res.body.recommendations[0].numberOfRecommendations.should.equals(2);
        });
    });

    it('Getting most popular recommendations filtered on link - Return 200', function () {

        return requestHandler.login(users.validUser).then(function (agent) {
            requestAgent = agent;
            return requestHandler.getWithData('/api/recommendation/popular', {
                skip: '0',
                maxItems: 10,
                onlyContact: false,
                period: 'all',
                recommendationType: ['Link']
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);

            res.body.recommendations.length.should.equals(1);
            res.body.recommendations[0].label.should.equals('Link');
            res.body.recommendations[0].pageId.should.equals('4');
            res.body.recommendations[0].numberOfRecommendations.should.equals(4);
        });
    });

    it('Getting most popular recommendations filtered on blog - Return 200', function () {

        return requestHandler.login(users.validUser).then(function (agent) {
            requestAgent = agent;
            return requestHandler.getWithData('/api/recommendation/popular', {
                skip: '0',
                maxItems: 10,
                onlyContact: false,
                period: 'all',
                recommendationType: ['Blog']
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);

            res.body.recommendations.length.should.equals(1);

            res.body.recommendations[0].label.should.equals('Blog');
            res.body.recommendations[0].pageId.should.equals('5');
            res.body.recommendations[0].numberOfRecommendations.should.equals(3);
        });
    });
});
