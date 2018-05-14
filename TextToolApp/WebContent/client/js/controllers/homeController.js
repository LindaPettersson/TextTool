myApp.controller('homeController', ['$scope', '$location', function($scope, $location){
	//Go to login
	$scope.GoToLogin = function(){
		$location.path('/login');
	};
}]);