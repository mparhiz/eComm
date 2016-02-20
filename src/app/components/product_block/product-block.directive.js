(function(){
	'use strict';

	angular
		.module('productBlock')
		.directive('ecProductBlock',ecProductBlock);

	function ecProductBlock(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/product_block/product-block.html',
			scope: {},
			bindToController: {
				item: "=",
				special: "="
			},
			controller: productBlockController,
			controllerAs: 'productBlockCtrl'
		};

		function productBlockController(){
			//To do somethings
		}
	}

})();