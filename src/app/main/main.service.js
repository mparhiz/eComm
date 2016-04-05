/* global _ */
(function() {
    'use strict';

    angular
        .module('main')
        .service('mainService', mainService)
        .service('imageCacheService', imageCacheService)
        .service('imageCacheServiceViaFileReader', imageCacheServiceViaFileReader)
        .service('translationKeysService', translationKeysService);

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
                },
                retriveCategories: function(){
                    return $http.get(URL_MAPPINGS.PRODUCTS_URL)
                        .then(function successCallback(response){
                            var categories = _.uniq(_.map(response.data, 'category'));
                            return categories;
                        });

                },
                retriveSubCategories: function(category_){
                    return $http.get(URL_MAPPINGS.PRODUCTS_URL)
                        .then(function successCallback(response){
                            var subcategories = _.uniq(_.map((_.filter(response.data, ['category', category_])), 'subCategory'));
                            return subcategories;
                        });                    
                }
            }
        }

        function imageCacheService($window, $http, $base64, $cacheFactory){
            var vm = this;
            vm.cache = $cacheFactory('imageCache1');
            return {
                base64EncodeImage: function(imageBinary){
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
                arrayBufferToBase64ViaBtoA: function( buffer ) {
                    var binary = '';
                    var bytes = new Uint8Array( buffer );
                    var len = bytes.byteLength;
                    for (var i = 0; i < len; i++) {
                        binary += String.fromCharCode( bytes[ i ] );
                    }
                    return $window.btoa( binary );
                },
                retriveImageFromUrl: function(imageUrl){
                    return $http.get(imageUrl, {responseType: "arraybuffer"})
                            .then(function successCallback(response){
                                return response.data;
                            });
                },
                arrayBufferToBase64: function(arrayBuffer) {
                    var base64    = ''
                    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
                    var bytes         = new Uint8Array(arrayBuffer)
                    var byteLength    = bytes.byteLength
                    var byteRemainder = byteLength % 3
                    var mainLength    = byteLength - byteRemainder
                    var a, b, c, d
                    var chunk

                    // Main loop deals with bytes in chunks of 3
                    for (var i = 0; i < mainLength; i = i + 3) {
                        // Combine the three bytes into a single integer
                        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

                        // Use bitmasks to extract 6-bit segments from the triplet
                        a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
                        b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
                        c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
                        d = chunk & 63               // 63       = 2^6 - 1

                        // Convert the raw binary segments to the appropriate ASCII encoding
                        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
                    }

                    // Deal with the remaining bytes and padding
                    if (byteRemainder == 1) {
                        chunk = bytes[mainLength]

                        a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

                        // Set the 4 least significant bits to zero
                        b = (chunk & 3)   << 4 // 3   = 2^2 - 1

                        base64 += encodings[a] + encodings[b] + '=='
                    } else if (byteRemainder == 2) {
                        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

                        a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
                        b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

                        // Set the 2 least significant bits to zero
                        c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

                        base64 += encodings[a] + encodings[b] + encodings[c] + '='
                    }
                    return base64
                }
            }
        }

        function imageCacheServiceViaFileReader($cacheFactory){
            var vm = this;
            vm.cache = $cacheFactory('imageCache');
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

        function translationKeysService($cacheFactory, $http, URL_MAPPINGS){
            var vm = this;
            vm.cache = $cacheFactory('translateCache');
            $http.get(URL_MAPPINGS.TRANSLATION_KEYS)
                .then(function successCallback(response){
                    angular.forEach(response.data, function(value, key){
                        vm.cache.put(key,value);
                    });
                });

            return {
                retriveTranslatedKey: function(_key){
                    var translatedKey = vm.cache.get(_key);
                    return (angular.isUndefined(translatedKey)) ? "no translate" : translatedKey;
                }
            }
        }
})();