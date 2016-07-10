angular
	.module('config', ['ngRoute'])
	.config(routConfig);

routConfig.$inject = ['$routeProvider'];

function routConfig($routeProvider) {
	$routeProvider
		.when('/', {
      templateUrl: '/template/login/login.template.html'
    })
    .when('/home', {
      templateUrl: 'template/home/home.template.html'
    });
}