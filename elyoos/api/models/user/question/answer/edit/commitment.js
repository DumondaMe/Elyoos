'use strict';

const db = requireDb();
const security = require('../security');
const time = require('elyoos-server-lib').time;
const logger = require('elyoos-server-lib').logging.getLogger(__filename);

const editCommitmentAnswer = async function (userId, params) {
    await security.isAdmin(userId, params.answerId);
    await db.cypher()
        .match(`(answer:CommitmentAnswer:Answer {answerId: {answerId}})<-[:IS_CREATOR]-(:User {userId: {userId}})`)
        .set(`answer`, {description: params.description, modified: time.getNowUtcTimestamp()})
        .end({userId, answerId: params.answerId}).send();
    logger.info(`Edit commitment answer with id ${params.answerId}`)
};

module.exports = {
    editCommitmentAnswer
};
