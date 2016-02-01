(function() {
  'use strict';

  angular
    .module('mainCarousel')
    .controller('mainCarouselController',mainCarouselController);
 
  function mainCarouselController(mainCarouselService){
    var vm = this;
    vm.myInterval = 3000;
    vm.noWrapSlides = false;
    mainCarouselService.getCarousel(function(data) {
      vm.slides = data;
    });
  }



  angular
    .module('mainNavbar')
    .controller('mainNavbarController',mainNavbarController);
    
    function mainNavbarController(mainNavbarService){
      var vm = this;
      mainNavbarService.getNavbar(function(data) {
        vm.items = data;
      });
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
