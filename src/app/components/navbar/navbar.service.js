(function() {
  'use strict';

  angular
    .module('navbar')
    .constant('NAVBAR_URL','api/main/navbar')
    .service('navbarService',navbarService);

  function navbarService($http) {
    return {
      retrieveNavbar: function(_url_){
        return $http.get(_url_)
        .then(function succssCallback(response){
          return response.data
        });
      }
    }
  }

})();
