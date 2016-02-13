(function() {
  'use strict';

  angular
    .module('productslider')
    .directive('ecProductBlock', ecProductBlock);

  function ecProductBlock(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_block/product-block.html',
      scope: {
        item: "="
      }
    };
  }

})();
