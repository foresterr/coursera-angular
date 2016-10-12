(function () {
  'use strict';

  angular.module('loader', []);

  angular.module('loader')
    .component('loaderSpinner', {
      templateUrl: './src/templates/loader.template.html',
      controller: LoaderController
    });

  LoaderController.$inject = ['$rootScope'];
  function LoaderController($rootScope) {
    var $ctrl = this;
    var handlersToCancel = [];

    $ctrl.showLoader = false;

    $ctrl.$onInit = function () {
      var handler = $rootScope.$on('$stateChangeStart', function () {
        $ctrl.showLoader = true;
      });
      handlersToCancel.push(handler);

      handler = $rootScope.$on('$stateChangeSuccess', function () {
        $ctrl.showLoader = false;
      });
      handlersToCancel.push(handler);

      handler = $rootScope.$on('$stateChangeError', function () {
        $ctrl.showLoader = false;
      });
      handlersToCancel.push(handler);
    }

    $ctrl.$onDestroy = function () {
      handlersToCancel.forEach(function (cancelHandler) {
        cancelHandler();
      });
    }
  }
})();