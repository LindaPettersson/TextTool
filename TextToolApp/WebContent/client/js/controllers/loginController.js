myApp.controller('loginController', ['$scope', '$location', function($scope, $location){
	//Go to choosefiles
	$scope.login = function(){
		$location.path('/choosefiles');
	};
}]);