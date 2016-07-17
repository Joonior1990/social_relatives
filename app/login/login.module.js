(() => {
	angular
		.module('login.module', [])
		.controller('loginController', require('./login.controller'))
		.factory('loginService', require('./login.service'));
})();