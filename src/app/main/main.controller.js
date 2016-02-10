(function() {
  'use strict';

  angular
    .module('main')
    .controller('mainSpecialProductsController',mainSpecialProductsController);

  function mainSpecialProductsController($state){
    $state.transitionTo('home.speciadproducts');
}

})();
