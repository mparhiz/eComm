(function() {
  'use strict';

  angular
    .module('carousel')
    .service('CarouselService',CarouselService);

  function CarouselService($http, URL_MAPPINGS) {
    return {
      retrieveCarouselSlides: function(){
        return $http.get(URL_MAPPINGS.CAROUSEL_URL)
        .then(function (response){
          return response.data;
        });
      }
    }
  }

})();
