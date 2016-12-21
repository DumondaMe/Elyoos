'use strict';

var controller = require('./controller.js');

module.exports = {
    directive: [ function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: controller.directiveCtrl(),
            controllerAs: 'ctrl',
            bindToController: true,
            templateUrl: 'app/modules/viewPort/template.html'
        };
    }],
    name: 'elyViewPort'
};
