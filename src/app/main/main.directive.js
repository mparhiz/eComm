(function() {
  'use strict';

  angular
    .module('main')
    .directive('ecProductBlock', ecProductBlock);


  function ecProductBlock(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_block/product-block.html',
      replase: true,
      scope: {
        item: "="
      }
    };
  }


})();
