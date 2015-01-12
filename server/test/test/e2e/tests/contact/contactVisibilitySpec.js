'use strict';

var app = require('../../../../../server');
var users = require('../util/user');
var db = require('../util/db');
var requestHandler = require('../util/request');
var should = require('chai').should();

describe('Integration Tests for handling the profile visibility when returning the user contacts', function () {

    var requestAgent;

    beforeEach(function () {

        var createUser = "(:User {email: {email}, password: {password}, forename: {forename}, surname: {surname}, name: {name}, userId: {userId}})";

        return db.clearDatabase().then(function () {
            return db.cypher().create(createUser)
                .end({
                    email: 'user@irgendwo.ch',
                    password: '1234',
                    name: 'user Meier',
                    forename: 'user',
                    surname: 'Meier',
                    userId: '1'
                }).send()
                .then(function () {
                    return db.cypher().create(createUser)
                        .end({
                            email: 'user@irgendwo2.ch',
                            password: '1234',
                            name: 'user2 Meier2',
                            forename: 'user2',
                            surname: 'Meier2',
                            userId: '2'
                        }).send()
                        .then(function () {
                            return db.cypher().match("(u:User), (u2:User)")
                                .where("u.userId = '1' AND u2.userId = '2'")
                                .create("(u2)-[:IS_CONTACT {type: 'Familie'}]->(u)-[:IS_CONTACT {type: 'Freund'}]->(u2)")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '2'})")
                                .create("(u)-[:IS_VISIBLE {type: 'Familie'}]->(:Visibility {profile: true, image: true})")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '2'})")
                                .create("(u)-[:IS_VISIBLE_NO_CONTACT]->(:Visibility {profile: false, image: false})")
                                .end().send();
                        });
                })
                .then(function () {
                    return db.cypher().create(createUser)
                        .end({
                            email: 'user@irgendwo3.ch',
                            password: '1234',
                            name: 'user3 Meier3',
                            forename: 'user3',
                            surname: 'Meier3',
                            userId: '3'
                        }).send()
                        .then(function () {
                            return db.cypher().match("(u:User), (u2:User)")
                                .where("u.userId = '1' AND u2.userId = '3'")
                                .create("(u)-[:IS_CONTACT {type: 'Freund'}]->(u2)")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '3'})")
                                .create("(u)-[:IS_VISIBLE {type: 'Familie'}]->(:Visibility {profile: false, image: true})")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '3'})")
                                .create("(u)-[:IS_VISIBLE_NO_CONTACT]->(:Visibility {profile: true, image: false})")
                                .end().send();
                        });
                })
                .then(function () {
                    return db.cypher().create(createUser)
                        .end({
                            email: 'user@irgendwo4.ch',
                            password: '1234',
                            name: 'user4 Meier4',
                            forename: 'user4',
                            surname: 'Meier4',
                            userId: '4'
                        }).send()
                        .then(function () {
                            return db.cypher().match("(u:User), (u2:User)")
                                .where("u.userId = '1' AND u2.userId = '4'")
                                .create("(u)-[:IS_CONTACT {type: 'Freund'}]->(u2)")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '4'})")
                                .create("(u)-[:IS_VISIBLE {type: 'Familie'}]->(:Visibility {profile: true, image: false})")
                                .end().send();
                        })
                        .then(function () {
                            return db.cypher().match("(u:User {userId: '4'})")
                                .create("(u)-[:IS_VISIBLE_NO_CONTACT]->(:Visibility {profile: true, image: false})")
                                .end().send();
                        });
                });
        });
    });

    afterEach(function (done) {
        requestHandler.logout(done);
    });

    it('Get all contacts of the user with the correct visibility- Return 200', function () {

        return requestHandler.login(users.validUser).then(function (agent) {
            requestAgent = agent;
            return requestHandler.getWithData('/api/user/contact', {
                itemsPerPage: 10,
                skip: 0
            }, requestAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            res.body.contacts.length.should.equal(3);
            res.body.contacts[0].id.should.equal("2");
            res.body.contacts[0].type.should.equal("Freund");
            res.body.contacts[0].name.should.equal("user2 Meier2");
            res.body.contacts[0].profileUrl.should.equal("cms/2/profile/thumbnail.jpg");

            res.body.contacts[1].id.should.equal("3");
            res.body.contacts[1].profileUrl.should.equal("cms/default/profile/thumbnail.jpg");

            res.body.contacts[2].id.should.equal("4");
            res.body.contacts[2].profileUrl.should.equal("cms/default/profile/thumbnail.jpg");

            //
            res.body.numberOfContacts.should.equal(3);
        });
    });
});
