var myApp = angular.module('myApp', ['ngRoute', 'ngTable']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/home', {templateUrl: 'client/partials/home.html', controller: 'homeController'});
	$routeProvider.when('/login', {templateUrl: 'client/partials/login.html', controller: 'loginController'});
	$routeProvider.when('/choosefiles', {templateUrl: 'client/partials/choosefiles.html', controller: 'choosefilesController'});
	$routeProvider.when('/summarytypes', {templateUrl: 'client/partials/summarytypes.html', controller: 'summarytypesController'});
	$routeProvider.otherwise({redirectTo: '/home'});
	
	//remove hashtag from url
	//$locationProvider.html5Mode({enabled: true, requireBase: false});
	
	
}]);

