describe("ProductsController", function(){
	//var $controller;
	var mockSpecialProductsService, mockMainService;
	
	beforeEach(module('products'));
	
	beforeEach(inject(function($controller){
		var ProductsController = $controller('ProductsController', {
			SpecialProductsService: mockSpecialProductsService,
			mainService: mockMainService
		});
	}));

/*
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
});
