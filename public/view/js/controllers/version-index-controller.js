angular.module('manager').controller('VersionIndexController', function($scope, versionCRUD, versionQuery, fileQuery){
	
	$scope.versionCollection = [];
	$scope.message = '';
	
	versionCRUD.retrieve()
	.then(function(versionCollection){
		$scope.versionCollection = versionCollection;
	})
	.catch(function(errorMessage){
		$scope.message = errorMessage;
	});

	$scope.delete = function(version){
		versionCRUD.delete(version)
		.then(function(message){
			var versionIndex = $scope.versionCollection.indexOf(version);
			$scope.versionCollection.splice(versionIndex, 1);
			$scope.message = message;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
	
	$scope.release = function(version){
		var currentFileCollection = [];

		fileQuery.getFileByVersion(version.id)
		.then(function(fileCollection){
			currentFileCollection = fileCollection;
			console.log(currentFileCollection);
			
			if(currentFileCollection != null && currentFileCollection.length > 0){
				version.is_released = true;
				versionCRUD.update(version)
				.then(function(message){
					$scope.message = message;
				})
				.catch(function(errorMessage){
					$scope.message = errorMessage;
				});			
			}else{
				$scope.message = "A versão não possui nenhum arquivo atribuido!";
			}
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
});