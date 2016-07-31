(() => {
	angular
		.module('config.module', ['ngRoute'])
		.config(routConfig);

	routConfig.$inject = ['$routeProvider', '$locationProvider'];

	function routConfig($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
	      templateUrl: '/template/login/login.template.html',
	      controller: 'loginController',
	      controllerAs: 'ctrlLg'
	    })
	    .when('/home', {
	      templateUrl: 'template/home/home.template.html',
	      controller: 'homeController',
	      controllerAs: 'home'
	    })
	    .when('/auth', {
	    	templateUrl: 'template/auth/auth.template.html',
	    	controller: 'authController',
	      controllerAs: 'auth'
	    })
	    .otherwise('/');

	  $locationProvider.html5Mode({
  		enabled: false
		});
	}
})();