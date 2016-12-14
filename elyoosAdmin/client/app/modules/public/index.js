'use strict';

var app = angular.module('elyoosApp');
var directive = require('./directive.js');

app.directive(directive.name, directive.directive);

app.service('Auth', require('./services/auth'));

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('public', {
            url: '/',
            views: {
                'content@': {
                    template: '<ely-public></ely-public>'
                }
            },
            data: {hasBackNav: false},
            isPublic: true
        });
}]);