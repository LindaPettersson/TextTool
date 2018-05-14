var myApp = angular.module('myApp', ['ngRoute', 'ngTable']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
	$routeProvider.when('/choosefiles', {templateUrl: 'partials/choosefiles.html', controller: 'choosefilesController'});
	$routeProvider.when('/summarytypes', {templateUrl: 'partials/summarytypes.html', controller: 'summarytypesController'});
	$routeProvider.otherwise({redirectTo: '/home'});
	
	//remove hashtag from url
	//$locationProvider.html5Mode({enabled: true, requireBase: false});
	
	
}]);

