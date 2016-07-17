(() => {
	angular
		.module('auth.module', [])
		.controller('authController', require('./auht.controller'))
		.factory('authService', require('./auth.service'));
})();