'use strict';

var app = angular.module('elyoosApp');

app.service('ArrayHelper', require('./arrayHelper'));
app.service('moment', require('./moment'));
app.service('Observables', require('./observables'));
app.service('SearchService', require('./searchService'));
app.service('UrlCache', require('./urlCache'));