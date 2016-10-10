(function () {
  angular.module('NarrowItDownApp', ['ngSanitize'])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('apiBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuSearchService.$inject = ['$http', 'apiBasePath'];
  function MenuSearchService($http, apiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      searchTerm = searchTerm || '';
      return $http({
        method: 'GET',
        url: (apiBasePath + '/menu_items.json')
      })
      .then(function (result) {
        return result.data.menu_items.filter(function (item) {
          var toSearch = item.description.toLowerCase(),
              search = searchTerm.toLowerCase();
          return searchTerm !== '' && toSearch.indexOf(search) != -1;
        });
      })
      .then(function (result) {
        result.forEach(function (item) {
          var regexp = new RegExp('('+searchTerm+')','ig');
          item.description = item.description.replace(regexp, '<span class="search-hl">$1</span>');
        });
        return result;
      });
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(menuService) {
    var searchCtrl = this;

    searchCtrl.searching = false;

    searchCtrl.doSearch = function () {
      searchCtrl.searching = true;
      menuService.getMatchedMenuItems(searchCtrl.searchTerm)
      .then(function (result) {
        searchCtrl.found = result;
      })
      .catch(function (error) {
        console.log('An error occured: ', error);
      })
      .then(function () {
        searchCtrl.searching = false;
      });
    };

    searchCtrl.removeItem = function (index) {
      searchCtrl.found.splice(index, 1);
    };
  }

  function FoundItemsDirective() {
    return {
      restrict: 'E',
      templateUrl: 'templates/foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: (function () {}),
      controllerAs: 'foundList',
      bindToController: true
    };
  }

})();