'use strict';

var db = require('./../../../neo4j');
var detailTitlePicture = require('./../../page/detail/detailTitlePicture');
var _ = require('lodash');
var logger = requireLogger.getLogger(__filename);

var addType = function (resp) {
    if (_.includes(resp.labels, "ForumSolution")) {
        resp.type = "solution";
    } else if (_.includes(resp.labels, "ForumExplanation")) {
        resp.type = "explanation";
    } else {
        logger.error("Label " + resp.labels + "unknown");
    }
    delete resp.labels;
};

var handlingPages = function (page) {
    if (page) {
        if (page.label === 'Book') {
            detailTitlePicture.addTitlePicture(page.pageId, page, 'Book');
        }
    }
};

var getDetail = function (userId, answerId) {

    return db.cypher().match("(answer:ForumAnswer {answerId: {answerId}})")
        .optionalMatch("(answer)<-[:RATE_POSITIVE]-(:User)")
        .with("COUNT(answer) AS positiveRating, answer")
        .match("(answer)<-[:IS_ANSWER]-(question:ForumQuestion)")
        .optionalMatch("(answer)-[:REFERENCE]->(page:Page)")
        .return("answer.title AS title, answer.description AS description, answer.created AS created, positiveRating, LABELS(answer) AS labels, " +
            "question, page, EXISTS((answer)<-[:RATE_POSITIVE]-(:User {userId: {userId}})) AS ratedByUser")
        .end({answerId: answerId, userId: userId})
        .send().then(function (resp) {
            addType(resp[0]);
            handlingPages(resp[0].page);
            return {answer: resp[0]};
        });
};


module.exports = {
    getDetail: getDetail
};
