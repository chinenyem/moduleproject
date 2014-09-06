angular.module("My-Blog.controllers")
  
  .controller("mybloghomecontroller", function ($scope, $location) {
   
  	$scope.posts=[];


  	//add post
    $scope.postsMessage = function(post) {
    $scope.posts.shift({title:post.title, content:post.content, date:new Date()
    });
    console.log({title:post.title});
    $scope.newPost = '';
  };




  //deletepost, The indexOf() method returns the first index at which a given element can be found in the array
  $scope.deletePost= function(post){
  	$scope.posts.splice($scope.posts.indexOf(post), 1);
  	console.log('delete');
  };

	$scope.goHomepage = function () {
    $location.path("/#/");
  };

  // $scope.editpost=function(post){
  // 	$scope.posts
  // }

  });


   
 
