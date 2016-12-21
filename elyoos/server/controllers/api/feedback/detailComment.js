'use strict';

var auth = require('elyoos-server-lib').auth;
var logger = require('elyoos-server-lib').logging.getLogger(__filename);
var feedbackComment = requireModel('feedback/detailComment');
var controllerErrors = require('elyoos-server-lib').controllerErrors;
var validation = require('elyoos-server-lib').jsonValidation;

var schemaGetDetailComment = {
    name: 'getFeedbackDetailComment',
    type: 'object',
    additionalProperties: false,
    required: ['skip', 'maxItems', 'feedbackId', 'orderBy'],
    properties: {
        skip: {type: 'integer', minimum: 0},
        maxItems: {type: 'integer', minimum: 1, maximum: 50},
        feedbackId: {type: 'string', format: 'notEmptyString', maxLength: 50},
        orderBy: {enum: ['new', 'old']},
    }
};

module.exports = function (router) {

    router.get('/', auth.isAuthenticated(), function (req, res) {

        return controllerErrors('Error occurs when getting feedback detail comment', req, res, logger, function () {
            return validation.validateQueryRequest(req, schemaGetDetailComment, logger).then(function (request) {
                logger.info("User requests feedback detail comment", req);
                return feedbackComment.getComment(request);
            }).then(function (data) {
                res.status(200).json(data);
            });
        });
    });
};
