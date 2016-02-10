(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('NavbarController', NavbarController);

  function NavbarController(NavbarService, NAVBAR_URL) {
    var vm = this;
    vm.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    NavbarService.retrieveNavbar(NAVBAR_URL).then( function(items) {
      vm.items = items;
    });

    function toggleNavbar(){
      vm.navCollapsed = !vm.navCollapsed;
    }
  }

})();
