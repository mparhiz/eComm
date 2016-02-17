(function() {
  'use strict';

  angular
    .module('specialproducts')
    .controller('specialProductsController', specialProductsController);

  function specialProductsController(SpecialProductsService, URL_MAPPINGS) {
    var vm = this;

    SpecialProductsService.retrieveTabsInfo(URL_MAPPINGS.TABSINFO_URL).then( function(tabs) {
      vm.tabs = tabs;
    });
  }

})();
