(function(){
	'use strict';

	angular
		.module('products')
		.controller('ProductsController',ProductsController);

	function ProductsController($stateParams, mainService){
		var vm = this;
		vm.category = $stateParams.category;
		vm.special = ($stateParams.special == null)? 'all' : $stateParams.special;
		vm.products = [];
		
		mainService.retriveSpecialProductsData(vm.special)
			.then(function(products){
				vm.products = products;
			});


	}

})();