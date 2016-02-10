(function() {
  'use strict';

  angular
    .module('carousel')
    .service('CarouselService',CarouselService)
    .constant('CAROUSEL_URL', 'api/main/carousel');

  function CarouselService($http, CAROUSEL_URL) {
    return {
      retrieveCarouselSlides: function(){
        return $http.get(CAROUSEL_URL)
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
