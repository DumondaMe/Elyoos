'use strict';
var auth = require('./../../../../lib/auth');
var logger = requireLogger.getLogger(__filename);
var conversation = require('./../../../../models/messages/conversation');
var exceptions = require('./../../../../../common/src/lib/error/exceptions');
var validation = require('./../../../../../common/src/lib/jsonValidation');

var schemaRequestGetMessages = {
    name: 'getConversationMessages',
    type: 'object',
    additionalProperties: false,
    required: ['itemsPerPage', 'skip', 'threadId', 'isGroupThread'],
    properties: {
        itemsPerPage: {type: 'integer', minimum: 1, maximum: 50},
        skip: {type: 'integer', minimum: 0},
        threadId: {type: 'string', format: 'notEmptyString', maxLength: 50},
        isGroupThread: {type: 'boolean'}
    }
};

module.exports = function (router) {


    router.get('/', auth.isAuthenticated(), function (req, res) {

        if (req.query.itemsPerPage && req.query.skip && req.query.isGroupThread) {
            req.query.itemsPerPage = parseInt(req.query.itemsPerPage, 10);
            req.query.skip = parseInt(req.query.skip, 10);
            req.query.isGroupThread = req.query.isGroupThread === 'true';
        }

        return validation.validateQueryRequest(req, schemaRequestGetMessages, logger)
            .then(function (request) {
                return conversation.getMessages(req.user.id, request.threadId, request.itemsPerPage, request.skip, request.isGroupThread, req.session.cookie._expires);
            }).then(function (threads) {
                res.status(200).json(threads);
            }).catch(exceptions.InvalidJsonRequest, function () {
                res.status(400).end();
            }).catch(exceptions.invalidOperation, function () {
                res.status(400).end();
            }).catch(function (err) {
                logger.error('Getting user messages failed', {error: err}, req);
                res.status(500).end();
            });
    });
};
