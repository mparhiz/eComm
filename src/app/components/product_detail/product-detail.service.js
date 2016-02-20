(function(){
	'use strict';

	angular
		.module('productDetail')
		.service('GetProductDetailImageService', GetProductDetailImageService);

		function GetProductDetailImageService($http){
			return {
				retrieveImages: function(productId_){
					return $http.get('/api/product/'+productId_+'/images')
					.then(function succssCallback(response){
						return response.data
					});
				}
			}

		}
})();