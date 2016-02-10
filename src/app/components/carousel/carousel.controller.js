(function() {
  'use strict';

  angular
    .module('carousel')
    .controller('CarouselController', CarouselController);

  function CarouselController(CarouselService, URL_MAPPINGS){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.retrieveCarousel(URL_MAPPINGS.CAROUSEL_URL).then( function(slides) {
      vm.slides = slides;
    });
  }

})();

