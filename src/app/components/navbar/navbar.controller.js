(function() {
  'use strict';

  angular
    .module('navbar')
    .controller('NavbarController', NavbarController);

  function NavbarController($scope, NavbarService) {
    var vm = this;
    $scope.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    NavbarService.getData('api/main/navbar').then( function(navbarData) {
      vm.items = navbarData;
    });

    function toggleNavbar(){
      $scope.navCollapsed = !$scope.navCollapsed;
    }
  }

})();
