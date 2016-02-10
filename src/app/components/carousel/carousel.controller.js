(function() {
  'use strict';

  angular
    .module('carousel')
    .controller('CarouselController', CarouselController);

  function CarouselController(CarouselService){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.getData('api/main/carousel').then( function(carouselData) {
      vm.slides = carouselData;
    });
  }

})();

