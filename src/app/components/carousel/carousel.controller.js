(function() {
  'use strict';

  angular
    .module('carousel')
    .controller('CarouselController', CarouselController);

  function CarouselController(CarouselService, CAROUSEL_URL){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.retrieveCarousel(CAROUSEL_URL).then( function(slides) {
      vm.slides = slides;
    });
  }

})();

