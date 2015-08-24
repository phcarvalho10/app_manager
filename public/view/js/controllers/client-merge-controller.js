angular.module('manager').controller('ClientMergeController', function($scope, $routeParams, clientCRUD){

	var clientId = $routeParams.clientId;
	$scope.client = {};
	$scope.message = '';
	$scope.action = 'Store';
	
	if(clientId){
		$scope.action = 'Update';
		clientCRUD.get(clientId)
		.then(function(client){
			$scope.client = client;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	$scope.merge = function(){

		if(clientId){
			clientCRUD.update($scope.client)
			.then(function(message){
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}else{
			clientCRUD.create($scope.client)
			.then(function(message){
				$scope.client = {};
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}
	};
	
});