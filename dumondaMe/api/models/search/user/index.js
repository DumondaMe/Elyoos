'use strict';

const db = requireDb();

const searchCommand = function (query, language, userId, skip, limit) {
    let queryString = `+User.name:${query}~`;
    return db.cypher().call(`apoc.index.search("entities", {queryString}) YIELD node AS user`)
        .return(`DISTINCT user, EXISTS((user)<-[:IS_CONTACT]-(:User {userId: {userId}})) AS isTrustUser`)
        .skip(`{skip}`).limit(`{limit}`).end({queryString, userId, skip, limit});
};

const search = async function () {

};

module.exports = {
    searchCommand,
    search
};
