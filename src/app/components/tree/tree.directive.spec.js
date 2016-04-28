'use strict'
describe("flatTree", function(){
	var $rootScope,
		$scope,
		$compile,
		el,
		$body = angular.element(document).find('body'),
		simpleHtml = '<flat-tree tree-data="{{nodes}}" selected-node="{{selectedNode}}"></flat-tree>',
		nodes = [
			{
				"id": "1.0",
				"name": "Cloth",
				"show": false,
				"children": [
					{
						"id": "1.1",
						"name": "Men",
						"show": false,
						"children": []						
					}
				]
			},
			{
				"id": "2.0",
				"name": "Electronic",
				"show": false,
				"children": [
					{
						"id": "2.1",
						"name": "Computer",
						"show": false,
						"children": []						
					}
				]
			}
		];

	beforeEach(function(){
		module('tree', 'eComm.templates');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$compile = $injector.get('$compile');
			el = $compile(angular.element(simpleHtml))($scope);
		});

		$body.append(el);
		$rootScope.$digest();
	});
/*
	it("shoule not be have a class", function(){
console.log(el);
		expect(el.hasClass("red")).not.toBeTruthy();
		expect(el.hasClass("parent_li")).toBe(true);
	});

	it("should be ", function(){
		//expect(el.html()).toContain("flat-tree");
	});
	*/
});