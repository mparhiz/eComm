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
        templateUrl: 'app/main/main.html'
        /*,controller: 'MainController',
        controllerAs: 'main'*/
      })
      .state('home.products', {
        url: '/products',
        templateUrl: 'app/main/products.html'
      });

    $urlRouterProvider.otherwise('/');
    /*$locationProvider.html5Mode(true);*/
  }

})();