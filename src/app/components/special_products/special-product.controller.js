(function() {
  'use strict';

  angular
    .module('specialProducts')
    .controller('specialProductsController', specialProductsController);

  function specialProductsController(SpecialProductsService) {
    var vm = this;

    SpecialProductsService.retrieveTabsInfo()
      .then( function(tabs) {
        vm.tabs = tabs;
      });
  }

})();
