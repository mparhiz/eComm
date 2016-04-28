'use strict'
describe('CarouselService' ,function() {
  var CarouselService,
    $rootScope,
    $httpBackend;

  beforeEach(module('carousel'));

  beforeEach(inject(function(_CarouselService_, _$rootScope_, _$httpBackend_) {
    CarouselService = _CarouselService_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  describe('retrieveOddSlides()', function() {
    var allSides;
    beforeEach(function() {
      allSlides = [
        {title: 'sample1'},
        {title: 'slide2'},
        {title: 'sample3'},
        {title: 'sample3'},
        {title: 'sample3'}
      ];

      $httpBackend.when('GET', 'api/main/carousel')
        .respond(allSlides);
    });

    afterEach(function() {
      $httpBackend.flush();
      $rootScope.$digest();
    });
/*
    it('should return a single slide if 3 slides are provided.', function() {
      CarouselService.retrieveOddSlides()
        .then(function(oddSlides) {
          expect(oddSlides.length).toBe(2);
        });
    });
/*
    it('should return the 2nd slide if 3 slides are provided.', function() {
      CarouselService.retrieveOddSlides()
        .then(function(oddSlides) {
          expect(oddSlides[0].title).toBe(allSlides[1].title);
          expect(oddSlides[1].title).toBe(allSlides[3].title);
        });
    });
*/
  });
});
