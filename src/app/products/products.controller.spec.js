'use strict'
describe("ProductsController controller", function(){
/*
	//var $controller;
	var mockSpecialProductsService, mockMainService;
	
	beforeEach(module('products'));
	
	beforeEach(inject(function($controller){
		var ProductsController = $controller('ProductsController', {
			SpecialProductsService: mockSpecialProductsService,
			mainService: mockMainService
		});
	}));


	it("should be 9", function(){
		expect(ProductsController.maxSize).toBeDefined();
		expect(ProductsController.maxSize.test(9)).toBe(true);
		expect(ProductsController.maxSize.test(1)).toBe(false);
	});

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	describe("SIMPLE TEST", function(){
		it("shuld be 5.", function(){
			var $scope = {};
			var controller = $controller('ProductsController', { $scope: $scope });
			expect(controller.sortBy.availableOptions.length).toBe(5);
		});
	});
*/
	var ctrl,
		$stateParams,
		$rootScope,
		$scope,
		$filter,
		mockMainService,
		mockSpecialProductsService;
	
	$stateParams = {category: '', special: 'all'};
	
	beforeEach(function(){
		module('main', 'products', 'specialProducts', 'ui.router');
		inject(function(_$controller_, _$rootScope_, _$filter_, _mainService_, _SpecialProductsService_){
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();
			$filter = _$filter_;
			mockMainService = _mainService_;
			mockSpecialProductsService = _SpecialProductsService_;
			ctrl = _$controller_("ProductsController",{
				$stateParams : $stateParams,
				$filter : $filter,
				mainService :mockMainService,
				SpecialProductsService : mockSpecialProductsService
			});
		});

		//$rootScope.$digest();
	});

	it('hello test', function(){
		expect('hello').toEqual('hello');
	});

	xit('shuld be exist', function(){
		//expect(controller).toExist;
	});
});
