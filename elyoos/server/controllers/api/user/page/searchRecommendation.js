'use strict';

let validation = require('elyoos-server-lib').jsonValidation;
let searchPage = requireModel('page/searchPage');
let auth = require('elyoos-server-lib').auth;
let controllerErrors = require('elyoos-server-lib').controllerErrors;
let logger = require('elyoos-server-lib').logging.getLogger(__filename);

let schemaGetPage = {
    name: 'searchUserPageRecommendations',
    type: 'object',
    additionalProperties: false,
    required: ['skip', 'maxItems', 'search', 'isSuggestion'],
    properties: {
        skip: {type: 'integer', minimum: 0},
        maxItems: {type: 'integer', minimum: 1, maximum: 50},
        search: {type: 'string', format: 'notEmptyString', minLength: 1, maxLength: 255},
        isSuggestion: {type: 'boolean'}
    }
};

module.exports = function (router) {

    router.get('/', auth.isAuthenticated(), function (req, res) {

        return controllerErrors('Error occurs when searching page recommendations of the user', req, res, logger, function () {
            return validation.validateQueryRequest(req, schemaGetPage, logger).then(function (request) {
                logger.info('Request search page recommendations of user', req);
                if(request.isSuggestion) {
                    return searchPage.searchSuggestionUserRecommendedPage(req.user.id, request.search, request.skip, request.maxItems);
                }
                return searchPage.searchUserRecommendedPage(req.user.id, request.search, request.skip, request.maxItems);
            }).then(function (page) {
                res.status(200).json(page);
            });
        });
    });
};
