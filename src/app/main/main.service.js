(function() {
  'use strict';

  angular
    .module('main')
    .service('mainService', mainService);
  
  function mainService($window, $http, URL_MAPPINGS) {
    return {
      retriveSpecialProductsData: function(specials_){
        var _url_;

        switch (specials_) {
          case 'hotoffers':
              _url_ = URL_MAPPINGS.HOTOFFERS_URL;
              break;
          case 'newproducts':
              _url_ = URL_MAPPINGS.NEWPRODUCTS_URL;
              break;
          case 'toppicks':
              _url_ = URL_MAPPINGS.TOPPICKS_URL;
              break;
          case 'clearances':
              _url_ = URL_MAPPINGS.CLEARANCES_URL;
              break;
          case 'all':
              _url_ = URL_MAPPINGS.PRODUCTS_URL;
              break;
        }  

        return $http.get(_url_)
          .then(function succssCallback(response){
            return response.data;
        });
      }
    }
  }

})();
