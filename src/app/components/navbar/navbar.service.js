(function() {
  'use strict';

  angular
    .module('navbar')
    .constant('NAVBAR_URL', 'api/main/navbar')
    .service('NavbarService',NavbarService);

  function NavbarService($http, NAVBAR_URL) {
    return {
      retrieveNavbarItems: function(){
        return $http.get(NAVBAR_URL)
        .then(function (response){
          return response.data;
        });
      }
    }
  }

})();
