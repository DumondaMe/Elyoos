'use strict';

var validation = require('./../../../../lib/jsonValidation');
var recommendedUser = require('./../../../../models/user/setting/recommendedUser');
var auth = require('./../../../../lib/auth');
var controllerErrors = require('./../../../../lib/error/controllerErrors');
var logger = requireLogger.getLogger(__filename);

var schemaSetRecommendedUser = {
    name: 'recommendedUser',
    type: 'object',
    additionalProperties: false,
    required: ['showOnHomeScreen'],
    properties: {
        showOnHomeScreen: {type: 'boolean'}
    }
};

module.exports = function (router) {

    router.post('/', auth.isAuthenticated(), function (req, res) {

        return controllerErrors('Error occurs when setting the recommended user setting', req, res, logger, function () {
            return validation.validateRequest(req, schemaSetRecommendedUser, logger).then(function (request) {
                logger.info("User sets recommended user setting", req);
                return recommendedUser.setRecommendedUserOnHomeScreen(req.user.id, request.showOnHomeScreen);
            }).then(function () {
                res.status(200).end();
            });
        });
    });

};
