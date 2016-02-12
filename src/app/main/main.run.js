(function() {
  'use strict';

  angular
    .module('main')
    .run(runState);

  function runState($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

})();
