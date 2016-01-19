(function() {
  'use strict';

  angular
    .module('eComm')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/homepage/main.html'
      })
      .state('home.products', {
        url: 'products',
        templateUrl: 'app/homepage/products.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
