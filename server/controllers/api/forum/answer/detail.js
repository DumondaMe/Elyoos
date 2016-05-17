'use strict';
var auth = require('./../../../../lib/auth');
var logger = requireLogger.getLogger(__filename);
var answerDetail = require('./../../../../models/forum/answer/detail');
var controllerErrors = require('./../../../../lib/error/controllerErrors');
var validation = require('./../../../../lib/jsonValidation');

var schemaGetDetailForumAnswer = {
    name: 'getForumAnswerDetail',
    type: 'object',
    additionalProperties: false,
    required: ['answerId'],
    properties: {
        answerId: {type: 'string', format: 'notEmptyString', maxLength: 30}
    }
};

module.exports = function (router) {

    router.get('/', auth.isAuthenticated(), function (req, res) {

        return controllerErrors('Error occurs when getting answer detail', req, res, logger, function () {
            return validation.validateQueryRequest(req, schemaGetDetailForumAnswer, logger).then(function (request) {
                logger.info("User gets answer detail", req);
                return answerDetail.getDetail(req.user.id, request.answerId);
            }).then(function (data) {
                res.status(200).json(data);
            });
        });
    });
};
