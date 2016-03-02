(function(){
	'use strict';

	angular
		.module('main')
		.filter('retriveFromCache', retriveFromCache)
		.filter('translate', translate);

		function retriveFromCache(imageCacheService){
			return function(imageUrl){
				var imageText;
				
				imageText = imageCacheService.getImageFromCache(imageUrl);
				if (angular.isUndefined(imageText)) {
					imageCacheService.retriveImageFromUrl(imageUrl)
						.then( function(arrayBuff){
							imageText = 'data:image/png;base64,'+imageCacheService.arrayBufferToBase64(arrayBuff);
							imageCacheService.putImageToCache(imageUrl, imageText);

						});
					imageText = imageCacheService.getImageFromCache(imageUrl);

				}
				if (angular.isDefined(imageText)) {
					return imageText;
				} else {
					return imageUrl;
				}
			}
		}
/*		
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
*/
		function translate(translationKeysService){
			return function(_key){
				return translationKeysService.retriveTranslatedKey(_key);
			}
		}
})();