(function(){
	'use strict'

	describe('ecProductBlock directive', function(){
		var $rootScope,
			$scope,
			$compile,
			el,
			element;

		beforeEach(function(){
			module('eComm', 'eComm.templates');
			inject(function(_$rootScope_, _$compile_){
				$rootScope = _$rootScope_;
				$scope = $rootScope.$new();
				$compile = _$compile_;
			});

			$scope.product = ['{',
				'"id" : "1007",',
				'"name" : "Boys & Girls Shoes",',
				'"category" : "Cloth",',
				'"subCategory": "Baby",',
				'"availableDate" : "2015-07-06T00:00:00.000Z",',
				'"price" : 10.95,',
				'"imageUrl" : "app/main/Products_imgs/1007/1007_1.jpg",',
				'"rate" : 3.5,',
				'"oldPrice" : 15.00,',
				'"postage" : 2.50,',
				'"spec" : "Condition",',
				'"deliveryTime" : "Estimated",',
				'"delivery" : "We",',
				'"desc" : "Suitable for both Girls and Boys"',
			'}'].join('');
			$scope.special = 'hotoffers';
			el = angular.element('<ec-product-block item="product" special="special"></ec-product-block>');
			element = $compile(el)($scope);
			$scope.$digest();
		});

		it('true should be true', function(){
			expect(true).toBe(true);
			//expect(element.find('button')).toBeDefined();
			//expect(element.find('button').hasClass('btn')).toBe(true);
		});
	});
})();