require('angular')
	.module('auth.module')
	.controller('authController', authController);

authController.$inject = [];

function authController() {
	var vm = this;
	
	vm.page = 'Auht page';
}
