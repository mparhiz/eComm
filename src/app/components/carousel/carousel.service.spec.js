(function() {
  'use strict';

  describe('CarouselService service', function() {
    var CarouselService,
      $httpBackend;

    beforeEach(module('eComm'));
    beforeEach(inject(function(_CarouselService_, _$httpBackend_) {
      CarouselService = _CarouselService_;
      $httpBackend = _$httpBackend_;
    }));

    it('should be registered', function() {
      expect(CarouselService).not.toEqual(null);
    });

    describe('retrieveCarouselSlides function', function() {
      it('should exist', function() {
        expect(CarouselService.retrieveCarouselSlides).not.toEqual(null);
      });

      it('should return array of object', function() {
        CarouselService.retrieveCarouselSlides()
          .then(function(slides){
            expect(slides).toEqual(jasmine.any(Array));
            expect(slides[0]).toEqual(jasmine.any(Object));
            expect(slides.length > 0).toBeTruthy();
            expect(slides[1].caption).toEqual('CAROUSEL_TITLE_2');
          });
      });
  
      it('should return same as httpBackend returned', function() {
        var allSlides = [];
        $httpBackend.when('GET', 'api/main/carousel')
          .respond(allSlides);

        CarouselService.retrieveCarouselSlides()
          .then(function(slides) {
            expect(slides.length).toBe(4);
            expect(slides.length).toBe(allSlides.length);
            expect(slides).toEqual(allSlides);
            expect(slides[1].caption).toEqual(allSlides[1].caption);
          });
      });
    });
  });
})();