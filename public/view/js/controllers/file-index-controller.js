angular.module('manager').controller('FileIndexController', function($scope, fileCRUD){
	
	$scope.fileCollection = [];
	$scope.message = '';
	
	fileCRUD.retrieve()
	.then(function(fileCollection){
		$scope.fileCollection = fileCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});

	$scope.delete = function(file){
		fileCRUD.delete(file)
		.then(function(message){
			var fileIndex = $scope.fileCollection.indexOf(file);
			$scope.fileCollection.splice(fileIndex, 1);
			$scope.message = message;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
});