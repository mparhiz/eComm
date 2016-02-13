(function() {
  'use strict';

  angular
    .module('productslider')
    .controller('productSliderController', productSliderController);

  function productSliderController(ProductSliderService, $scope, $log, $window) {
    var vm = this;
    vm.setInterval = -1;
    vm.noWrapSlides = false;
    vm.groupSize = 4;
    vm.groupSize_1 = vm.groupSize - 1;
    vm.pageNo = 1;

    ProductSliderService.retrieveSlides($scope.tabUrl).then( function(products) {
      vm.products = products;
      vm.productGroups = [];
      var productTemp = [];
      var i, j;

      vm.totalPage = $window.Math.ceil(vm.products.length / vm.groupSize);
      vm.totalPage_1 = vm.totalPage - 1;
      
      for (i = 0; i <= vm.totalPage_1; i++) {
        productTemp = [];
        for (j = 0; j <= vm.groupSize_1; j++) {
          if (angular.isUndefined(vm.products[(i * vm.groupSize) + j])) {
            break;
          } 
          productTemp.push(vm.products[(i * vm.groupSize) + j]);
        }
        vm.productGroups.push(productTemp); 
      }
    });
  }

})();
