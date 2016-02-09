(function() {
  'use strict';

  angular
    .module('navbar')
    .service('navbarService',navbarService);

  function navbarService($http) {
    return {
      getData: function(_url_){
        return $http.get(_url_)
        .then(function succssCallback(response){
          return response.data
        });
      }
    }
  }

})();
