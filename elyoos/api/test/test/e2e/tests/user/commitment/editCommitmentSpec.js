'use strict';

const users = require('elyoos-server-test-util').user;
const db = require('elyoos-server-test-util').db;
const dbDsl = require('elyoos-server-test-util').dbDSL;
const requestHandler = require('elyoos-server-test-util').requestHandler;
const moment = require('moment');
const sinon = require('sinon');
const should = require('chai').should();
const stubCDN = require('elyoos-server-test-util').stubCDN();

describe('Modify a commitment', function () {

    let startTime, sandbox;

    beforeEach(async function () {
        stubCDN.uploadBuffer.reset();
        stubCDN.copyFile.reset();
        sandbox = sinon.sandbox.create();
        await dbDsl.init(3);
        startTime = Math.floor(moment.utc().valueOf() / 1000);

        dbDsl.createRegion('international', {});
        dbDsl.createRegion('region-1', {upperRegionLayerCode: 'international'});
        dbDsl.createRegion('region-2', {upperRegionLayerCode: 'international'});

        dbDsl.createCommitment('1', {
            adminId: '1', topics: ['Spiritual', 'Meditation'], language: 'de', created: 700,
            website: 'https://www.example.org/', regions: ['region-1']
        });
        dbDsl.createCommitment('2', {
            adminId: '2', topics: ['Spiritual', 'Meditation'], language: 'de', created: 700,
            website: 'https://www.example.org/', regions: ['region-1']
        });
    });

    afterEach(function () {
        sandbox.restore();
        return requestHandler.logout();
    });

    it('Modify a commitment with reset of the title image (only mandatory properties)', async function () {
        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.put('/api/user/commitment/1', {
            title: 'Commitment Example',
            description: 'Commitment Example Description',
            lang: 'en',
            resetImage: true
        });
        res.status.should.equal(200);
        res.body.slug.should.equals('commitment-example');
        stubCDN.uploadBuffer.called.should.be.false;
        stubCDN.copyFile.calledWith('default/commitment/title.jpg', `commitment/1/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.copyFile.calledWith('default/commitment/120x120/title.jpg', `commitment/1/120x120/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.copyFile.calledWith('default/commitment/148x148/title.jpg', `commitment/1/148x148/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.copyFile.calledWith('default/commitment/460x460/title.jpg', `commitment/1/460x460/title.jpg`, sinon.match.any).should.be.true;

        let resp = await db.cypher().match("(commitment:Commitment)<-[:IS_ADMIN]-(user:User {userId: '1'})")
            .return(`commitment`).end().send();
        resp.length.should.equals(1);
        resp[0].commitment.title.should.equals('Commitment Example');
        resp[0].commitment.description.should.equals('Commitment Example Description');
        should.not.exist(resp[0].commitment.website);
        resp[0].commitment.created.should.equals(700);
        resp[0].commitment.modified.should.least(startTime);
        resp[0].commitment.language.should.equals('en');
    });

    it('Modify a commitment and not reset of the title image (only mandatory properties)', async function () {
        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.put('/api/user/commitment/1', {
            title: 'Commitment Example',
            description: 'Commitment Example Description',
            lang: 'en',
            resetImage: false
        });
        res.status.should.equal(200);
        res.body.slug.should.equals('commitment-example');
        stubCDN.uploadBuffer.called.should.be.false;
        stubCDN.copyFile.called.should.be.false;
    });

    it('Modify a commitment (all properties)', async function () {
        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.put('/api/user/commitment/1', {
            title: 'Commitment Example',
            description: 'Commitment Example Description',
            website: 'https://www.example2.org/',
            lang: 'en'
        }, `${__dirname}/test.jpg`);
        res.status.should.equal(200);
        res.body.slug.should.equals('commitment-example');
        stubCDN.uploadBuffer.calledWith(sinon.match.any, `commitment/1/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.uploadBuffer.calledWith(sinon.match.any, `commitment/1/120x120/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.uploadBuffer.calledWith(sinon.match.any, `commitment/1/148x148/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.uploadBuffer.calledWith(sinon.match.any, `commitment/1/460x460/title.jpg`, sinon.match.any).should.be.true;
        stubCDN.copyFile.called.should.be.false;

        let resp = await db.cypher().match("(commitment:Commitment)<-[:IS_ADMIN]-(user:User {userId: '1'})")
            .return(`commitment`).end().send();
        resp.length.should.equals(1);
        resp[0].commitment.title.should.equals('Commitment Example');
        resp[0].commitment.description.should.equals('Commitment Example Description');
        resp[0].commitment.website.should.equals('https://www.example2.org/');
        resp[0].commitment.created.should.equals(700);
        resp[0].commitment.modified.should.least(startTime);
        resp[0].commitment.language.should.equals('en');
    });

    it('Only allowed to modify commitment where user is admin', async function () {
        await dbDsl.sendToDb();
        await requestHandler.login(users.validUser);
        let res = await requestHandler.put('/api/user/commitment/2', {
            title: 'Commitment Example',
            description: 'Commitment Example Description',
            lang: 'en'
        });
        res.status.should.equal(400);
    });


    it('Only allowed to modify a commitment as logged in user', async function () {
        await dbDsl.sendToDb();
        let res = await requestHandler.put('/api/user/commitment/1', {
            title: 'Commitment Example',
            description: 'Commitment Example Description',
            lang: 'en'
        });
        res.status.should.equal(401);
    });
});
