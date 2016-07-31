require('angular')
	.module('login.module')
	.controller('loginController', loginController);

loginController.$inject = [];

function loginController() {
	var vm = this;

	vm.submit = submit;

	function submit(form) {
		console.log(form.login)
		console.log(form.password)
		if (form.login && form.password) {
			alert('data not correct')
			form.login = '';
			form.password = '';
		} else {
			alert('uncorrect')
		}
	}
}