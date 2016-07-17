require('../vendor/angular/index');
require('../vendor/angular-route/index');

require('./config/config.module');

require('./auth/auth.module');
require('./home/home.module');
require('./login/login.module');
require('./login/login.controller');

angular
	.module('app', ['config.module', 'login.module', 'home.module', 'auth.module']);
