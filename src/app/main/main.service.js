(function() {
  'use strict';

  angular
    .module('main')
    .service('getData',getData);

  function getData($http, $log) {
    return {
      fetch: function(_url_){
        return $http({
          method: 'GET',
          url: _url_
        })
        .then(function succssCallback(response){
          return response.data
        }, function errorCallback(response){
          $log.error("status: " + response.status);
        });
      }
    }
  }

})();
