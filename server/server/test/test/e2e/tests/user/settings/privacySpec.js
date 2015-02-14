'use strict';

var libUser = require('../../../../../../lib/user')();
var requestHandler = require('../../util/request');
var users = require('../../util/user');
var should = require('chai').should();
var db = require('../../util/db');
var moment = require('moment');

describe('Integration Tests for the privacy settings', function () {

    beforeEach(function () {

        libUser.removeFromCache('user@irgendwo.ch');
        return db.clearDatabase().then(function () {
            var commands = [], startTime = Math.floor(moment.utc().valueOf() / 1000);
            commands.push(db.cypher().create("(:User {email: 'user@irgendwo.ch', password: '1234', name: 'user Meier', userId: '1'})").end().getCommand());
            commands.push(db.cypher().create("(:User {email: 'user@irgendwo2.ch', password: '1234', name: 'user Meier2', userId: '2'})").end().getCommand());
            commands.push(db.cypher().create("(:User {email: 'user@irgendwo3.ch', password: '1234', name: 'user Meier3', userId: '3'})").end().getCommand());
            commands.push(db.cypher().create("(:User {email: 'user@irgendwo4.ch', password: '1234', name: 'user Meier4', userId: '4'})").end().getCommand());

            commands.push(db.cypher().match("(u:User {userId: '1'}), (u2:User {userId: '2'})")
                .create("(u)-[:IS_CONTACT {type: 'Freund', contactAdded: {contactAdded}}]->(u2)")
                .end({contactAdded: startTime - 86401}).getCommand());
            commands.push(db.cypher().match("(u:User {userId: '1'}), (u2:User {userId: '3'})")
                .create("(u)-[:IS_CONTACT {type: 'Freund', contactAdded: {contactAdded}}]->(u2)")
                .end({contactAdded: startTime - 86401}).getCommand());
            commands.push(db.cypher().match("(u:User {userId: '1'}), (u2:User {userId: '4'})")
                .create("(u)-[:IS_CONTACT {type: 'Familie', contactAdded: {contactAdded}}]->(u2)")
                .end({contactAdded: startTime - 86401}).getCommand());

            commands.push(db.cypher().match("(u:User {userId: '1'})")
                .create("(u)-[:HAS_PRIVACY {type: 'Freund'}]->(:Privacy {profile: true, profileData: true, contacts: false, image: true})")
                .end().getCommand());
            commands.push(db.cypher().match("(u:User {userId: '1'})")
                .create("(u)-[:HAS_PRIVACY {type: 'Familie'}]->(:Privacy {profile: true, profileData: true, contacts: true, image: true})")
                .end().getCommand());
            commands.push(db.cypher().match("(u:User {userId: '1'})")
                .create("(u)-[:HAS_PRIVACY {type: 'Bekannter'}]->(:Privacy {profile: true, profileData: false, contacts: false, image: true})")
                .end().getCommand());
            return db.cypher().match("(u:User {userId: '1'})")
                .create("(u)-[:HAS_PRIVACY_NO_CONTACT]->(:Privacy {profile: false, profileData: false, contacts: false, image: false})")
                .end().send(commands);
        });
    });

    afterEach(function (done) {
        requestHandler.logout(done);
    });

    it('Get the privacy settings of the user- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            return requestHandler.get('/api/user/settings/privacy', agent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.normal.length.should.equal(3);
            res.body.normal[0].type.should.equal('Freund');
            res.body.normal[0].profileVisible.should.be.true;
            res.body.normal[0].profileDataVisible.should.be.true;
            res.body.normal[0].imageVisible.should.be.true;
            res.body.normal[0].contactsVisible.should.be.false;
            res.body.normal[1].type.should.equal('Familie');
            res.body.normal[1].profileVisible.should.be.true;
            res.body.normal[1].profileDataVisible.should.be.true;
            res.body.normal[1].imageVisible.should.be.true;
            res.body.normal[1].contactsVisible.should.be.true;
            res.body.normal[2].type.should.equal('Bekannter');
            res.body.normal[2].profileVisible.should.be.true;
            res.body.normal[2].profileDataVisible.should.be.false;
            res.body.normal[2].imageVisible.should.be.true;
            res.body.normal[2].contactsVisible.should.be.false;

            res.body.noContact.profileVisible.should.be.false;
            res.body.noContact.profileDataVisible.should.be.false;
            res.body.noContact.imageVisible.should.be.false;
            res.body.noContact.contactsVisible.should.be.false;
        });
    });

    it('Change the privacy settings for a contact type- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                changePrivacySetting: {
                    privacySettings: {
                        profileVisible: false,
                        profileDataVisible: false,
                        imageVisible: false,
                        contactsVisible: false
                    },
                    privacyDescription: 'Familie'
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(:User {userId: '1'})-[:HAS_PRIVACY {type:'Familie'}]->(privacy:Privacy)")
                .return('privacy.profile as profile, privacy.profileData as profileData, privacy.contacts as contacts, privacy.image as image')
                .end().send();
        }).then(function (privacy) {
            privacy.length.should.equals(1);
            privacy[0].profile.should.be.false;
            privacy[0].profileData.should.be.false;
            privacy[0].contacts.should.be.false;
            privacy[0].image.should.be.false;
        });
    });

    it('Change the privacy settings for a non existing type- Return a 400', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                changePrivacySetting: {
                    privacySettings: {
                        profileVisible: false,
                        profileDataVisible: false,
                        imageVisible: false,
                        contactsVisible: false
                    },
                    privacyDescription: 'Famili'
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(400);
        });
    });

    it('Change the privacy settings for a all non contact types- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                changePrivacyNoContactSetting: {
                    privacySettings: {
                        profileVisible: true,
                        profileDataVisible: true,
                        imageVisible: true,
                        contactsVisible: true
                    }
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(:User {userId: '1'})-[:HAS_PRIVACY_NO_CONTACT]->(privacy:Privacy)")
                .return('privacy.profile as profile, privacy.profileData as profileData, privacy.contacts as contacts, privacy.image as image')
                .end().send();
        }).then(function (privacy) {
            privacy.length.should.equals(1);
            privacy[0].profile.should.be.true;
            privacy[0].profileData.should.be.true;
            privacy[0].contacts.should.be.true;
            privacy[0].image.should.be.true;
        });
    });

    it('Rename a privacy type and rename the corresponding contact connections- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                renamePrivacy: {
                    privacyDescription: 'Freund',
                    newPrivacyDescription: 'Freund2'
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(:User {userId: '1'})-[r:IS_CONTACT]->(:User)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(2);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Freund2');
            contactType[1].count.should.equals(2);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(:Privacy)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(3);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Freund2');
            contactType[1].count.should.equals(1);
            contactType[2].type.should.equals('Bekannter');
            contactType[2].count.should.equals(1);
        });
    });

    it('Rename a privacy to a existing privacy shall fail- Return a 400', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                renamePrivacy: {
                    privacyDescription: 'Freund',
                    newPrivacyDescription: 'Bekannter'
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(400);
            return db.cypher().match("(:User {userId: '1'})-[r:IS_CONTACT]->(:User)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(2);
            contactType[0].type.should.equals('Freund');
            contactType[0].count.should.equals(2);
            contactType[1].type.should.equals('Familie');
            contactType[1].count.should.equals(1);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(:Privacy)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(3);
            contactType[0].type.should.equals('Freund');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Familie');
            contactType[1].count.should.equals(1);
            contactType[2].type.should.equals('Bekannter');
            contactType[2].count.should.equals(1);
        });
    });

    it('Add a new privacy type - Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                addNewPrivacy: {
                    privacyDescription: 'Irgendwas',
                    privacySettings: {
                        profileVisible: true,
                        profileDataVisible: true,
                        imageVisible: true,
                        contactsVisible: true
                    }
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(privacy:Privacy)")
                .return('r.type as type, count(r.type) as count, privacy.profile as profile, privacy.profileData as profileData, ' +
                'privacy.contacts as contacts, privacy.image as image')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(4);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Bekannter');
            contactType[1].count.should.equals(1);
            contactType[2].type.should.equals('Freund');
            contactType[2].count.should.equals(1);
            contactType[3].type.should.equals('Irgendwas');
            contactType[3].count.should.equals(1);
            contactType[3].profile.should.be.true;
            contactType[3].profileData.should.be.true;
            contactType[3].image.should.be.true;
            contactType[3].contacts.should.be.true;
        });
    });

    it('Adding a new privacy type fails because privacy type exists already- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                addNewPrivacy: {
                    privacyDescription: 'Freund',
                    privacySettings: {
                        profileVisible: false,
                        profileDataVisible: false,
                        imageVisible: false,
                        contactsVisible: false
                    }
                }
            };
            return requestHandler.post('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(400);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(privacy:Privacy)")
                .return('r.type as type, count(r.type) as count, privacy.profile as profile, privacy.profileData as profileData, ' +
                'privacy.contacts as contacts, privacy.image as image')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(3);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Bekannter');
            contactType[1].count.should.equals(1);
            contactType[2].type.should.equals('Freund');
            contactType[2].count.should.equals(1);
            contactType[2].profile.should.be.true;
            contactType[2].profileData.should.be.true;
            contactType[2].image.should.be.true;
            contactType[2].contacts.should.be.false;
        });
    });

    it('Delete a privacy setting and move the contacts to the new privacy settings- Return a 200', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                privacyDescription: 'Freund',
                newPrivacyDescription: 'Familie'
            };
            return requestHandler.del('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(:User {userId: '1'})-[r:IS_CONTACT]->(:User)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(1);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(3);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(:Privacy)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(2);
            contactType[0].type.should.equals('Familie');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Bekannter');
            contactType[1].count.should.equals(1);
        });
    });

    it('Delete a privacy setting fails because the privacy setting to move existing contacts does not exist- Return a 400', function () {
        return requestHandler.login(users.validUser).then(function (agent) {
            var data = {
                privacyDescription: 'Freund',
                newPrivacyDescription: 'Famili'
            };
            return requestHandler.del('/api/user/settings/privacy', data, agent);
        }).then(function (res) {
            res.status.should.equal(400);
            return db.cypher().match("(:User {userId: '1'})-[r:IS_CONTACT]->(:User)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(2);
            contactType[0].type.should.equals('Freund');
            contactType[0].count.should.equals(2);
            contactType[1].type.should.equals('Familie');
            contactType[1].count.should.equals(1);
            return db.cypher().match("(:User {userId: '1'})-[r:HAS_PRIVACY]->(:Privacy)")
                .return('r.type as type, count(r.type) as count')
                .end().send();
        }).then(function (contactType) {
            contactType.length.should.equals(3);
            contactType[0].type.should.equals('Freund');
            contactType[0].count.should.equals(1);
            contactType[1].type.should.equals('Familie');
            contactType[1].count.should.equals(1);
            contactType[2].type.should.equals('Bekannter');
            contactType[2].count.should.equals(1);
        });
    });
});
