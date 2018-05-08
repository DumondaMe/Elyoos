'use strict';

const db = requireDb();
const exceptions = require('elyoos-server-lib').exceptions;
const cdn = require('elyoos-server-lib').cdn;
const dashify = require('dashify');
const linkifyHtml = require('linkifyjs/html');

const PAGE_SIZE = 20;

const getNotesResponse = function (notes) {
    let response = [];
    for (let note of notes) {
        response.push({
            noteId: note.noteId,
            text: note.text,
            created: note.created,
            upVotes: note.upVotes,
            isAdmin: note.isAdmin,
            creator: {
                userId: note.creator.userId,
                name: note.creator.name,
                slug: dashify(note.creator.name)
            }
        })
    }
    return response;
};

const getTotalNumberOfNotesCommand = function (answerId) {
    return db.cypher().match(`(answer:Answer {answerId: {answerId}})`)
        .optionalMatch(`(answer)-[:NOTE]->(note:Note)`)
        .return(`count(*) AS numberOfNotes`).end({answerId}).getCommand();
};

const getNotes = async function (userId, answerId, page) {
    page = PAGE_SIZE * page;
    let response = await db.cypher().match(`(answer:Answer {answerId: {answerId}})<-[:IS_CREATOR]-(user:User)`)
        .optionalMatch(`(answer)-[:NOTE]->(note:Note)<-[:IS_CREATOR]-(creator:User)`)
        .optionalMatch(`(note)<-[upVote:UP_VOTE]-(:User)`)
        .return(`DISTINCT note.noteId AS noteId, note.text AS text, note.created AS created, count(upVote) AS upVotes,
                 creator, EXISTS((:User {userId: {userId}})-[:IS_CREATOR]->(note)) AS isAdmin`)
        .orderBy(`upVotes DESC, created DESC`)
        .skip(`{page}`)
        .limit(`${PAGE_SIZE}`)
        .end({answerId, page, userId}).send([getTotalNumberOfNotesCommand(answerId)]);
    return {notes: getNotesResponse(response[1]), numberOfNotes: response[0][0].numberOfNotes};

};

module.exports = {
    getNotes
};
