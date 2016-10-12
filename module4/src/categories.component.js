(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categoriesComponent', {
    restrict: 'E',
    templateUrl: './src/templates/categories.html',
    bindings: {
      categories: '<'
    }
  });
})();