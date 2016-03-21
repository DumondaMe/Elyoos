'use strict';

module.exports = {
    directive: [ function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            controller: require('./controller.js'),
            controllerAs: 'ctrl',
            bindToController: {
                recommendation: '='
            },
            templateUrl: 'app/modules/page/detail/comment/template.html'
        };
    }],
    name: 'elyPageDetailUserComments'
};
