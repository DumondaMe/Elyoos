'use strict';

var db = require('./../../../neo4j');
var userInfo = require('./../userInfo');
var pagePreview = require('./../../page/pagePreview');

var getUnreadMessages = function (userId) {
    return db.cypher()
        .match("(user:User {userId: {userId}})-[active:ACTIVE]->(thread:Thread)-[:NEXT_MESSAGE*0..20]->(message:Message)")
        .where("active.lastTimeVisited < message.messageAdded")
        .with("user, thread, COUNT(thread.threadId) AS numberOfUnreadMessages")
        .orderBy("numberOfUnreadMessages DESC")
        .match("(user)-[:ACTIVE]->(thread)<-[:ACTIVE]-(contact:User)")
        .with("contact, thread, numberOfUnreadMessages")
        .match("(contact)-[vr:HAS_PRIVACY|HAS_PRIVACY_NO_CONTACT]->(v:Privacy)")
        .optionalMatch("(user)<-[rContact:IS_CONTACT]-(contact)")
        .with("contact, thread, numberOfUnreadMessages, rContact, v, vr")
        .where("(rContact IS NULL AND type(vr) = 'HAS_PRIVACY_NO_CONTACT') OR (rContact.type = vr.type AND type(vr) = 'HAS_PRIVACY')")
        .return("numberOfUnreadMessages, thread.threadId AS threadId, contact.name AS name, contact.userId AS userId, " +
        "v.profile AS profileVisible, v.image AS imageVisible")
        .end({userId: userId});
};

var getPinwall = function (userId, request) {
    var commands = [];

    commands.push(getUnreadMessages(userId).getCommand());

    return db.cypher().match("(user:User {userId: {userId}})-[:IS_CONTACT]->(contact:User)" +
        "-[:RECOMMENDS]->(rec:Recommendation)-[:RECOMMENDS]->(page:Page)")
        .with("contact, user, rec, page")
        .match("(contact)-[vr:HAS_PRIVACY|HAS_PRIVACY_NO_CONTACT]->(v:Privacy)")
        .optionalMatch("(user)<-[rContact:IS_CONTACT]-(contact)")
        .with("contact, rec, page, rContact, v, vr")
        .where("(rContact IS NULL AND type(vr) = 'HAS_PRIVACY_NO_CONTACT') OR (rContact.type = vr.type AND type(vr) = 'HAS_PRIVACY')")
        .return("contact.name AS name, contact.userId AS userId, rec.rating AS rating, rec.created AS created, rec.comment AS comment, " +
        "page.label AS label, page.title AS title, page.pageId AS pageId, page.description AS description, page.link AS link, " +
        "v.profile AS profileVisible, v.image AS imageVisible")
        .orderBy("rec.created DESC")
        .skip("{skip}")
        .limit("{maxItems}")
        .end({userId: userId, skip: request.skip, maxItems: request.maxItems})
        .send(commands)
        .then(function (resp) {
            userInfo.addImageForThumbnail(resp[0]);
            userInfo.addImageForThumbnail(resp[1]);
            pagePreview.addPageUrl(resp[1]);
            return {pinwall: resp[1], messages: resp[0]};
        });
};

module.exports = {
    getPinwall: getPinwall
};
