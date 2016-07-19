require('angular')
	.module('home.module')
	.controller('homeController', homeController);

homeController.$inject = [];

function homeController() {
	var vm = this;
	
	vm.page = 'Home page';
}
