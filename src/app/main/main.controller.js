(function() {
  'use strict';

  angular
    .module('main')
    .controller('CarouselController',CarouselController)
    .controller('NavbarController',NavbarController)
    .controller('HotOffersController',HotOffersController);
 

  function CarouselController(getData){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    getData.fetch('api/main/carousel').then( function(data) {
      vm.slides = data;
    });
  }


  function NavbarController(getData){
    var vm = this;
    getData.fetch('api/main/navbar').then( function(data) {
      vm.items = data;
    });
  }
         
  
  function HotOffersController(getData){
    var vm = this;
    getData.fetch('api/main/hotoffers').then( function(data) {
      vm.hotoffers = data;
    });
  }

})();
