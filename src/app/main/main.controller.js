(function(){
	'use strict'

	angular
		.module('main')
		.controller('MainController', MainController);

	function MainController(translationKeysService){
		translationKeysService.putTranslatesIntoCache();
	}
})();