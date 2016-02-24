(function(){
	'use strict';

	angular
		.module('products')
		.controller('ProductsController',ProductsController);

	function ProductsController($stateParams, $filter, mainService, SpecialProductsService){
		var vm = this;
		vm.orderBy = $filter('orderBy');
		vm.limitTo = $filter('limitTo');
		vm.category = $stateParams.category;
		vm.special = $stateParams.special;
		vm.products = [];
		vm.totalItems = 0;
		vm.currentPage = 1;
		vm.maxSize = 9;

		vm.sortBy = {
						availableOptions: [
							{"key": "'price'", "reverse": false, "value": "Price - Lowest"},
							{"key": "'price'", "reverse": true, "value": "Price - Highest"},
							{"key": "'name'", "reverse": false, "value": "Product Name"},
							{"key": "'category'", "reverse": false, "value": "Category"},
							{"key": "['category','name']", "reverse": false, "value": "Category & Product Name"}
						],
						selectedOption: {}
					};
		vm.sortBy.selectedOption = vm.sortBy.availableOptions[2];
		
		vm.itemPerPage = {
							availableOptions: [9,27,54,108],
							selectedOption: 9
						};

		SpecialProductsService.retrieveTabsInfo()
			.then( function(tabs) {
				vm.specials = tabs;
				vm.specials = _.reverse(_.concat(_.reverse(vm.specials), { "title" : "", "icon" : "", "tabName" : "all"}));
				//vm.specials.splice(0, 0, { "title" : "", "icon" : "", "tabName" : "all"});

				vm.selectedSpecial = _.find(vm.specials, ['tabName' , vm.special]);

				mainService.retriveSpecialProductsData(vm.selectedSpecial.tabName)
					.then(function(products){
						vm.products = products;
						vm.products = vm.orderBy(vm.products, vm.sortBy.selectedOption.key, vm.sortBy.selectedOption.reverse);
						vm.totalItems = vm.products.length;
						vm.products = vm.limitTo(vm.products, vm.currentPage*vm.itemPerPage.selectedOption);
						vm.products = vm.limitTo(vm.products, -1*vm.itemPerPage.selectedOption);
						
						
				});
			});


		vm.refreshPage = function(){
			/*
			if ((vm.selectedSpecial == null) || (_.isUndefined(vm.selectedSpecial))) {
				vm.selectedSpecial = { "title" : "", "icon" : "", "tabName" : "all"};
			}
*/
			
			mainService.retriveSpecialProductsData(vm.selectedSpecial.tabName)
				.then(function(products){
					vm.products = products;

					vm.products = vm.orderBy(vm.products, vm.sortBy.selectedOption.key, vm.sortBy.selectedOption.reverse);
					vm.totalItems = vm.products.length;

					vm.products = vm.limitTo(vm.products, vm.currentPage*vm.itemPerPage.selectedOption);
					vm.products = vm.limitTo(vm.products, -1*vm.itemPerPage.selectedOption);
					
			});
		}

		//vm.refreshPage();
	}

})();