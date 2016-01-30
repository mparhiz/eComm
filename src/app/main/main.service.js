(function() {
  'use strict';

  angular
    .module('mainCarousel')
    .factory('mainCarouselService', mainCarouselService);

  function mainCarouselService($http) {
    return {
      getCarousel: function(callback) {
        $http.get('api/main/carousel').success(callback);
      }
    }
  }


  angular
    .module('mainNavbar')
    .factory('mainNavbarService', mainNavbarService);

  function mainNavbarService($http) {
    return {
      getNavbar: function(callback) {
        $http.get('api/main/navbar').success(callback);
      }
    }
  }

})();
