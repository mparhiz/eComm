(function() {
  'use strict';

  angular
    .module('main')
    .directive('ecProductBlockDirective', ecProductBlockDirective);


  function ecProductBlockDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_block/productBlock.html',
      replase: true,
      scope: {
        item: "="
      }
    };
  }


})();
