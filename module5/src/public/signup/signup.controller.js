(function () {
  'use strict';
  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserInfoService'];
  function SignupController (UserInfoService) {
    var $ctrl = this;

    $ctrl.submit = function () {
      UserInfoService.storeUser($ctrl.user);
      $ctrl.complete = true;
    }
  }
})();