(function() {
  'use strict';

  angular
    .module('carousel')
    .controller('mainCarouselController', mainCarouselController);

  function mainCarouselController(CarouselService, CAROUSEL_URL){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.retrieveCarousel(CAROUSEL_URL).then( function(slides) {
      vm.slides = slides;
    });
  }

})();

