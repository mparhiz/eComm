(function(){
	'use strict';

	angular
		.module('main')
		.filter('retriveFromCache', retriveFromCache);

		function retriveFromCache(imageCacheService){
			return function(imageUrl){
				var imageText, base64Image;
				
				imageText = imageCacheService.getImageFromCache(imageUrl);
				if (angular.isUndefined(imageText)) {
					imageCacheService.convertFileToDataURLviaFileReader(imageUrl, function(base64Img){
						base64Image = base64Img;
						imageCacheService.putImageToCache(imageUrl, base64Image);
						imageText = imageCacheService.getImageFromCache(imageUrl);
					});
				}
				if (angular.isDefined(imageText)) {
					return imageText;
				} else {
					return 'not Decode';
				}
			}
		}
})();