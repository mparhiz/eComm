(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('NavbarController', NavbarController);

<<<<<<< HEAD
  function NavbarController(NavbarService, URL_MAPPINGS) {
=======
  function NavbarController(NavbarService) {
>>>>>>> c25195f50cf1374aa0574a12c16aefed3be2d04a
    var vm = this;
    vm.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

<<<<<<< HEAD
    NavbarService.retrieveNavbar(URL_MAPPINGS.NAVBAR_URL).then( function(items) {
      vm.items = items;
    });
=======
    NavbarService.retrieveNavbarItems()
      .then( function(items) {
        vm.items = items;
      });
>>>>>>> c25195f50cf1374aa0574a12c16aefed3be2d04a

    function toggleNavbar(){
      vm.navCollapsed = !vm.navCollapsed;
    }
  }

})();
