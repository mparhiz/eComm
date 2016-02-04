(function() {
  'use strict';

  angular
    .module('main')
    .controller('HotOffersController',HotOffersController);

  function HotOffersController(getData){
    var vm = this;
    getData.fetch('api/main/hotoffers').then( function(data) {
      vm.hotoffers = data;
    });

      getData.fetch('api/main/toppicks').then( function(data) {
      vm.toppicks = data;
    });

    getData.fetch('api/main/newproducts').then( function(data) {
      vm.newproducts = data;
    });

    getData.fetch('api/main/clearances').then( function(data) {
      vm.clearances = data;
    });
}

})();
