(function() {
  'use strict';

  angular
    .module('eComm')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    /*  
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
*/
      .state('home', {
        url: '/',
        templateUrl: 'app/homepage/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.products', {
        url: '/products',
        templateUrl: 'app/homepage/products.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();