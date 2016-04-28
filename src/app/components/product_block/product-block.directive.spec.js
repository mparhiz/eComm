'use strict'
describe('productBlockDirective', function(){
	var $rootScope,
		$scope,
		$compile,
		$body = angular.element(document).find('body'),
		elem;

	beforeEach(function(){
		module('eComm.templates','productBlock');
		inject(function($injector){
			$rootScop = $injector.get('$rootScope');
			$scope = $rootScope.new();
		});

		// to do list
	});
	/*
	it();
	*/
});