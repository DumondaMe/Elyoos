'use strict';

var libUser = require('elyoos-server-lib').user();
var users = require('elyoos-server-test-util').user;
var requestHandler = require('elyoos-server-test-util').requestHandler;
var should = require('chai').should();
var db = require('elyoos-server-test-util').db;

describe('Integration Tests User Profile Data', function () {

    beforeEach(function () {

        libUser.removeFromCache('user@irgendwo.ch');
        libUser.removeFromCache('userchange@irgendwo.ch');

        return db.clearDatabase().then(function () {

            return db.cypher().create("(:User {email: {email}, password: {password}, forename: {forename}, surname: {surname}, birthday: {birthday}, country: {country}," +
                    "female: {female},street: {street},place: {place}, userId: {userId}})")
                .end({
                    email: 'user@irgendwo.ch',
                    password: '$2a$10$JlKlyw9RSpt3.nt78L6VCe0Kw5KW4SPRaCGSPMmpW821opXpMgKAm',
                    forename: 'user',
                    surname: 'Meier',
                    birthday: '1982-03-26',
                    country: 'Switzerland',
                    street: 'irgendwo',
                    place: 'Urdorf',
                    female: false,
                    userId: '0'
                }).send()
                .then(function () {
                    return db.cypher().create("(:User {email: {email}, password: {password}, userId: {userId}})")
                        .end({
                            email: 'userchange@irgendwo.ch',
                            password: '$2a$10$JlKlyw9RSpt3.nt78L6VCe0Kw5KW4SPRaCGSPMmpW821opXpMgKAm',
                            userId: '1'
                        }).send();
                });
        });
    });

    afterEach(function () {
        return requestHandler.logout();
    });

    it('Get User Data when logged in - Return a 200', function () {
        var commands = [];
        commands.push(db.cypher().create("(:User {name: 'user Meier2', userId: '2'})").end().getCommand());
        commands.push(db.cypher().create("(:User {name: 'user Meier3', userId: '3'})").end().getCommand());
        commands.push(db.cypher().create("(:User {name: 'user Meier4', userId: '4'})").end().getCommand());
        commands.push(db.cypher().create("(:User {name: 'user Meier5', userId: '5'})").end().getCommand());
        commands.push(db.cypher().create("(:User {name: 'user Meier6', userId: '6'})").end().getCommand());
        commands.push(db.cypher().create("(:User {name: 'user Meier7', userId: '7'})").end().getCommand());
        
        //Create Contacts
        commands.push(db.cypher().match("(a:User), (b:User {userId: '0'})").where("a.userId IN ['2','3','4','5']")
            .create("(b)-[:IS_CONTACT {type: 'Freund'}]->(a)").end().getCommand());
        return db.cypher().match("(a:User {userId: '0'}), (b:User)").where("b.userId IN ['6','7']")
            .create("(b)-[:IS_CONTACT {type: 'Freund'}]->(a)").end().send(commands)
            .then(function () {
                return requestHandler.login(users.validUser);
            }).then(function (agent) {
                return requestHandler.get('/api/user/settings/profile', agent);
            }).then(function (res) {
                res.status.should.equal(200);
                res.body.email.should.equal('user@irgendwo.ch');
                res.body.forename.should.equal('user');
                res.body.surname.should.equal('Meier');
                res.body.birthday.should.equal('1982-03-26');
                res.body.country.should.equal('Switzerland');
                res.body.street.should.equal('irgendwo');
                res.body.place.should.equal('Urdorf');
                res.body.female.should.equal(false);
                should.not.exist(res.body.password);
                res.body.profileImage.should.equal('profileImage/0/profile.jpg');
                res.body.numberOfContacts.should.equal(4);
                res.body.numberOfContacting.should.equal(2);
            });
    });

    it('Get no user data when not logged in - Return a 401', function () {
        return requestHandler.get('/api/user/settings/profile').then(function (res) {
            res.status.should.equal(401);
        });
    });

    it('Post new user data when not logged in- Return a 401', function () {
        var user = {
            forename: 'user',
            surname: 'surname',
            birthday: 123546,
            country: 'Schweiz',
            female: true
        };

        return requestHandler.post('/api/user/settings/profile', user, null).then(function (res) {
            res.status.should.equal(401);
        });
    });

    it('Post only required valid user data - Return a 200', function () {
        var user = {
            forename: 'user',
            surname: 'surname',
            birthday: 123546,
            country: 'Schweiz',
            female: false
        };

        return requestHandler.login(users.changeUserData).then(function (agent) {
            return requestHandler.post('/api/user/settings/profile', user, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(user:User {userId: '1'})")
                .return('user')
                .end()
                .send();
        }).then(function (user) {
            user.length.should.equals(1);
            user[0].user.forename.should.equals('user');
            user[0].user.surname.should.equals('surname');
            user[0].user.birthday.should.equals(123546);
            user[0].user.country.should.equals('Schweiz');
            user[0].user.female.should.equals(false);
        });
    });

    it('Post required and optional valid user data - Return a 200', function () {
        var user = {
            forename: 'user',
            surname: 'surname',
            birthday: 123546,
            female: true,
            country: 'Schweiz',
            street: 'Main Street',
            place: 'Winkel'
        };

        return requestHandler.login(users.changeUserData).then(function (agent) {
            return requestHandler.post('/api/user/settings/profile', user, agent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(user:User {userId: '1'})")
                .return('user')
                .end()
                .send();
        }).then(function (user) {
            user.length.should.equals(1);
            user[0].user.forename.should.equals('user');
            user[0].user.surname.should.equals('surname');
            user[0].user.birthday.should.equals(123546);
            user[0].user.country.should.equals('Schweiz');
            user[0].user.female.should.equals(true);
            user[0].user.street.should.equals('Main Street');
            user[0].user.place.should.equals('Winkel');
        });
    });

    it('Remove the optional street and place values - Return a 200', function () {
        var user = {
            forename: 'user',
            surname: 'surname',
            birthday: 123546,
            female: true,
            country: 'Schweiz',
            street: 'Main Street',
            place: 'Urdorf'
        }, userAgent;

        return requestHandler.login(users.changeUserData).then(function (agent) {
            userAgent = agent;
            return requestHandler.post('/api/user/settings/profile', user, userAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            delete user.street;
            delete user.place;
            return requestHandler.post('/api/user/settings/profile', user, userAgent);
        }).then(function (res) {
            res.status.should.equal(200);
            return db.cypher().match("(user:User {userId: '1'})")
                .return('user')
                .end()
                .send();
        }).then(function (user) {
            user.length.should.equals(1);
            user[0].user.forename.should.equals('user');
            user[0].user.surname.should.equals('surname');
            user[0].user.birthday.should.equals(123546);
            user[0].user.country.should.equals('Schweiz');
            user[0].user.female.should.equals(true);
            should.not.exist(user[0].user.street);
            should.not.exist(user[0].user.place);
        });
    });
});
