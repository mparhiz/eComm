(function() {
  'use strict';

  angular
    .module('mainCarousel')
    .controller('mainCarouselController',mainCarouselController);

 
  function mainCarouselController(){
    var vm = this;
    vm.myInterval = 3000;
    vm.slides = [
      {
        image: 'assets/images/sectors-consumer-products.jpg',
        caption: 'eShopping'
      },
      {
        image: 'assets/images/cloth-products2.jpg',
        caption: 'Cloth'
      },
      {
        image: 'assets/images/Electronic-Products.jpg',
        caption: 'Electrinic'
      },
      {
        image: 'assets/images/Internet-of-Things.jpg',
        caption: 'Product'
      }
    ];
  }

})();
