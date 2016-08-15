angular.module('login.module')
  .directive('errorMessageDirective', errorMessageDirective);

errorMessageDirective.$inject = [];

function errorMessageDirective() {
  return {
    restrict: 'E',
    templateUrl: 'app/login/directive/error.message.template.html',
    link: function(scope, element, attr) {
      var elem = angular.fromJson(attr.elem);

      scope.message = elem['message'];
      scope.type = elem['type'];
    }
  }
}
