'use strict';

let logger = require('elyoos-server-lib').logging.getLogger(__filename);
let rateLimit = require('elyoos-server-lib').limiteRate;
let controllerErrors = require('elyoos-server-lib').controllerErrors;
let validation = require('elyoos-server-lib').jsonValidation;
let verifyUserRequest = requireModel('register/verifyRegisterUserRequest');

let schemaRequestPasswordReset = {
    name: 'passwordReset',
    type: 'object',
    additionalProperties: false,
    required: ['linkId'],
    properties: {
        linkId: {type: 'string', format: 'notEmptyString', minLength: 64, maxLength: 64}
    }
};

let apiLimiter = rateLimit.getRate({
    windowMs: 60 * 60 * 1000, // 60 minutes
    delayAfter: 3,
    delayMs: 3 * 1000,
    max: 10
});

module.exports = function (router) {

    router.post('/', apiLimiter, function (req, res) {

        return controllerErrors('Error occurs during verification of user email address', req, res, logger, function () {
            return validation.validateRequest(req, schemaRequestPasswordReset, logger).then(function (request) {
                logger.info(`Email verification for linkId ${request.linkId}`);
                return verifyUserRequest.verify(request.linkId, req);
            }).then(function (data) {
                res.status(200).json(data);
            });
        });
    });
};
