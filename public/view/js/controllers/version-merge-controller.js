angular.module('manager').controller('VersionMergeController', function($scope, $routeParams, versionCRUD, applicationCRUD){

	var versionId = $routeParams.versionId;
	$scope.version = { version: '1.0' };
	$scope.message = '';
	$scope.action = 'Store';
	
	if(versionId){
		$scope.action = 'Update';
		
		versionCRUD.get(versionId)
		.then(function(version){
			$scope.version = version;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	$scope.applicationCollection = [];
	
	applicationCRUD.retrieve()
	.then(function(applicationCollection){
		$scope.applicationCollection = applicationCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});
	
	$scope.merge = function(){

		if(versionId){
			versionCRUD.update($scope.version)
			.then(function(message){
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}else{
			versionCRUD.create($scope.version)
			.then(function(message){
				$scope.version = { version: '1.0' };
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}
	};
});