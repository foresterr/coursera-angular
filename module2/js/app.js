(function () {
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(service) {
    var toBuy = this;

    toBuy.list = service.items;
    toBuy.criterion = service.notBought;
    toBuy.empty = service.allBought;

    toBuy.buy = function (id) {
      service.buy(id);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(service) {
    var bought = this;

    bought.list = service.items;
    bought.criterion = service.bought;
    bought.empty = service.noneBought;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.items = [
      {id: 1, name: 'Bran', quantity: '1 bag', bought: false},
      {id: 2, name: 'Carrots', quantity: 8, bought: false},
      {id: 3, name: 'Celery sticks', quantity: 5, bought: false},
      {id: 4, name: 'Apples', quantity: 6, bought: false},
      {id: 5, name: 'Tomatoes', quantity: 4, bought: false},
      {id: 6, name: 'Orange juice', quantity: '1 carton', bought: false},
      {id: 7, name: 'Oatmeal', quantity: '2 bags', bought: false},
      {id: 8, name: '“How to quit cookies”, second edition', quantity: 1, bought: false}
    ];

    service.bought = function (item) {
      return item.bought;
    };

    service.notBought = function (item) {
      return !item.bought;
    };

    service.allBought = function () {
      return service.items.every(function (item) {
        return item.bought;
      });
    };

    service.noneBought = function () {
      return service.items.some(function (item) {
        return item.bought;
      });
    };

    service.buy = function (idToBuy) {
      service.items.forEach(function (item) {
        if (item.id === idToBuy) {
          item.bought = true;
        }
      });
    };
  }
})();