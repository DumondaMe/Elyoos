'use strict';

module.exports = ['$resource', function ($resource) {
    return $resource('api/user/feedback/create/discussionIdea');
}];
