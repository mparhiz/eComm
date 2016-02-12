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
      },
      retrieveOddSlides: function() {
        return this.retrieveCarouselSlides()
          .then(function(allSlides) {
            return _.filter(allSlides, function(value, index) {
              return index % 2 === 1;
            });
          });
      }
    }
  }

})();
