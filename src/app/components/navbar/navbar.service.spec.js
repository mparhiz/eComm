(function() {
  'use strict';

  describe('NavbarService service', function() {
    var NavbarService,
      $httpBackend;

    beforeEach(module('eComm'));
    beforeEach(inject(function(_NavbarService_, _$httpBackend_) {
      NavbarService = _NavbarService_;
      $httpBackend = _$httpBackend_;
    }));

    it('should be registered', function() {
      expect(NavbarService).not.toEqual(null);
    });

    describe('retrieveNavbarItems function', function() {
      it('should exist', function() {
        expect(NavbarService.retrieveNavbarItems).not.toEqual(null);
      });

      it('should return array of object', function() {
        NavbarService.retrieveNavbarItems()
          .then(function(navbars){
            expect(navbars).toEqual(jasmine.any(Array));
            expect(navbars[0]).toEqual(jasmine.any(Object));
            expect(navbars.length > 0).toBeTruthy();
            expect(navbars[1].title).toEqual('NAV_PRODUCTS');
          });
      });
  
      it('should return same as httpBackend returned', function() {
        var allNavbars = [];
        $httpBackend.when('GET', 'api/main/navbar')
          .respond(allNavbars);

        NavbarService.retrieveNavbarItems()
          .then(function(navbars) {
            expect(navbars.length).toBe(4);
            expect(navbars.length).toBe(allNavbars.length);
            expect(navbars).toEqual(allNavbars);
            expect(navbars[1].title).toEqual(allNavbars[1].title);
          });
      });
    });
  });
})();