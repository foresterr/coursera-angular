(function (){
  'use strict';

  angular.module('public')
  .directive('menuItemValidate', MenuItemValidate);

  MenuItemValidate.$inject = ['$q', 'MenuService']
  function MenuItemValidate($q, MenuService) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.push(function (inputValue) {
          var uppercaseInput = inputValue.toUpperCase();
          if (uppercaseInput != inputValue) {
            ctrl.$setViewValue(uppercaseInput);
            ctrl.$render();
          }
          return uppercaseInput;
        })

        ctrl.$asyncValidators.menuitem = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return $q.when();
          }
          return MenuService.getMenuItem(modelValue);
        }
      }
    }
  }
})();