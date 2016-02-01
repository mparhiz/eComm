(function() {
  'use strict';

  angular
    .module('main')
    .factory('CarouselService', CarouselService)
    .factory('NavbarService', NavbarService)
    .factory('SpecialProductsService', SpecialProductsService);

  function CarouselService($http) {
    return {
      getCarousel: function(callback) {
        $http.get('api/main/carousel').success(callback);
      }
    }
  }


  function NavbarService($http) {
    return {
      getNavbar: function(callback) {
        $http.get('api/main/navbar').success(callback);
      }
    }
  }


  function SpecialProductsService($http) {
    return {
      getHotOffers: function(callback) {
        $http.get('api/main/hotoffers').success(callback);
      }
    }
  }

})();
