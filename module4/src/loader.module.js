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
      var handler = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        $ctrl.showLoader = true;
      });
      handlersToCancel.push(handler);

      handler = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $ctrl.showLoader = false;
      });
      handlersToCancel.push(handler);

      handler = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
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