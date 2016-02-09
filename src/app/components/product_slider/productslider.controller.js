(function() {
  'use strict';

  angular
    .module('productslider')
    .controller('ProductSliderController', ProductSliderController);

  function ProductSliderController(ProductSliderService, $scope) {
    var vm = this;
    vm.setInterval = 3000;
    vm.noWrapSlides = false;
    //vm.pageSize = 4;
    //vm.pageNo = 1;
    //vm.tmpVal = vm.productLength / vm.pageSize;
    //vm.totalPage = (( vm.tmpVal > (vm.tmpVal | number:0))?( vm.tmpVal+1|number:0 ):(vm.tmpVal|number:0));

    ProductSliderService.getData($scope.url_).then( function(productData) {
      vm.products = productData;
      //vm.productLength = vm.products.length;
    });

  }

})();
