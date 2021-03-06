(function() {
  'use strict';

  angular
    .module('eComm')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'app/main/main.html',
        abstract: true
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/home/home.html'
      })
      .state('main.products', {
        url: '/products/:special/:category',
        templateUrl: 'app/products/products.html',
        params: {
          special: null,
          category: null
        }
      })
      .state('main.detail', {
        url: '/products/detail/:special/:productId',
        templateUrl: 'app/components/product_detail/product-detail.html',
        params: {
          special: null,
          productId: null
        }
      })
      .state('main.sale', {
        url: '/sale',
        templateUrl: 'app/sale/sale.html',
        params: {
          type: null
        }
      })
      .state('main.contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      })
      .state('main.about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
