(function() {
  'use strict';

  angular
    .module('navbar')
    .service('NavbarService',NavbarService);

  function NavbarService($http, URL_MAPPINGS) {
    return {
      retrieveNavbarItems: function(){
        return $http.get(URL_MAPPINGS.NAVBAR_URL)
        .then(function (response){
          return response.data;
        });
      }
    }
  }

})();
