angular.module('manager').controller('ClientIndexController', function($scope, clientCRUD){
	
	$scope.clientCollection = [];
	$scope.message = '';
	
	clientCRUD.retrieve()
	.then(function(clientCollection){
		$scope.clientCollection = clientCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});

	$scope.delete = function(client){
		clientCRUD.delete(client)
		.then(function(message){
			var clientIndex = $scope.clientCollection.indexOf(client);
			$scope.clientCollection.splice(clientIndex, 1);
			$scope.message = message;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
});