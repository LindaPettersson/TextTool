myApp.controller('summarytypesController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){
	
	//Back to choosefiles
	$scope.goToChoosefiles = function(){
		$location.path('/choosefiles');
	}
	
	
	//Display dummy data in table
	var data = [
		{date: "2018-05-08 15:14:25", name: "FileNotFound", amount: 3},
		{date: "2018-05-08 10:11:02", name: "IdSekretess", amount: 7},
		{date: "2018-05-07 17:00:25", name: "IdDataFinnsEj", amount: 1},
		{date: "2018-05-06 09:14:30", name: "IllegalArgument", amount: 9},
		];
	$scope.tableParams = new NgTableParams({}, { dataset: data});
}]);