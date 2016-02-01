(function() {
  'use strict';

  angular
    .module('main')
    .controller('CarouselController',CarouselController)
    .controller('NavbarController',NavbarController)
    .controller('HotOffersController',HotOffersController);
 

  function CarouselController(CarouselService){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.getCarousel(function(data) {
      vm.slides = data;
    });
  }


  function NavbarController(NavbarService){
    var vm = this;
    NavbarService.getNavbar(function(data) {
      vm.items = data;
    });
  }
         
  
  function HotOffersController(SpecialProductsService){
    var vm = this;
    SpecialProductsService.getHotOffers(function(data) {
      vm.hotoffers = data;
    });
  }

})();
