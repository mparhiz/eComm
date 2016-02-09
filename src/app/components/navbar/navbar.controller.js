(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('NavbarController', NavbarController);

  function NavbarController(NavbarService) {
    var vm = this;
    vm.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    NavbarService.getData('api/main/navbar').then( function(navbarData) {
      vm.items = navbarData;
    });

    function toggleNavbar(){
      vm.navCollapsed = !vm.navCollapsed;
    }
  }

})();
