

angular.module("My-Blog", ["My-Blog.controllers", "ngRoute"])

	.config(function($routeProvider){
		$routeProvider
		.when("/",
		{
			templateUrl: "views/posts/bloghome.html",
			controller: "homecontroller",
			
		})
		.when("/blog",
		{

			templateUrl: "views/posts/blowview.html",
			controller: "mybloghomecontroller",
			

		})
    });
   angular.module("My-Blog.controllers", []);



