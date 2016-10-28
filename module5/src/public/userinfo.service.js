(function (){
  'use strict';
  angular.module('public')
  .service('UserInfoService', UserInfoService)

  function UserInfoService() {
    var service = this;

    service.storeUser = function(user) {
      service.user = user;
    }
  }
})();