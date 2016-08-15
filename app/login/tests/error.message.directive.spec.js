xdescribe('test directive errorMessageDirective', function() {
  beforeEach(module('login.module'));

  var $compile;
  var scope;
  var element;

  beforeEach(inject(function (_$rootScope_, _$compile_, $templateCache) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;

    scope.data = {
      "message": "Message",
      "type": "Error"
    };

    $templateCache.put('app/login/directive/error.message.template.html',
      "<error-message-directive></error-message-directive>");

    element = angular.element( "<error-message-directive />" );
    $compile(element)(scope);
    scope.$digest();
  }));

  it('init from data', function() {
    console.log(element);
  });
});
