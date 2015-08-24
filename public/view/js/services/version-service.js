angular.module('versionService', ['ngResource'])
.factory('versionCRUD', function($resource, $q){
	
	var versionCRUD = {};
	var versionResource = $resource('/workspace/manager/public/version/:versionId', null, {
		update: {
			method: 'PUT'
		}
	});
		
	versionCRUD.get = function(versionId){
		return $q(function(resolve, reject){
			versionResource.get({versionId: versionId}, function(version){
				resolve(version);
			}, function(error){
				console.log(error);
				reject("Falha ao obter a versão!");
			});
		});
	};
	
	versionCRUD.create = function(version){
		return $q(function(resolve, reject){
			versionResource.save(version, function(){
				resolve("Sucesso ao salvar a versão!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar a versão!");
			});
		});
	};
	
	versionCRUD.retrieve = function(){
		return $q(function(resolve, reject){
			versionResource.query(function(versionCollection){
				resolve(versionCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar as versões!");
			});
		});
	};
	
	versionCRUD.update = function(version){
		return $q(function(resolve, reject){
			versionResource.update({versionId: version.id}, version, function(){
				resolve("Sucesso ao atualizar a versão!");
			}, function(error){
				console.log(error);
				reject("Falha ao atualizar a versão!");
			});
		});
	};
	
	versionCRUD.delete = function(version){
		return $q(function(resolve, reject){
			versionResource.delete({versionId: version.id}, function(){
				resolve("Sucesso ao remover a versão!");
			}, function(error){
				console.log(error);
				reject("Falha ao remover a versão!");
			});
		});
	};
	
	return versionCRUD;
}).factory('versionQuery', function($resource, $q){
	
	var versionQuery = {};
	var versionApplicationResource = $resource('/workspace/manager/public/version/application/:applicationId', null, {
		getVersionByApplication: {
			method: 'GET',
			isArray: true
		}
	});
		
	versionQuery.getVersionByApplication = function(applicationId){
		return $q(function(resolve, reject){
			versionApplicationResource.getVersionByApplication({applicationId: applicationId}, function(versionCollection){
				resolve(versionCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar as versões para a aplicação!");
			});
		});
	};
	
	var versionAssignResource = $resource('/workspace/manager/public/version/assign/:id', null, {
		assignFile: {
			method: 'PATCH'
		},
		isFileAssigned: {
			method: 'GET',
			isArray: false
		}
	});
	
	versionQuery.assignFile = function(versionId, fileId){
		return $q(function(resolve, reject){
			versionAssignResource.assignFile({
				versionId: versionId,
				fileId: fileId
			}, function(){
				resolve("Sucesso ao salvar o arquivo para a versão!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar o arquivo para a versão!");
			});
		});
	};
	
	versionQuery.isFileAssigned = function(versionId){
		return $q(function(resolve, reject){
			versionAssignResource.isFileAssigned({id: versionId}, function(result){
				resolve(result);
			}, function(error){
				console.log(error);
				reject("Falha ao verificar se a versão é atribuída!");
			});
		});
	};
	
	return versionQuery;
});