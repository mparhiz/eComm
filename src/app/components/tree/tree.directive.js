(function(){
	'use strict';
	angular
		.module('tree')
		.directive('flatTree',flatTree)
		.directive('node',node);

	function flatTree() {
		return {
			template: '<ul><node ng-repeat="node in treeData"></node></ul>',
			replace: true,
			transclude: true,
			restrict: 'E',
			scope: {
				treeData: '=',
				selectedNode: '&'
			}
		};
	}

	function node($compile, $document) {
		return { 
			restrict: 'E',
			templateUrl: 'app/components/tree/tree.html',
			link: function(scope, element) {
				scope.nodeClicked = function(node_) {
					$document.find('span').removeClass('selected');
					element.find("span").addClass("selected");
					if (!isLeaf(node_)) {
						if (node_.show) {
							var hideChildren = function(nd){
								angular.forEach(nd.children, function(c){
									c.show = false;
									if (!isLeaf(c)) {
										hideChildren(c);
									}
								});
							};
							hideChildren(node_);
							element.find("ul")[0].remove();
						} else {
							scope.showNode(node_);
						}
						node_.show = !node_.show;
						scope.selectedNode({node: node_});
					} else {
						scope.selectedNode()({node: node_});
					}
				};
				
				scope.classSwitcher = function(node_) {
					if (isLeaf(node_)) {
						return '';
					} else {
						if (node_.show) {
							return 'glyphicon glyphicon-minus'
						} else {
							return 'glyphicon glyphicon-plus'
						}	
					}
				};
								
				scope.showNode = function(node_){
					if (!isLeaf(node_)) {
						var childNode = $compile('<flat-tree tree-data="node.children" selected-node="selectedNode"></flat-tree>')(scope);
						element.append(childNode);
					}
				};

				var isLeaf = function(node_) {
					if (node_.children.length == 0) {
						return true;
					}
					return false;
				};				
			} 
		};
	}

})();