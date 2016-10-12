(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './src/views/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: './src/views/categories.html',
        controller: 'CategoriesViewController as ctrl',
        resolve: {
          categoryAjaxResult: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('categories.items', {
        templateUrl: './src/views/items.html',
        controller: 'ItemsViewController as ctrl',
        params: {
          categoryShortName: null
        },
        resolve: {
          itemsAjaxResult: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();