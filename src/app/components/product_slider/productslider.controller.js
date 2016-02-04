(function() {
  'use strict';

  angular
    .module('productslider')
    .controller('ProductSliderController', ProductSliderController);

  function ProductSliderController(ProductSliderService, $scope) {
    var vm = this;

    ProductSliderService.getData($scope.url_).then( function(productData) {
      vm.products = productData;
    });

  }

})();

