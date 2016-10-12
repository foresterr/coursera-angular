(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesViewController', CategoriesViewController);

  CategoriesViewController.$inject = ['categoryAjaxResult']
  function CategoriesViewController(categoryAjaxResult) {
    var controller = this;
    controller.list = categoryAjaxResult;
  }
})();