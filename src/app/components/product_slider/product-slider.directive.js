(function() {
  'use strict';

  angular
    .module('productSlider')
    .directive('ecSlider', ecSlider);


  function ecSlider(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_slider/product-slider.html',
      scope: {},
      bindToController: {
        tabName: "="
      },
      controller: productSliderController,
      controllerAs: 'productSliderCtrl'
    };
  
    function productSliderController(mainService) {
      var vm = this;
      vm.setInterval = -1;
      vm.noWrapSlides = false;
      vm.groupSize = 4;
      
      mainService.retriveSpecialProductsData(vm.tabName)
        .then(function(products){
          vm.arrayOfProductGroup = _.chunk(products, vm.groupSize);
        });
    }
  }

})();
