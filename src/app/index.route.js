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
        templateUrl: 'app/products/products.html',
        params: {
          type: null
        }
      })
      .state('home.sale', {
        url: '/sale',
        templateUrl: 'app/main/sale.html',
        params: {
          type: null
        }
      })
      .state('home.contact', {
        url: '/contact',
        templateUrl: 'app/main/contact.html'
      })
      .state('home.about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
