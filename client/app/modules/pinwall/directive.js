'use strict';

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {pinwall: '='},
            bindToController: {
                contacting: '=',
                gap: '='
            },
            controller: require('./controller.js'),
            controllerAs: 'ctrl',
            templateUrl: 'app/modules/pinwall/template.html'
        };
    }],
    name: 'elyPinwall'
};
