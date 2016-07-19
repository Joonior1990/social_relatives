require('angular');
require('angular-route');

require('./config/config.module');

require('./login/login.module');
require('./home/home.module');
require('./auth/auth.module');

angular
	.module('app', ['config.module', 'login.module', 'home.module', 'auth.module']);
