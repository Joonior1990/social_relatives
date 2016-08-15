describe('test controller loginController', function() {
  beforeEach(module('login.module'));

  var $controller;
  var vm;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    vm = $controller('loginController');
  }));

  // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

  describe('test case init data', function() {

    it('init form data: loginForm', function(){

      expect(typeof vm.loginForm).toEqual('object');

      expect(typeof vm.loginForm.login).toEqual('object');
      expect(vm.loginForm.login.value).toEqual('');
      expect(vm.loginForm.login.checked).toEqual(false);
      expect(vm.loginForm.login.change).toEqual(false);

      expect(typeof vm.loginForm.password).toEqual('object');
      expect(vm.loginForm.password.value).toEqual('');
      expect(vm.loginForm.password.checked).toEqual(false);
      expect(vm.loginForm.password.change).toEqual(false);
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    it('init form data: errorMessage & timeMessage', function() {

      expect(vm.errorMessage).toEqual([]);
      expect(vm.timeMessage).toEqual(7000);
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    it('init form methods: submit, addErrorMessage, focusChange, blurChange', function() {

      expect(typeof vm.submit).toEqual('function');
      expect(typeof vm.addErrorMessage).toEqual('function');
      expect(typeof vm.focusChange).toEqual('function');
      expect(typeof vm.blurChange).toEqual('function');
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    xit('init form inner method: removeMessage', function() {

      // check this method when is added to controller.removeMessage
      expect(typeof vm.removeMessage).toEqual('function');
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
  });

  // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

  describe('test case for methods', function() {

    it('test method: submit', function() {

    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    it('test method: addErrorMessage', function() {

      var elemLogin = {$name: 'login'};
      var elemPassword = {$name: 'password'};
      var elemFalse = {};

      var errorMessage = [];

      vm.addErrorMessage(elemLogin, errorMessage, 0);
      expect(typeof errorMessage[0].type).toEqual('string');
      expect(typeof errorMessage[0].message).toEqual('string');

      errorMessage = [];

      vm.addErrorMessage(elemPassword, errorMessage, 0);
      expect(typeof errorMessage[0].type).toEqual('string');
      expect(typeof errorMessage[0].message).toEqual('string');

      errorMessage = [];

      vm.addErrorMessage(elemFalse, errorMessage, 0);
      expect(errorMessage).toEqual([]);
      expect(errorMessage).toEqual([]);
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    it('test method: focusChange', function() {

      var elemLogin = {$name: 'login'};
      var elemPassword = {$name: 'password'};
      var elemFalse = {};

      vm.focusChange(elemFalse);
      expect(vm.loginForm.login.change).toEqual(false);
      expect(vm.loginForm.password.change).toEqual(false);

      vm.focusChange(elemLogin);
      expect(vm.loginForm.login.change).toEqual(true);
      expect(vm.loginForm.password.change).toEqual(false);

      vm.focusChange(elemPassword);
      expect(vm.loginForm.login.change).toEqual(true);
      expect(vm.loginForm.password.change).toEqual(true);
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    it('test method: blurChange', function() {

      var elemFalse = {$name: 'login'};
      var elemFullFalse = {};

      var elemLoginFalse = {$name: 'login', $modelValue: 'error Сообщение'};
      var elemPasswordFalse = {$name: 'password', $modelValue: '!Корректный_пароль'};

      var elemLoginTrue = {$name: 'login', $modelValue: 'login'};
<<<<<<< HEAD
      var elemPasswordTrue = {$name: 'password', $modelValue: 'Корректный_пароль'};
=======
      var elemPasswordTrue = {$name: 'password', $modelValue: 'КорректныйПароль'};
>>>>>>> 93120627f62162183ba1441dc79e4ef82bcc9261

      vm.blurChange(elemFalse);
      vm.blurChange(elemFullFalse);
      expect(vm.loginForm.login.change).toEqual(false);
      expect(vm.loginForm.login.checked).toEqual(false);

      vm.blurChange(elemLoginFalse);
      vm.blurChange(elemPasswordFalse);
      expect(vm.loginForm.login.change).toEqual(false);
      expect(vm.loginForm.login.checked).toEqual(false);
      expect(vm.loginForm.password.change).toEqual(false);
      expect(vm.loginForm.password.checked).toEqual(false);

      vm.blurChange(elemLoginTrue);
      vm.blurChange(elemPasswordTrue);
      expect(vm.loginForm.login.change).toEqual(false);
      expect(vm.loginForm.login.checked).toEqual(true);
      expect(vm.loginForm.password.change).toEqual(false);
      expect(vm.loginForm.password.checked).toEqual(true);
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
  });

  // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
});
