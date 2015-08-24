angular.module('manager').controller('ApplicationIndexController', function($scope, applicationCRUD){
	
	$scope.applicationCollection = [];
	$scope.message = '';
	
	applicationCRUD.retrieve()
	.then(function(applicationCollection){
		$scope.applicationCollection = applicationCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});

	$scope.delete = function(application){
		applicationCRUD.delete(application)
		.then(function(message){
			var applicationIndex = $scope.applicationCollection.indexOf(application);
			$scope.applicationCollection.splice(applicationIndex, 1);
			$scope.message = message;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
});