'use strict'
describe("flatTree", function(){
	var $rootScope,
		$scope,
		$compile,
		el,
		//$body = $('body'),
		simpleHtml = '<flat-tree class="red" tree-data="node" selected-node="selectedNode"></flat-tree>';

	beforeEach(function(){
		module('tree', 'eComm.templates');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$compile = $injector.get('$compile');
			el = $compile(angular.element(simpleHtml))($scope);
		});

		//$body.append(el);
		$rootScope.$digest();
	});
	it("shoule be have a class", function(){
		expect(el.hasClass("red")).toBe(true);
		expect(el.hasClass("red")).toBeTruthy();
	});
});