(function() {
  'use strict';

  angular
    .module('carousel')
    .service('CarouselService',CarouselService);

  function CarouselService($http) {
    return {
      retrieveCarousel: function(_url_){
        return $http.get(_url_)
        .then(function succssCallback(response){
          return response.data
        });
      }
    }
  }

})();
