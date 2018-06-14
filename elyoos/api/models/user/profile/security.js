'use strict';

let db = requireDb();
let exceptions = require('elyoos-server-lib').exceptions;
let logger = require('elyoos-server-lib').logging.getLogger(__filename);

let checkAllowedToGetProfile = async function (userId, userDetailId, req) {
    userId = userId || null;
    let response = await db.cypher().match('(user:User {userId: {userDetailId}})')
        .where(`user.privacyMode = 'public' OR user.userId = {userId} OR 
               (user.privacyMode = 'publicEl' AND {userId} IS NOT NULL) OR
               (user.privacyMode = 'onlyContact' AND (user)-[:IS_CONTACT]->(:User {userId: {userId}}))`)
        .return(`user`).end({userId, userDetailId}).send();
    if (response.length !== 1) {
        return exceptions.getUnauthorized(`User ${userId} has not access rights to view user profile ${userDetailId}`,
            logger, req);
    }
};

module.exports = {
    checkAllowedToGetProfile
};
