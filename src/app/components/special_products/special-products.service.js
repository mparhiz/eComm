(function() {
  'use strict';

  angular
    .module('specialProducts')
    .service('SpecialProductsService',SpecialProductsService);

  function SpecialProductsService($http, URL_MAPPINGS) {
    return {
      retrieveTabsInfo: function(){
        return $http.get(URL_MAPPINGS.TABSINFO_URL)
          .then(function succssCallback(response){
            return response.data
          });
      }
    }
  }

})();
