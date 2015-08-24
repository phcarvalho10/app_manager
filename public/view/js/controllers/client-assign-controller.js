angular.module('manager').controller('ClientAssignController', function($scope, $routeParams, clientCRUD, applicationCRUD, versionQuery, applicationQuery, clientQuery){

	var clientId = $routeParams.clientId;
	$scope.client = {};
	$scope.message = '';
	
	if(clientId){
		clientCRUD.get(clientId)
		.then(function(client){
			$scope.client = client;
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
	
	$scope.applicationId = 0;
	$scope.versionApplicationCollection = [];
	
	$scope.getVersionByApplication = function(){
		versionQuery.getVersionByApplication($scope.applicationId)
		.then(function(versionCollection){
			$scope.versionApplicationCollection = versionCollection;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};

	$scope.currentApplicationCollection = [];
	
	$scope.getApplicationByClient = function(){

		applicationQuery.getApplicationByClient(clientId)
		.then(function(applicationCollection){
			$scope.currentApplicationCollection = applicationCollection;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
	
	$scope.getApplicationByClient();
	
	$scope.version = 0;
	
	$scope.assignApplication = function(){
	
		var clientApplication = {
				application_id: $scope.applicationId,
				client_id: clientId,
				version: $scope.version
			};
		
		clientQuery.assignApplication(clientApplication)
			.then(function(message){
				$scope.applicationId = 0;
				$scope.version = 0;
				$scope.getApplicationByClient();
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
		});
	};
});