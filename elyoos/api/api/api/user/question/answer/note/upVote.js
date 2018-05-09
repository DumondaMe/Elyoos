'use strict';

const validation = require('elyoos-server-lib').jsonValidation;
const upVoteNote = requireModel('user/question/answer/note/upVote');
const asyncMiddleware = require('elyoos-server-lib').asyncMiddleware;
const auth = require('elyoos-server-lib').auth;
const logger = require('elyoos-server-lib').logging.getLogger(__filename);

const schemaUpVoteNote = {
    name: 'upVoteNote',
    type: 'object',
    additionalProperties: false,
    required: ['noteId'],
    properties: {
        noteId: {type: 'string', format: 'notEmptyString', maxLength: 30}
    }
};

module.exports = function (router) {

    router.post('/', auth.isAuthenticated(), asyncMiddleware(async (req, res) => {
        const params = await validation.validateRequest(req, schemaUpVoteNote, logger);
        await upVoteNote.upVote(req.user.id, params.noteId);
        res.status(200).end();
    }));

    router.delete('/', auth.isAuthenticated(), asyncMiddleware(async (req, res) => {
        const params = await validation.validateRequest(req, schemaUpVoteNote, logger);
        let response = await upVoteNote.deleteUpVote(req.user.id, params.noteId);
        res.status(200).json(response);
    }));
};
