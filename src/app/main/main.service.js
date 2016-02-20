(function() {
  'use strict';

  angular
    .module('main')
    .service('mainService', mainService);
  
  function mainService($window, $http, URL_MAPPINGS) {
    return {
      setupObjectArray: function(object_, arraySize_){
        var arraySize_1 = arraySize_ - 1;
        var arrayOfObjectGroups = [];
        var objectGroups = [];
        var i, j;
        var totalSteps = $window.Math.ceil(object_.length / arraySize_);
        var totalSteps_1 = totalSteps - 1;
          
        for (i = 0; i <= totalSteps_1; i++) {
          objectGroups = [];
          for (j = 0; j <= arraySize_1; j++) {
            if (angular.isUndefined(object_[(i * arraySize_) + j])) {
              break;
            }
            objectGroups.push(object_[(i * arraySize_) + j]);
          }
          arrayOfObjectGroups.push(objectGroups); 
        }
        return arrayOfObjectGroups;
      },
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
