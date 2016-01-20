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
<<<<<<< HEAD
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
=======
        templateUrl: 'app/homepage/main.html'
>>>>>>> bf121f0f1cc818d6d90a2e3fe99ec653de745a5e
      })
      .state('home.products', {
        url: '/products',
        templateUrl: 'app/main/products.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
