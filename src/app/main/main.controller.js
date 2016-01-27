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

  angular
    .module('mainNavbar')
    .controller('mainNavbarController',mainNavbarController);
    
    function mainNavbarController(){
      var vm = this;
      vm.items = [
        {
          title: 'Home',
          reference: '#home',
          status: 'active'
        },
        {
          title: 'Products',
          reference: '#products',
          status: 'none'
        },
        {
          title: 'Sale',
          reference: '#sale',
          status: 'none'
        },
        {
          title: 'About Us',
          reference: '#about',
          status: 'none'
        },
        {
          title: 'Contact Us',
          reference: '#contact',
          status: 'none'
        }
      ];
    }
         
  angular
    .module('mainHotOffers')
    .controller('mainHotOffersController',mainHotOffersController);
    
    function mainHotOffersController($http){
      var vm = this;
      $http.get('api/main/hotoffers')
        .success( function(data) {
          vm.hotoffers = data;
        })
        .error( function(data, status, headers, config) {
          alert('data: '+ data + '| status: '+status+' |Headers: '+headers+' |config: '+config);
      });

    }

})();
