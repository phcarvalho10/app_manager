angular.module('manager').controller('VersionAssignController', function($scope, $routeParams, versionCRUD, fileCRUD, fileQuery, versionQuery, applicationCRUD){

	var versionId = $routeParams.versionId;
	$scope.version = {};
	$scope.message = '';
	
	if(versionId){
		versionCRUD.get(versionId)
		.then(function(version){
			$scope.version = version;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	var applicationId = $routeParams.applicationId;
	
	$scope.application = {};
	
	if(applicationId){
		applicationCRUD.get(applicationId)
		.then(function(application){
			$scope.application = application;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	$scope.fileCollection = [];
	
	fileCRUD.retrieve()
	.then(function(fileCollection){
		$scope.fileCollection = fileCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});
	
	$scope.currentFileCollection = [];
	
	$scope.getFileByVersion = function(){

		fileQuery.getFileByVersion(versionId)
		.then(function(fileCollection){
			$scope.currentFileCollection = fileCollection;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
	
	$scope.getFileByVersion();
	
	$scope.fileId = 0;
	
	$scope.assignFile = function(){
		
		if($scope.fileId){
			versionQuery.assignFile(versionId, $scope.fileId)
			.then(function(message){
				//$scope.applicationId = 0;
				//$scope.version = 0;
				$scope.getFileByVersion();
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}
	};
});