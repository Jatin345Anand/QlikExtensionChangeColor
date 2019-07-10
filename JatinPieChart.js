
define( [
'text!./template.ng.html',
		'text!./custom.css'
        
    ],
    function ( ngTemplate,cssContent ) {
        'use strict';

        return {
		 
            definition: {},
            initialProperties: {},
            support: {snapshot: true},
            template: ngTemplate,
            controller: ['$scope', function ( $scope ) {
			    
				$scope.COLOR = 'azure';
                $scope.msg = 'Hello AngularJS';
				$scope.CCC = ['Color has been changed!!','Color has been changed!!','Color has been changed!!','Color has been changed!!'];
				$scope.CC =function(){
				 $scope.CC1 = 'red';
				 $scope.CC2 = 'pink';
				 $scope.CC3 = 'brown';
				 $scope.cc = 'Color has been changed!!';
				 if($scope.COLOR=='green'){
				 $scope.COLOR='yellow';
				 }
				 else{
				 $scope.COLOR='green';
				 }
				} ;
            }]
        };
    } );
