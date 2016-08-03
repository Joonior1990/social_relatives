require('angular')
	.module('login.module')
	.controller('loginController', loginController);

loginController.$inject = ['$timeout'];

function loginController($timeout) {
	var vm = this;

  vm.loginForm = {
    login: {
      value: '',
      checked: false,
      change: false
    },
    password: {
      value: '',
      checked: false,
      change: false
    }
  };

  vm.errorMessage = [];
  vm.timeMessage = 7000;

  vm.submit = submit;
  vm.addErrorMessage = addErrorMessage;
  vm.focusChange = focusChange;
  vm.blurChange = blurChange;

	function submit(form) {
    var message;
    var type = 'Error';

    if (typeof form === 'undefined') {
      return;
    }

		if (form.login.$modelValue && form.password.$modelValue) {
      message = 'You don\'t have access';
      vm.loginForm.password.value = '';
      vm.loginForm.password.checked = false;

      vm.errorMessage.push({message: message, type: type});
      removeMessage(vm.errorMessage, $timeout, vm.timeMessage);
		}
	}

  function addErrorMessage(elem, errorMessage, timeMessage) {
    var message;
    var type = 'Error';

    if (elem.$name === 'login') {
      message = 'Login need to consist of 3-20 latin symbols.';
    }
    if (elem.$name === 'password') {
      message = 'Password id used 8-20 latin symbols or numbers.';
    }

    if (message) {
      errorMessage.push({message: message, type: type});
      removeMessage(errorMessage, $timeout, timeMessage);
    }
  }

  // for test
  // vm.removeMessage = removeMessage;

  function removeMessage(erorMessage, timeout, time) {
    timeout(function() {
      erorMessage.shift();
    }, time)
  }

  function focusChange(elem) {
    if (elem.$name === 'login') {
      vm.loginForm.login.change = true;
    }
    if (elem.$name === 'password') {
      vm.loginForm.password.change = true;
    }
  }

  function blurChange(elem) {
    var regularLogin = /^[a-zA-Z]{3,20}$/g;
    var regularPassword = /^[а-яА-Яa-zA-Z0-9]{8,20}$/g;

    if ( typeof elem != 'object'
      || !(elem.$name == 'login' || elem.$name == 'password') ) {
      return false;
    }

    if (!elem.$modelValue) {
      vm.loginForm[elem.$name].checked = false;
      vm.loginForm[elem.$name].change = false;
      return;
    }

    var regEx;
    var name = elem.$name;
    var value = elem.$modelValue;

    if (name === 'login') {
      regEx = regularLogin;
    }

    if (name === 'password') {
      regEx = regularPassword;
    }

    if (regEx) {
      value = value.match(regEx);
      if (!value) {
        vm.loginForm[elem.$name].checked = false;
        addErrorMessage(elem, vm.errorMessage, vm.timeMessage);
      } else {
        vm.loginForm[elem.$name].checked = true;
      }
      vm.loginForm[elem.$name].change = false;
    }
  }
}
