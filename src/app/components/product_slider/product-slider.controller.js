(function() {
  'use strict';

  angular
    .module('productslider')
    .controller('productSliderController', productSliderController);

  function productSliderController($scope, mainService) {
    var vm = this;
    vm.setInterval = -1;
    vm.noWrapSlides = false;
    vm.groupSize = 4;
    vm.tabName = $scope.tabName;
    
    mainService.retriveSpecialProductsData(vm.tabName)
      .then(function(products){
        vm.arrayOfProductGroup = mainService.setupObjectArray(products, vm.groupSize);
      });
  }

})();
