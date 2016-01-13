'use strict';

module.exports = {
    directive: [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            bindToController: {
                element: '='
            },
            controller: function () {
            },
            controllerAs: 'ctrl',
            templateUrl: 'app/modules/home/pinwallElement/recommendation/template.html'
        };
    }],
    name: 'elyPinwallRecommendation'
};
