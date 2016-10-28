(function () {
  'use strict';
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserInfoService'];
  function MyInfoController (UserInfoService) {
    var $ctrl = this;

    $ctrl.user = UserInfoService.user;
  }
})();