(function() {
  'use strict';

  angular
    .module('main')
    .directive('ecProductTileDirective', ecProductTileDirective);


  function ecProductTileDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/product_tile/productTile.html',
      replase: true,
      scope: {
        item: "="
      }
    };
  }


})();
