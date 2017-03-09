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

let setUserIsElyoosAdmin = function (userId) {
    dbConnectionHandling.getCommands().push(db.cypher().match(`(u:User {userId: {userId}})`).set("u", {elyoosAdmin: true})
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
    forename: {forename}, email: {email}, linkId: {linkId}, password: {password}, registerDate: {registerDate}})`)
        .end({name: `${data.forename} ${data.surname}`, surname: data.surname, forename: data.forename, email: data.email,
            linkId: data.linkId, password: data.password, registerDate: data.registerDate}).getCommand());
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
        dbConnectionHandling.getCommands().push(db.cypher().match('(user:User {userId: {userId}})')
            .createUnique(`(user)-[:HAS_INVITED]->(:InvitedUser {email: {email}, invitationSent: {invitationSent}})`)
            .end({
                userId: userId, email: invitationData.email, invitationSent: invitationData.invitationSent
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

let createPrivacy = function (userIds, type, privacy) {
    let idsCommand = null;
    if (userIds) {
        idsCommand = "u.userId IN {userIds}";
    }
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User)")
        .where(idsCommand)
        .create(`(u)-[:HAS_PRIVACY {type: {type}}]->(:Privacy {profile: {profile}, image: {image}, contacts: {contacts}, 
                  pinwall: {pinwall}})`)
        .end({
            userIds: userIds,
            type: type,
            profile: privacy.profile,
            image: privacy.image,
            contacts: privacy.contacts,
            pinwall: privacy.pinwall
        }).getCommand());
};

let createPrivacyNoContact = function (userIds, privacy) {
    let idsCommand = null;
    if (userIds) {
        idsCommand = "u.userId IN {userIds}";
    }
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User)")
        .where(idsCommand)
        .create(`(u)-[:HAS_PRIVACY_NO_CONTACT]->(:Privacy {profile: {profile}, image: {image}, contacts: {contacts}, 
                  pinwall: {pinwall}})`)
        .end({
            userIds: userIds,
            profile: privacy.profile,
            image: privacy.image,
            contacts: privacy.contacts,
            pinwall: privacy.pinwall
        }).getCommand());
};

let setRecommendedUserOnHomeScreen = function (showUserRecommendationOnHome) {
    dbConnectionHandling.getCommands().push(db.cypher().match("(u:User {userId: '1'})")
        .set('u', {showUserRecommendationOnHome: showUserRecommendationOnHome})
        .end().getCommand());
};

module.exports = {
    setUserRegisteredDate: setUserRegisteredDate,
    setUserLastLoginTime: setUserLastLoginTime,
    setUserIsElyoosAdmin: setUserIsElyoosAdmin,
    createUser: createUser,
    createUserRegisterRequest: createUserRegisterRequest,
    blockUser: blockUser,
    invitationSentBeforeRegistration: invitationSentBeforeRegistration,
    inviteUser: inviteUser,
    createPrivacy: createPrivacy,
    createPrivacyNoContact: createPrivacyNoContact,
    setRecommendedUserOnHomeScreen: setRecommendedUserOnHomeScreen
};