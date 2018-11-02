'use strict';

let db = require('../db');
let dbConnectionHandling = require('./dbConnectionHandling');

let setUserRegisteredDate = function (userId, registerDate) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`).set("u", {registerDate: registerDate})
        .end({userId: userId}).getCommand());
};

let setUserLastLoginTime = function (lastLogin) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: '1'})`).set("u", {lastLogin: lastLogin})
        .end().getCommand());
};

let setUserIsDumondaMeAdmin = function (userId) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`).set("u", {dumondaMeAdmin: true})
        .end({userId: userId}).getCommand());
};

let setUserIsSuperUser = function (userId) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`)
        .addCommand(` set u :SuperUser`)
        .end({userId: userId}).getCommand());
};

let setUserLocation = function (userId, data) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`)
        .set("u", {userLocationDescription: data.description, latitude: data.latitude, longitude: data.longitude})
        .end({userId: userId}).getCommand());
};

let setUserEmail = function (userId, data) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`)
        .set("u", {email: data.email})
        .end({userId: userId}).getCommand());
};

let createUser = function (userId, forename, surname, email) {
    let name = `${forename} ${surname}`;
    email = email || null;
    dbConnectionHandling.getCommands().push(db.cypher().create(`(:User {email: {email}, 
        name: {name}, surname: {surname}, forename: {forename}, userId: {userId}})`)
        .end({name: name, surname: surname, forename: forename, userId: userId, email: email}).getCommand());
};

let createUserRegisterRequest = function (data) {
    dbConnectionHandling.getCommands().push(db.cypher().create(`(:UserRegisterRequest {name: {name}, surname: {surname},
    forename: {forename}, email: {email}, emailNormalized: {emailNormalized}, linkId: {linkId}, password: {password}, registerDate: {registerDate},
    latitude: {latitude}, longitude: {longitude}})`)
        .end({
            name: `${data.forename} ${data.surname}`,
            surname: data.surname,
            forename: data.forename,
            email: data.email,
            emailNormalized: data.emailNormalized,
            linkId: data.linkId,
            password: data.password,
            registerDate: data.registerDate,
            latitude: data.latitude,
            longitude: data.longitude
        }).getCommand());
};

let blockUser = function (userId, blockedUserId) {
    dbConnectionHandling.getCommands().push(db.cypher().match('(user:User {userId: {userId}}), (blockedUser:User {userId: {blockedUserId}})')
        .create(`(user)-[:IS_BLOCKED]->(blockedUser)`)
        .end({
            userId: userId, blockedUserId: blockedUserId
        }).getCommand());
};

let invitationSentBeforeRegistration = function (userId, data) {
    data.forEach(function (invitationData) {
        invitationData.invitationSent = invitationData.invitationSent || null;
        invitationData.message = invitationData.message || null;
        invitationData.emailNormalized = invitationData.emailNormalized || invitationData.email;
        dbConnectionHandling.getCommands().push(db.cypher().match('(user:User {userId: {userId}})')
            .createUnique(`(user)-[:HAS_INVITED]->(:InvitedUser {email: {email}, emailNormalized: {emailNormalized},
            message: {message}, invitationSent: {invitationSent}})`)
            .end({
                userId: userId, email: invitationData.email, emailNormalized: invitationData.emailNormalized,
                invitationSent: invitationData.invitationSent, message: invitationData.message
            }).getCommand());
    });
};

let inviteUser = function (userId, invitedUserId) {
    dbConnectionHandling.getCommands().push(db.cypher().match('(user:User {userId: {userId}}), (invitedUser:User {userId: {invitedUserId}})')
        .create(`(user)-[:HAS_INVITED]->(invitedUser)`)
        .end({
            userId: userId, invitedUserId: invitedUserId
        }).getCommand());
};

let setUserPrivacy = function (userId, data) {
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User {userId: {userId}})")
        .set("u", {privacyMode: data.privacyMode}).end({userId}).getCommand());
};

let setUserProfileActivityPrivacy = function (userId, data) {
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User {userId: {userId}})")
        .set("u", {showProfileActivity: data.showProfileActivity}).end({userId}).getCommand());
};

let setUserName = function (userId, data) {
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User {userId: {userId}})")
        .set("u", {name: data.name}).end({userId}).getCommand());
};


module.exports = {
    setUserRegisteredDate,
    setUserLastLoginTime,
    setUserIsDumondaMeAdmin,
    setUserIsSuperUser,
    setUserLocation,
    setUserEmail,
    createUser,
    createUserRegisterRequest,
    blockUser,
    invitationSentBeforeRegistration,
    inviteUser,
    setUserPrivacy,
    setUserProfileActivityPrivacy,
    setUserName
};