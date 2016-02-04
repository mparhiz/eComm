(function() {
  'use strict';

  angular
    .module('main')
    .controller('CarouselController',CarouselController)
    .controller('NavbarController',NavbarController)
    .controller('HotOffersController',HotOffersController);


  function CarouselController(getData){
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    getData.fetch('api/main/carousel').then( function(data) {
      vm.slides = data;
    });
  }


  function NavbarController($scope, getData){
    var vm = this;
    $scope.navCollapsed = true;
    vm.toggleNavbar = toggleNavbar;

    getData.fetch('api/main/navbar').then( function(data) {
      vm.items = data;
    });

    function toggleNavbar(){
      $scope.navCollapsed = !$scope.navCollapsed;
    }
  }


  function HotOffersController(getData){
    var vm = this;
    getData.fetch('api/main/hotoffers').then( function(data) {
      vm.hotoffers = data;
    });

      getData.fetch('api/main/toppicks').then( function(data) {
      vm.toppicks = data;
    });

    getData.fetch('api/main/newproducts').then( function(data) {
      vm.newproducts = data;
    });

    getData.fetch('api/main/clearances').then( function(data) {
      vm.clearances = data;
    });
}

})();
