var app= angular.module("portApp",[]);

app.controller("infoSectionCtrl", function($scope){


	$scope.sectionInfo = [

	{
	 headline: "Crazy Mad Libs ",
	 description: "Mad Libs game with original story and content by me",
	 img: "photo/beach.JPG"
	},
	{
		headline: "Theatre App",
		description: "Worked as a team to build a seating reservation app",
		img: "photo/beach.JPG"
	},
	{
		headline: "Temperature Converter",
		description: "Worked with JS to create a temperature converter",
		img: "photo/beach.JPG"
	},
	{
		headline: "Shopping Cart App",
		description: "Created a basic app to add  and take away things from shopping cart",
		img: "photo/beach.JPG"
	},
	{
		headline: "FizzBuzz Challenge",
		description: "Created and executed FizzBuzz challenge to strengthen JavaScript skills",
		img: "photo/beach.JPG"
	},
	{
		headline:"Lab 14",
		description: "Created a single page app with two views ",
		img: "photo/beach.JPG"
	},
	];
	});
app.directive("spdSectionInfo", function(){
	return {
		restrict: "EA",
		templateUrl: "partial.html"
	};
});