require('../vendor/angular/index');
require('../vendor/angular-route/index');
require('./config/config.module');

angular
	.module('app', ['config']);
