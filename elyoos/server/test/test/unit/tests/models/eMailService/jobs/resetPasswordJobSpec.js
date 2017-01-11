'use strict';

let testee = require('../../../../../../../models/eMailService/jobs/resetPasswordJob');
let email = require('elyoos-server-lib').eMail;
let db = require('elyoos-server-test-util').db;
let sinon = require('sinon');
let expect = require('chai').expect;

describe('Unit Test eMailService/jobs/resetPasswordJob', function () {

    let sandbox;

    before(function () {
        sandbox = sinon.sandbox.create();
    });

    beforeEach(function () {
        return db.clearDatabase();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('Send a email to a user with reset password link', function () {

        let finished = sinon.spy(), linkId = 'abro8ueiQ', sendEMail = sandbox.stub(email, 'sendEMail');

        return db.cypher().create(`(:User {email: 'test@gmx.ch', userId: '1', resetPasswordLinkId: '${linkId}'})`)
            .end().send().then(function () {
                return testee.processDefinition({email: 'test@gmx.ch', linkId: linkId}, finished).then(function () {
                    expect(sendEMail.withArgs('resetPassword', {link: `https://www.elyoos.org/password/reset/${linkId}`, }, 'test@gmx.ch').calledOnce).to.be.true;
                    expect(finished.calledOnce).to.be.true;
                });
            });
    });
});
