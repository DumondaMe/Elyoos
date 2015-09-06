'use strict';

var app = angular.module('elyoosApp');
var directive = require('./directive.js');

app.directive(directive.name, directive.directive);

app.service('UploadBookPage', require('./services/uploadBookPage'));
app.service('EditBookService', require('./services/editBookService'));