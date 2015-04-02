'use strict';

var db = require('./../../neo4j');
var logger = requireLogger.getLogger(__filename);
var exceptions = require('./../../lib/error/exceptions');

var privacySettingCheck = function (id, privacySettingType, failCondition) {
    return db.cypher().match("(:User {userId: {userId}})-[r:HAS_PRIVACY {type: {type}}]->(:Privacy)")
        .return('r.type AS type')
        .end({
            userId: id,
            type: privacySettingType
        }).send()
        .then(function (result) {
            if (failCondition(result.length)) {
                var invalidJsonException = new exceptions.invalidOperation('For user ' + id + 'is privacy setting '
                + privacySettingType + ' operation failed');
                logger.warn(invalidJsonException.message, {});
                return Promise.reject(invalidJsonException);
            }
        });
};

var privacySettingsIsExisting = function (id, privacySettingType) {
    return privacySettingCheck(id, privacySettingType, function (check) {
        return check === 0;
    });
};

var privacySettingsIsNotExisting = function (id, privacySettingType) {
    return privacySettingCheck(id, privacySettingType, function (check) {
        return check > 0;
    });
};

module.exports = {
    getPrivacySettings: function (id) {
        var commands = [], returnCommand;

        returnCommand = "privacy.profile AS profileVisible, privacy.profileData AS profileDataVisible, " +
        "privacy.image AS imageVisible, privacy.contacts AS contactsVisible, r.type AS type";

        commands.push(db.cypher().match("(user:User {userId: {userId}})-[r:HAS_PRIVACY]->(privacy:Privacy)")
            .return(returnCommand)
            .end({
                userId: id
            }).getCommand());
        return db.cypher().match("(user:User {userId: {userId}})-[r:HAS_PRIVACY_NO_CONTACT]->(privacy:Privacy)")
            .return(returnCommand)
            .end({
                userId: id
            }).send(commands)
            .then(function (result) {
                return {normal: result[0], noContact: result[1][0]};
            });
    },
    changePrivacySettings: function (id, privacySettingType, privacySettings) {
        return privacySettingsIsExisting(id, privacySettingType)
            .then(function () {
                return db.cypher().match("(:User {userId: {userId}})-[:HAS_PRIVACY {type: {type}}]->(privacy:Privacy)")
                    .set('privacy', {
                        profile: privacySettings.profileVisible,
                        profileData: privacySettings.profileDataVisible,
                        image: privacySettings.imageVisible,
                        contacts: privacySettings.contactsVisible
                    })
                    .end({
                        userId: id,
                        type: privacySettingType,
                        profile: privacySettings.profileVisible,
                        profileData: privacySettings.profileDataVisible,
                        image: privacySettings.imageVisible,
                        contacts: privacySettings.contactsVisible
                    }).send();
            });
    },
    changePrivacySettingsNoContact: function (id, privacySettings) {

        return db.cypher().match("(:User {userId: {userId}})-[:HAS_PRIVACY_NO_CONTACT]->(privacy:Privacy)")
            .set('privacy', {
                profile: privacySettings.profileVisible,
                profileData: privacySettings.profileDataVisible,
                image: privacySettings.imageVisible,
                contacts: privacySettings.contactsVisible
            })
            .end({
                userId: id,
                profile: privacySettings.profileVisible,
                profileData: privacySettings.profileDataVisible,
                image: privacySettings.imageVisible,
                contacts: privacySettings.contactsVisible
            }).send();
    },
    renamePrivacySetting: function (id, privacySettingType, newPrivacySettingType) {

        return privacySettingsIsNotExisting(id, newPrivacySettingType)
            .then(function () {
                var commands = [];
                commands.push(db.cypher().match("(user:User {userId: {userId}})-[r:IS_CONTACT {type: {typeOld}}]->(:User)")
                    .set('r', {
                        type: newPrivacySettingType
                    })
                    .end({
                        userId: id,
                        typeOld: privacySettingType,
                        type: newPrivacySettingType
                    }).getCommand());
                return db.cypher().match("(:User {userId: {userId}})-[r:HAS_PRIVACY {type: {typeOld}}]->(:Privacy)")
                    .set('r', {
                        type: newPrivacySettingType
                    })
                    .end({
                        userId: id,
                        typeOld: privacySettingType,
                        type: newPrivacySettingType
                    }).send(commands);
            });
    },
    addNewPrivacySetting: function (id, privacySettingType, privacySettings) {

        return privacySettingsIsNotExisting(id, privacySettingType)
            .then(function () {
                privacySettings.userId = id;
                privacySettings.type = privacySettingType;
                return db.cypher().match('(u:User {userId: {userId}})')
                    .create("(u)-[:HAS_PRIVACY {type: {type}}]->(:Privacy {profile: {profileVisible}, " +
                    "profileData: {profileDataVisible}, contacts: {contactsVisible}, image: {imageVisible}})")
                    .end(privacySettings).send();
            });
    },
    deletePrivacySetting: function (id, privacySettingType, newPrivacySettingType) {

        return privacySettingsIsExisting(id, newPrivacySettingType)
            .then(function () {
                var commands = [];
                commands.push(db.cypher().match("(user:User {userId: {userId}})-[r:IS_CONTACT {type: {typeOld}}]->(:User)")
                    .set('r', {
                        type: newPrivacySettingType
                    })
                    .end({
                        userId: id,
                        typeOld: privacySettingType,
                        type: newPrivacySettingType
                    }).getCommand());
                return db.cypher().match("(:User {userId: {userId}})-[r:HAS_PRIVACY {type: {typeOld}}]->(privacy:Privacy)")
                    .delete("privacy, r")
                    .end({
                        userId: id,
                        typeOld: privacySettingType
                    }).send(commands);
            });
    }
};
