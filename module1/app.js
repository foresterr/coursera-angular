(function () {
  'use strict';
  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', LCController);

  LCController.$inject = ['$scope'];
  function LCController($scope) {
    $scope.lunchList = '';
    $scope.lunchCheckResult = '';
    $scope.noData = '';
    $scope.lunchCheck = function () {
      var count = countListItems($scope.lunchList);
      switch (count) {
        case 0:
          $scope.lunchCheckResult = 'Please enter data first';
          $scope.noData = true;
          break;
        case 1:
        case 2:
        case 3:
          $scope.lunchCheckResult = 'Enjoy!';
          $scope.noData = false;
          break;
        default:
          $scope.lunchCheckResult = 'Too much!';
          $scope.noData = false;
          break;
      }
    };

    function countListItems(str) {
      return str.split(',').filter(function(elem) {
        return elem.trim();
      }).length;
    }
  }
})();