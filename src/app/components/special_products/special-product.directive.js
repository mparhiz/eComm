(function() {
  'use strict';

  angular
    .module('specialproducts')
    .directive('ecSlider', ecSlider);


  function ecSlider(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_slider/product-slider.html',
      scope: {
        tabUrl: "="
      },
      controller: 'productSliderController',
      controllerAs: 'productSliderCtrl'
    };
  }


})();
