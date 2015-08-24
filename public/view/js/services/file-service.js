angular.module('fileService', ['ngResource'])
.factory('fileCRUD', function($resource, $q){
	
	var fileCRUD = {};
	var fileResource = $resource('/workspace/manager/public/file/:fileId', null, {
		update: {
			method: 'PUT'
		}
	});
		
	fileCRUD.get = function(fileId){
		return $q(function(resolve, reject){
			fileResource.get({fileId: fileId}, function(file){
				resolve(file);
			}, function(error){
				console.log(error);
				reject("Falha ao obter o arquivo!");
			});
		});
	};
	
	fileCRUD.create = function(file){
		return $q(function(resolve, reject){
			fileResource.save(file, function(){
				resolve("Sucesso ao salvar o arquivo!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar o arquivo!");
			});
		});
	};
	
	fileCRUD.retrieve = function(){
		return $q(function(resolve, reject){
			fileResource.query(function(fileCollection){
				resolve(fileCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar os arquivos!");
			});
		});
	};
	
	fileCRUD.update = function(file){
		return $q(function(resolve, reject){
			fileResource.update({fileId: file.id}, file, function(){
				resolve("Sucesso ao atualizar o arquivo!");
			}, function(error){
				console.log(error);
				reject("Falha ao atualizar o arquivo!");
			});
		});
	};
	
	fileCRUD.delete = function(file){
		return $q(function(resolve, reject){
			fileResource.delete({fileId: file.id}, function(){
				resolve("Sucesso ao remover o arquivo!");
			}, function(error){
				console.log(error);
				reject("Falha ao remover o arquivo!");
			});
		});
	};
	
	return fileCRUD;
}).factory('fileQuery', function($resource, $q){
	
	var fileQuery = {};
	var fileVersionResource = $resource('/workspace/manager/public/file/version/:versionId', null, {
		getFileByVersion: {
			method: 'GET',
			isArray: true
		}
	});
		
	fileQuery.getFileByVersion = function(versionId){
		return $q(function(resolve, reject){
			fileVersionResource.getFileByVersion({versionId: versionId}, function(fileCollection){
				resolve(fileCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar os arquivos para a versão!");
			});
		});
	};
	
	return fileQuery;
}).factory('fileUpload', function($http){
	
	var fileUpload = {};

	fileUpload.uploadFile = function(file, uploadUrl){
        var formData = new FormData();
        formData.append('file', file);
        $http.post(uploadUrl, formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
	
	return fileUpload;
});