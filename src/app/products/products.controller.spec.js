'use strict'
describe("ProductsController controller", function(){
	var ctrl,
		$stateParams,
		$rootScope,
		$filter,
		mockMainService,
		mockSpecialProductsService,
		$httpBackend,
		products = [],
		specials = [];

	$stateParams = {category: 'baby', special: 'all'};
	
	beforeEach(function(){
		module('main', 'products', 'specialProducts', 'ui.router');
		inject(function(_$controller_, _$rootScope_, _$filter_, _mainService_, _SpecialProductsService_, _$httpBackend_){
			$rootScope = _$rootScope_;
			$filter = _$filter_;
			$httpBackend = _$httpBackend_;
			mockMainService = _mainService_;
			mockSpecialProductsService = _SpecialProductsService_;
			ctrl = _$controller_("ProductsController",{
				$stateParams : $stateParams,
				$filter : $filter,
				mainService :mockMainService,
				SpecialProductsService : mockSpecialProductsService
			});
		});

		$httpBackend.when('GET', 'api/products')
			.respond(products);

		$httpBackend.when('GET', 'api/main/special/tabs')
			.respond(specials);

		//$rootScope.$digest();
	});

	afterEach(function(){
		$httpBackend.flush();
		$rootScope.$digest();
	});


	it('shuld be exist', function(){
		expect(ctrl).toExist;
	});
	
	describe('. Variables should be defined: ', function(){
		it("maxSize should be 9", function(){
			expect(ctrl.maxSize).toBeDefined();
			expect(ctrl.maxSize).toBe(9);
			ctrl.maxSize = 10;
			expect(ctrl.maxSize).toBe(10);
		});
		it("category and special variables should be defined", function(){
			expect(ctrl.category).toEqual($stateParams.category);
			expect(ctrl.special).toEqual($stateParams.special);
		});

		it("categories and specials should have value", function(){
			//$rootScope.$digest();
			//var categories = [];

			//expect(ctrl.categories).toEqual(categories);



console.log(products);
console.log("mm = "+ctrl.special);
			expect(ctrl.specials).toExist;
		});
	});

});
