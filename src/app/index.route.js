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
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        params: {
          type: null
        }
      })
      .state('sale', {
        url: '/sale',
        templateUrl: 'app/sale/sale.html',
        params: {
          type: null
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
