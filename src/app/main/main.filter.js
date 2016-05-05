(function(){
	'use strict';

	angular
		.module('main')
		.filter('retriveFromCache', retriveFromCache)
		.filter('translate', translate);

		function retriveFromCache(imageCacheService){
			return function(imageUrl){
				var imageText,
					imageType;
				
				imageText = imageCacheService.getImageFromCache(imageUrl);
				if (angular.isDefined(imageText)) {
					return imageText;
				} else {
					imageCacheService.retriveImageFromUrl(imageUrl)
						.then( function(arrayBuff){
							imageType = imageUrl.slice(-3);
							imageType = (imageType == 'jpg') ? 'jpeg' : imageType;
							imageText = 'data:image/'+imageType+';base64,'+imageCacheService.arrayBufferToBase64(arrayBuff);
							imageCacheService.putImageToCache(imageUrl, imageText);
						});
					return imageUrl;					
				}
			}
		}
/*		
		function retriveFromCache(imageCacheService, imageCacheServiceViaFileReader){
			return function(imageUrl){
				var imageText, base64Image;
				
				imageText = imageCacheService.getImageFromCache(imageUrl);
				if (angular.isUndefined(imageText)) {
					imageCacheServiceViaFileReader.convertFileToDataURLviaFileReader(imageUrl, function(base64Img){
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