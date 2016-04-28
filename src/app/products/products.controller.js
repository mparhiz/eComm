/* global _ */
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
		vm.categories = [];
		vm.subCategories = [];
		vm.products = [];
		vm.displayProducts = [];
		vm.priceFrom = 0;
		vm.priceTo = 0;
		vm.totalItems = 0;
		vm.currentPage = 1;
		vm.maxSize = 9;
		vm.treeData = [];
		vm.itemClick = "";
		
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
		
		mainService.retriveCategories()
			.then(function(categories){
				vm.categories = _.concat([''], categories);
				vm.selectedCategory = vm.categories[0];
			});

		SpecialProductsService.retrieveTabsInfo()
			.then( function(tabs) {
				vm.specials = _.concat({ "title" : "", "icon" : "", "tabName" : "all"}, tabs);

				vm.selectedSpecial = _.find(vm.specials, ['tabName' , vm.special]);

				vm.retriveProductsOnPage();
/*
				mainService.retriveSpecialProductsData(vm.selectedSpecial.tabName)
					.then(function(products){
						vm.products = products;
						vm.displayProducts = vm.orderBy(vm.products, vm.sortBy.selectedOption.key, vm.sortBy.selectedOption.reverse);
						vm.totalItems = vm.displayProducts.length;
						vm.displayProducts = vm.limitTo(vm.displayProducts, vm.currentPage*vm.itemPerPage.selectedOption);
						vm.displayProducts = vm.limitTo(vm.displayProducts, -1*vm.itemPerPage.selectedOption);
						vm.treeData = vm.createTreeOfCategories(products);
					});
*/
			});

		vm.showSelected = function(node_){
			vm.treeSelectedNode = node_;
			var nodeID = _.split(vm.treeSelectedNode.id, '.');
			if (nodeID[1] == 0) {				
				vm.selectedCategory = vm.treeSelectedNode.name;
				vm.selectedSubCategory = "";
			} else {
				vm.selectedCategory = (_.find(vm.treeData, ['id', nodeID[0]+'.0'])).name;
				vm.selectedSubCategory = vm.treeSelectedNode.name;
			}
			vm.refreshOnPage();
		};
		
		vm.retriveSubCategories = function(category_){
			vm.selectedSubCategory = "";
			mainService.retriveSubCategories(category_)
				.then(function(subCategories){
					vm.subCategories = _.concat([''], subCategories);
				});		
		}

		vm.limitOnPage = function(){
			vm.totalItems = vm.displayProducts.length;
			vm.displayProducts = vm.orderBy(vm.displayProducts, vm.sortBy.selectedOption.key, vm.sortBy.selectedOption.reverse);
			vm.displayProducts = vm.limitTo(vm.displayProducts, vm.currentPage*vm.itemPerPage.selectedOption);
			vm.displayProducts = vm.limitTo(vm.displayProducts, -1*vm.itemPerPage.selectedOption);
		}
		
		vm.retriveProductsOnPage = function(){
			mainService.retriveSpecialProductsData(vm.selectedSpecial.tabName)
				.then(function(products){
					vm.products = products;
					vm.displayProducts = products;
					vm.selectedCategory = '';
					vm.selectedSubCategory = '';
					vm.subCategories = '';
					vm.limitOnPage();
					vm.treeData = vm.createTreeOfCategories(products);
				});
		}

		vm.refreshOnPage = function(){
			var displayProductsTemp = [];
			if (vm.selectedCategory == '') {
				displayProductsTemp = vm.products;
				vm.selectedSubCategory = '';
				vm.subCategories = '';
			} else {
				displayProductsTemp = _.filter(vm.products, ['category', vm.selectedCategory]);
				if ((vm.selectedSubCategory != '') && (typeof vm.selectedSubCategory !== "undefined")){
					displayProductsTemp = _.filter(displayProductsTemp, ['subCategory', vm.selectedSubCategory]);
				}
			}
			if (vm.priceFrom != 0 || vm.priceTo != 0) {
				if (vm.priceFrom > vm.priceTo) {
					var temp = vm.priceTo;
					vm.priceTo = vm.priceFrom;
					vm.priceFrom = temp;
				}
				displayProductsTemp = _.filter(displayProductsTemp, function(o) { return (o.price <= vm.priceTo && o.price >= vm.priceFrom); });
			}
			vm.displayProducts = displayProductsTemp;
			vm.limitOnPage();
		}

		vm.createTreeOfCategories = function(_products){
			var categoryList = _.uniq(_.map(_products, 'category'));
			var tree = [];
			var subcategoryList = [];
			var i, j;
			i = 0;
			_.forEach(categoryList, function(_category){
				i++;
				subcategoryList = [];
				j = 0;
				_.forEach(_.uniq(_.map((_.filter(_products, ['category', _category])), 'subCategory')), function(_subcategory){
					j++;
					_(subcategoryList).push({'id': i+'.'+j, 'name':_subcategory,'show':false,'children':[]}).commit();
				});
				_(tree).push({'id': i+'.0', 'name':_category,'show':false,'children':subcategoryList}).commit();
			});
			return tree;
		}
	}

})();