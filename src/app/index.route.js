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
        templateUrl: 'app/main/main.html'
      })
      .state('home.products', {
        url: '/products',
        templateUrl: 'app/main/products.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
