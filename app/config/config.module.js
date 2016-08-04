angular
  .module('config.module', ['ngRoute'])
  .config(routConfig);

routConfig.$inject = ['$routeProvider', '$locationProvider'];

function routConfig($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/login/login.template.html',
      controller: 'loginController',
      controllerAs: 'ctrlLg'
    })
    .when('/home', {
      templateUrl: 'app/home/home.template.html',
      controller: 'homeController',
      controllerAs: 'home'
    })
    .when('/auth', {
      templateUrl: 'app/auth/auth.template.html',
      controller: 'authController',
      controllerAs: 'auth'
    })
    .otherwise('/');

  $locationProvider.html5Mode({
    enabled: false
  });
}
