(() => {
	angular
		.module('home.module', [])
		.controller('homeController', require('./home.controller'))
		.factory('homeService', require('./home.service'));
})();
