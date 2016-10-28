(function () {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserInfoService', 'MenuService'];
  function SignupController(UserInfoService, MenuService) {
    var $ctrl = this;

    $ctrl.submit = function () {
      MenuService.getMenuItem($ctrl.user.favDishId)
        .then(function (responseData) {
          $ctrl.user.favDish = responseData;
          UserInfoService.storeUser($ctrl.user);
          $ctrl.complete = true;
        });
    }
  }
})();