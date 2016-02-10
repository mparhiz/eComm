(function() {
	'use strict';

	angular
		.module('main')
		.constant("URL_MAPPINGS", {
      'NAVBAR_URL': 'api/main/navbar',
      'CAROUSEL_URL': 'api/main/carousel',
      'HOTOFFERS_URL': 'api/main/hotoffers',
      'TOPPICKS_URL': 'api/main/toppicks',
      'NEWPRODUCTS_URL': 'api/main/newproducts',
      'CLEARANCES_URL': 'api/main/clearances',
      'TABSINFO_URL': 'api/main/special/tabs'
    });

})();
