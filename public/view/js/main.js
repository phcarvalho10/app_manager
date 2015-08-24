angular.module('manager', ['ngRoute', 'clientService', 'applicationService', 'versionService', 'fileService', 'mainService', 'directives'])
.config(function($routeProvider){
		
	$routeProvider.otherwise({
		redirectTo: '/main',
	});
	
	$routeProvider.when('/main', {
		templateUrl: 'view/html/main.html',
		controller: 'MainController'
	});
		
	$routeProvider.when('/client', {
		templateUrl: 'view/html/client-index.html',
		controller: 'ClientIndexController'
	});
		
	$routeProvider.when('/client/create', {
		templateUrl: 'view/html/client-merge.html',
		controller: 'ClientMergeController'
	});
	
	$routeProvider.when('/client/edit/:clientId', {
		templateUrl: 'view/html/client-merge.html',
		controller: 'ClientMergeController'
	});
	
	$routeProvider.when('/client/assign/:clientId', {
		templateUrl: 'view/html/client-assign.html',
		controller: 'ClientAssignController'
	});
	
	$routeProvider.when('/application', {
		templateUrl: 'view/html/application-index.html',
		controller: 'ApplicationIndexController'
	});
		
	$routeProvider.when('/application/create', {
		templateUrl: 'view/html/application-merge.html',
		controller: 'ApplicationMergeController'
	});
	
	$routeProvider.when('/application/edit/:applicationId', {
		templateUrl: 'view/html/application-merge.html',
		controller: 'ApplicationMergeController'
	});
	
	$routeProvider.when('/version', {
		templateUrl: 'view/html/version-index.html',
		controller: 'VersionIndexController'
	});
		
	$routeProvider.when('/version/create', {
		templateUrl: 'view/html/version-merge.html',
		controller: 'VersionMergeController'
	});
	
	$routeProvider.when('/version/edit/:versionId', {
		templateUrl: 'view/html/version-merge.html',
		controller: 'VersionMergeController'
	});
	
	$routeProvider.when('/version/assign/:versionId/application/:applicationId', {
		templateUrl: 'view/html/version-assign.html',
		controller: 'VersionAssignController'
	});
	
	$routeProvider.when('/file', {
		templateUrl: 'view/html/file-index.html',
		controller: 'FileIndexController'
	});
		
	$routeProvider.when('/file/create', {
		templateUrl: 'view/html/file-merge.html',
		controller: 'FileMergeController'
	});
	
	$routeProvider.when('/file/edit/:fileId', {
		templateUrl: 'view/html/file-merge.html',
		controller: 'FileMergeController'
	});
});