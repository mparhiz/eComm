(function(){
	'use strict';

	angular
		.module('productDetail')
		.controller('productDetailController', productDetailController);

	function productDetailController($stateParams, GetProductDetailImageService, mainService, toastr){
		var vm = this;
		vm.rate = 0;
		vm.isReadonly = true;
		vm.listOfDefaultQtys = [1,2,3,4,5,6,7,8,9,10];
		vm.setInterval = -1;
		vm.noWrapSlides = false;
		vm.products = [];
		vm.product = {};
		vm.mainImage = '';
		vm.arrayOfImageGroup = [];
		vm.specials = $stateParams.special;
		vm.productId = $stateParams.productId;
		vm.groupSize = 4;
		vm.review = {};
		vm.reviews = [];
		vm.qty = 1;

		if (vm.specials != null) {
			mainService.retriveSpecialProductsData(vm.specials)
				.then(function(products){
					vm.products = products;

					if (angular.isDefined(vm.productId)) {
						angular.forEach(vm.products, function(value){
							if (value.id == vm.productId) {
								vm.product = value;
								vm.rate = vm.product.rate;
								vm.mainImage = vm.product.imageUrl;
							}
						}); 

						GetProductDetailImageService.retrieveImages(vm.productId)
							.then( function(images) {
								vm.images = images;

								if (angular.isDefined(vm.images.imagesUrl)) {
									vm.arrayOfImageGroup = mainService.setupObjectArray(vm.images.imagesUrl, vm.groupSize);
								}
							});
					}
				});
		}

		vm.changeImage = function(image_){
			vm.mainImage = image_;
		}

		vm.addReview = function(reviews){
			reviews.push(vm.review);
			vm.review = {};
			vm.showMsgs(vm.errorKeys.SERVER_ERROR);
		}

		vm.errorKeys = {
			"EMAIL_INVALID": "Please Enter a valid Email address!",
			"SERVER_ERROR" : "Cannot connect to server!"
		};
		vm.showMsgs = function(msg_){
			toastr.error(msg_,'Error');
		}
	}

})();