var app = angular.module("myApp", []);
app.controller("myController", [
	"$scope",
	function($scope) {
		$scope.pageTitle = "Play With AngularJS with fun";
		$scope.message = "with lots of examples.";
		$scope.book = {
			name: "Glass Palace",
			price: 4
		};
		$scope.books = [
			{
				name: "Glass Palace",
				price: 4,
				pubdate: new Date("2014", "04", "12"),
				likes: 0,
				dislikes: 0
			},
			{
				name: "Motor Cycle Diary",
				price: 3,
				pubdate: new Date("2013", "02", "12"),
				likes: 0,
				dislikes: 0
			},
			{
				name: "Midnight Childs",
				price: 4,
				pubdate: new Date("2011", "09", "12"),
				likes: 0,
				dislikes: 0
			},
			{
				name: "Namesake",
				price: 3,
				pubdate: new Date("2010", "05", "12"),
				likes: 0,
				dislikes: 0
			}
		];
		$scope.plusOne = function(index) {
			$scope.books[index].likes += 1;
		};
		$scope.minusOne = function(index) {
			$scope.books[index].dislikes += 1;
		};
	}
]);
