(function() {
  'use strict';

  angular
    .module('main')
    .controller('MainController',MainController);

  function MainController($state){
    $state.transitionTo('home.speciadproducts');
}

})();
