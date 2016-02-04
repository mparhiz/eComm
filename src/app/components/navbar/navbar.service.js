(function() {
  'use strict';

  angular
    .module('navbar')
    .service('NavbarService',NavbarService);

  function NavbarService($http) {
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
