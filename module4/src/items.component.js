(function () {
  'use strict';

  angular.module('MenuApp')
  .component('itemsComponent', {
    restrict: 'E',
    templateUrl: './src/templates/items.html',
    bindings: {
      items: '<'
    }
  });
})();