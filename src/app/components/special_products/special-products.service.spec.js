(function() {
	'use strict';

	describe('SpecialProductsService service', function() {
		var SpecialProductsService,
			$httpBackend;

		beforeEach(module('eComm'));
		beforeEach(inject(function(_SpecialProductsService_, _$httpBackend_) {
			SpecialProductsService = _SpecialProductsService_;
			$httpBackend = _$httpBackend_;
		}));

		it('should be registered', function() {
			expect(SpecialProductsService).not.toEqual(null);
		});

		describe('retrieveTabsInfo function', function() {
			it('should exist', function() {
				expect(SpecialProductsService.retrieveTabsInfo).not.toEqual(null);
			});

			it('should return array of object', function() {
				SpecialProductsService.retrieveTabsInfo()
					.then(function(tabs){
						expect(tabs).toEqual(jasmine.any(Array));
						expect(tabs[0]).toEqual(jasmine.any(Object));
						expect(tabs.length > 0).toBeTruthy();
						expect(tabs[1].tabName).toEqual('newproducts');
					});
			});

			it('should return same as httpBackend returned', function() {
				var allTabs = [];
				$httpBackend.when('GET', 'api/main/special/tabs')
					.respond(allTabs);

				SpecialProductsService.retrieveTabsInfo()
					.then(function(tabs) {
						expect(tabs.length).toBe(4);
						expect(tabs.length).toBe(allTabs.length);
						expect(tabs).toEqual(allTabs);
						expect(tabs[1].tabName).toEqual(allTabs[1].tabName);
					});
			});
		});
	});
})();