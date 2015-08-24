angular.module('manager').controller('ApplicationMergeController', function($scope, $routeParams, applicationCRUD){

	var applicationId = $routeParams.applicationId;
	
	$scope.application = {};
	$scope.message = '';
	$scope.action = 'Store';
	
	if(applicationId){
		$scope.action = 'Update';
		applicationCRUD.get(applicationId)
		.then(function(application){
			$scope.application = application;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	$scope.merge = function(){

		if(applicationId){
			applicationCRUD.update($scope.application)
			.then(function(message){
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}else{
			applicationCRUD.create($scope.application)
			.then(function(message){
				$scope.application = {};
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}
	};
	
});