var myApp = angular.module('myapp',[]);

myApp.controller('TotalController', ['$scope', function($scope) {
  $scope.change = function(){
  	var x = $scope.time.split(":");
  	var y = parseInt(x[0]) * 60;
	var z = parseInt(x[1]);
	var a = (y + z) / 26.2 ;
	var b = Math.floor(a);
	var c = Math.floor(60 * (a - b));
	$scope.timeMin = b;
	$scope.timeSec = c;
	$scope.calc = true;
  }
}]);

myApp.controller('SplitController', ['$scope', function($scope) {
  $scope.change = function(){
  	var x = $scope.split.split(":");
  	var y = parseInt(x[0]);
	var z = parseInt(x[1]) / 60;
	var a = (y + z) * 26.2 / 60;
	var b = Math.floor(a);
	var c = Math.floor(60 * (a - b));
	$scope.splitMin = b;
	$scope.splitSec = c;
	$scope.calc = true;
  }
}]);

