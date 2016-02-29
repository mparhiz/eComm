(function() {
    'use strict';

    angular
        .module('main')
        .service('mainService', mainService)
        .service('imageCacheService1', imageCacheService1)
        .service('retriveData', retriveData)
        .service('imageCacheService', imageCacheService);

        function mainService($http, URL_MAPPINGS) {
            return {
                retriveSpecialProductsData: function(specials_){
                    var _url_;

                    switch (specials_) {
                        case 'hotoffers':
                            _url_ = URL_MAPPINGS.HOTOFFERS_URL;
                            break;
                        case 'newproducts':
                            _url_ = URL_MAPPINGS.NEWPRODUCTS_URL;
                            break;
                        case 'toppicks':
                            _url_ = URL_MAPPINGS.TOPPICKS_URL;
                            break;
                        case 'clearances':
                            _url_ = URL_MAPPINGS.CLEARANCES_URL;
                            break;
                        case 'all':
                            _url_ = URL_MAPPINGS.PRODUCTS_URL;
                            break;
                    }  

                    return $http.get(_url_)
                        .then(function successCallback(response){
                            return response.data;
                        });
                }
            }
        }

        function imageCacheService1($http, $base64, $cacheFactory){
            var vm = this;
            vm.cache = $cacheFactory('imageCache');
            return {
                base64EncodeImage: function(imageBinary){
                    //return $base64.encode(imageBinary);
                    return $base64.encode(unescape(encodeURIComponent(imageBinary)));

                },
                base64DecodeImage: function(imageText){
                    return decodeURIComponent(escape($base64.decode(imageText)));
                },
                getImageFromCache: function(imageUrl){
                    return vm.cache.get(imageUrl);
                },
                putImageToCache: function(imageUrl, imageText){
                    vm.cache.put(imageUrl, imageText);
                },
                retriveImageFromUrl: function(imageUrl){
                    return $http.get(imageUrl)
                            .then(function successCallback(response){
                                return response.data;
                            });
                }
            }
        }

        function imageCacheService($cacheFactory){
            var vm = this;
            vm.cache = $cacheFactory('imageCache2');
            return {
                getImageFromCache: function(imageUrl){
                    return vm.cache.get(imageUrl);
                },
                putImageToCache: function(imageUrl, imageText){
                    vm.cache.put(imageUrl, imageText);
                },
                convertFileToDataURLviaFileReader: function(imageUrl, callback){
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';

                    xhr.onload = function() {
                        var reader  = new FileReader();
                        reader.onloadend = function () {
                            callback(reader.result);
                        }
                        reader.readAsDataURL(xhr.response);
                    };

                    xhr.open('GET', imageUrl);
                    xhr.send();
                }
            }
        }

        function retriveData($http){
            return {
                retriveFromUrl: function(url_){
                    return $http.get(url_)
                        .then(function successCallback(response){
                            return response.data;
                        });
                }
            }
        }
})();
