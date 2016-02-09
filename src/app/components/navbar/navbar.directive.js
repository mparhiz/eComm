(function() {
  'use strict';

  angular
    .module('navbar')
    .directive('uiScrollfix',uiScrollfix)
    .directive('uiScrollfixTarget', uiScrollfixTarget);

  function uiScrollfix($window, $document){
      return {
        require: '^?uiScrollfixTarget',
        link: function(scope, elm, attrs, uiScrollfixTarget) {
          var top = elm[0].offsetTop,
              $target = uiScrollfixTarget && uiScrollfixTarget.$element || angular.element($window);

          if (!attrs.uiScrollfix) {
            attrs.uiScrollfix = top;
          //} else if (typeof(attrs.uiScrollfix) === 'string') {
          } else if (angular.isString(attrs.uiScrollfix)) {
            if (attrs.uiScrollfix.charAt(0) === '-') {
              attrs.uiScrollfix = top - parseFloat(attrs.uiScrollfix.substr(1));
            } else if (attrs.uiScrollfix.charAt(0) === '+') {
              attrs.uiScrollfix = top + parseFloat(attrs.uiScrollfix.substr(1));
            }
          }

          function onScroll() {
            // if pageYOffset is defined use it, otherwise use other crap for IE
            var offset;
            if (angular.isDefined($window.pageYOffset)) {
              offset = $window.pageYOffset;
            } else {
              //var iebody = (document.compatMode && document.compatMode !== 'BackCompat') ? document.documentElement : document.body;
              var iebody = ($document.compatMode && $document.compatMode !== 'BackCompat') ? $document.documentElement : $document.body;
              offset = iebody.scrollTop;
            }
            if (!elm.hasClass('ui-scrollfix') && offset > attrs.uiScrollfix) {
              elm.addClass('ui-scrollfix');
            } else if (elm.hasClass('ui-scrollfix') && offset < attrs.uiScrollfix) {
              elm.removeClass('ui-scrollfix');
            }
          }

          $target.on('scroll', onScroll);

          scope.$on('$destroy', function() {
            $target.off('scroll', onScroll);
          });
        }
      };
    }

    function uiScrollfixTarget() {
      return {
        controller: ['$element', function($element) {
          this.$element = $element;
        }]
      };
    }

})();
