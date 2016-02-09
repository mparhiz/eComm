(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('mainNavbarController', mainNavbarController);

  function mainNavbarController(navbarService, NAVBAR_URL) {
    var vm = this;
    vm.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    navbarService.retrieveNavbar(NAVBAR_URL).then( function(items) {
      vm.items = items;
    });

    function toggleNavbar(){
      vm.navCollapsed = !vm.navCollapsed;
    }
  }

})();
