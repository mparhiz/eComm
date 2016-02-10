(function() {
  'use strict';

  angular
    .module('specialproducts')
    .service('SpecialProductsService',SpecialProductsService);

  function SpecialProductsService($http) {
    return {
      retrieveTabsInfo: function(_url_){
        return $http.get(_url_)
        .then(function succssCallback(response){
          return response.data
        });
      }
    }
  }

})();
