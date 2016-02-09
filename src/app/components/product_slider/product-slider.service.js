(function() {
  'use strict';

  angular
    .module('productslider')
    .service('ProductSliderService',ProductSliderService);

  function ProductSliderService($http) {
    return {
      retrieveSlides: function(_url_){
        return $http.get(_url_)
        .then(function succssCallback(response){
          return response.data
        });
      }
    }
  }

})();
