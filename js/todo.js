var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', function($scope) {

	$scope.todos = [
		{'title': 'Buy Milk', 'done': false },
		{'title': 'Learn Angular.js', 'done': false },
		{'title': 'Go to Bed', 'done': false },
		{'title': 'Change Music', 'done': true },
	];

	$scope.add = function() {
		if($scope.newTitle) {
			var todo = {'title': $scope.newTitle, 'done': false};
			$scope.todos.push(todo);
			$scope.newTitle = '';
		}
	}

	$scope.remove = function(todo) {
		var index = $scope.todos.indexOf(todo);
		if(index > -1) {
			$scope.todos.splice(index, 1);
		}
	}

});
