require('angular')
	.module('login.module')
	.controller('loginController', loginController);

loginController.$inject = [];

function loginController() {
	var vm = this;

	vm.page = 'Login controller';
}