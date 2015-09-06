'use strict';

var app = angular.module('elyoosApp');
var directive = require('./directive.js');

app.directive(directive.name, directive.directive);

app.service('EditYoutubeService', require('./services/editYoutubeService'));
app.service('PageYoutubeLink', require('./services/youtubeLink'));
app.service('UploadYoutubePage', require('./services/uploadYoutubePage'));