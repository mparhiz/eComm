(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('NavbarController', NavbarController);

  function NavbarController(NavbarService, URL_MAPPINGS) {
    var vm = this;
    vm.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    NavbarService.retrieveNavbar(URL_MAPPINGS.NAVBAR_URL).then( function(items) {
      vm.items = items;
    });

    function toggleNavbar(){
      vm.navCollapsed = !vm.navCollapsed;
    }
  }

})();
