angular.module('manager').controller('FileMergeController', function($scope, $routeParams, fileCRUD, fileUpload){

	var fileId = $routeParams.fileId;
	$scope.isCreate = !fileId;
	$scope.file = {};
	$scope.message = '';
	$scope.action = 'Store';
	
	if(fileId){
		$scope.action = 'Update';
		fileCRUD.get(fileId)
		.then(function(file){
			$scope.file = file;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	}
	
	$scope.merge = function(){

		if(fileId){
			fileCRUD.update($scope.file)
			.then(function(message){
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});
		}else{
			fileCRUD.create($scope.file)
			.then(function(message){
				uploadFile();
				$scope.file = {};
				$scope.message = message;
			})
			.catch(function(errorMessage){
				$scope.message = errorMessage;
			});			
		}
	};
	
	uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "/workspace/manager/public/file/upload";
        
        fileUpload.uploadFile(file, uploadUrl);
    };
});