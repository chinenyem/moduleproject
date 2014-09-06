angular.module("My-Blog.controllers", [])

.controller("homecontroller", function($scope, $location){
	
  $scope.goToBlog = function () {
    $location.path("/blog");
  };
});

