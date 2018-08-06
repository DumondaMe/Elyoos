'use strict';

const validation = require('elyoos-server-lib').jsonValidation;
const schemaLanguage = require('../../schema/language');
const detail = requireModel('question/detail');
const asyncMiddleware = require('elyoos-server-lib').asyncMiddleware;
const apiHelper = require('elyoos-server-lib').apiHelper;
const logger = require('elyoos-server-lib').logging.getLogger(__filename);

const schemaGetQuestionDetail = {
    name: 'getQuestionDetail',
    type: 'object',
    additionalProperties: false,
    required: ['questionId', 'language'],
    properties: {
        questionId: {type: 'string', format: 'notEmptyString', maxLength: 30},
        language: schemaLanguage.language
    }
};

module.exports = function (router) {

    router.get('/:questionId', asyncMiddleware(async (req, res) => {
        const params = await validation.validateRequest(req, schemaGetQuestionDetail, logger);
        let userId = apiHelper.getUserId(req);
        let response = await detail.getQuestion(params.questionId, params.language, userId);
        res.status(200).json(response);
    }));
};
