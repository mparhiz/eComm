(function() {
	'use strict';

	describe('GetProductDetailImageService service', function() {
		var GetProductDetailImageService,
			$httpBackend;

		beforeEach(module('eComm'));
		beforeEach(inject(function(_GetProductDetailImageService_, _$httpBackend_) {
			GetProductDetailImageService = _GetProductDetailImageService_;
			$httpBackend = _$httpBackend_;
		}));

		it('should be registered', function() {
			expect(GetProductDetailImageService).not.toEqual(null);
		});

		describe('retrieveImages function', function() {
			it('should exist', function() {
				expect(GetProductDetailImageService.retrieveImages).not.toEqual(null);
			});

			it('should return an object', function() {
				var productID = 1005;
				GetProductDetailImageService.retrieveImages(productID)
					.then(function(images){
						expect(images).toEqual(jasmine.any(Object));
						expect(images.imagesUrl).toEqual(jasmine.any(Array));
						expect(images.imagesUrl.length > 0).toBeTruthy();
						expect(images.id).toBe(1005);
				});
			});

			it('should return same as httpBackend returned', function() {
				var allImages = {},
					productID = 1005;

				$httpBackend.when('GET', '/api/product/'+productID+'/images')
					.respond(allImages);

				GetProductDetailImageService.retrieveImages(productID)
					.then(function(images) {
						expect(images.imagesUrl.length).toBe(3);
						expect(images.imagesUrl.length).toBe(allImages.imagesUrl.length);
						expect(images).toEqual(allImages);
						expect(images.id).toEqual(allImages.id);
				});
			});
		});
	});
})();