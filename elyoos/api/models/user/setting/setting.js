let db = requireDb();

let getUserSetting = async function (userId) {

    let resp = await  db.cypher().match(`(u:User {userId: {userId}})`)
        .return(`u.privacyMode AS privacyMode`)
        .end({userId}).send();
    return resp[0];
};

module.exports = {
    getUserSetting
};
