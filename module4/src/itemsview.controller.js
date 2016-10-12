(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsViewController', ItemsViewController);

  ItemsViewController.$inject = ['itemsAjaxResult'];
  function ItemsViewController(itemsAjaxResult) {
    var controller = this;

    controller.itemList = itemsAjaxResult;
  }
})();