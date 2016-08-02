describe('check controller Login', function() {
  beforeEach(module('login.module'));

  var $controller;
  var $scope = {};

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('init form data: login and password', function(){
    $controller('loginController', { $scope: $scope });
    console.log($scope.loginForm)
    expect($scope).toEqual(true);
  });

});
