(function () {
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(service) {
    var toBuy = this;

    toBuy.list = service.toBuy;

    toBuy.buy = function (index) {
      service.buy(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(service) {
    var bought = this;

    bought.list = service.bought;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuy = [
      {name: 'Bran', quantity: '1 bag'},
      {name: 'Carrots', quantity: 8},
      {name: 'Celery sticks', quantity: 5},
      {name: 'Apples', quantity: 6},
      {name: 'Tomatoes', quantity: 4},
      {name: 'Orange juice', quantity: '1 carton'},
      {name: 'Oatmeal', quantity: '2 bags'},
      {name: '“How to quit cookies”, second edition', quantity: 1}
    ];
    service.bought = [];

    service.buy = function (index) {
      var bought = service.toBuy.splice(index, 1);
      bought.forEach(function (item) {
        service.bought.push(item);
      });
    };
  }
})();