'use strict';

var logger = requireLogger.getLogger(__filename);
var gm = require('./../../util/gm');
var exceptions = require('./../../../lib/error/exceptions');
var Promise = require('bluebird');

var checkImageSize = function (titlePicturePath, req) {
    if (titlePicturePath) {
        return gm.gm(titlePicturePath).sizeAsync().then(function (size) {
            if (size.width < 300 || size.height < 200) {
                return exceptions.getInvalidOperation('User tries to add to small image ' + size.width + 'x' + size.height, logger, req);
            }
        });
    }
    return Promise.resolve();
};

module.exports = {
    checkImageSize: checkImageSize
};
