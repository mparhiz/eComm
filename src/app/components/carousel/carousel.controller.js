(function() {
  'use strict';

  angular
    .module('carousel')
    .controller('CarouselController', CarouselController);

<<<<<<< HEAD
  function CarouselController(CarouselService, URL_MAPPINGS){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.retrieveCarousel(URL_MAPPINGS.CAROUSEL_URL).then( function(slides) {
      vm.slides = slides;
    });
=======
  function CarouselController(CarouselService){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    CarouselService.retrieveCarouselSlides()
      .then( function(slides) {
        vm.slides = slides;
      });
>>>>>>> c25195f50cf1374aa0574a12c16aefed3be2d04a
  }

})();

