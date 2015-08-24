angular.module('applicationService', ['ngResource'])
.factory('applicationCRUD', function($resource, $q){
	
	var applicationCRUD = {};
	var applicationResource = $resource('/workspace/manager/public/application/:applicationId', null, {
		update: {
			method: 'PUT'
		}
	});
		
	applicationCRUD.get = function(applicationId){
		return $q(function(resolve, reject){
			applicationResource.get({applicationId: applicationId}, function(application){
				resolve(application);
			}, function(error){
				console.log(error);
				reject("Falha ao obter a aplicação!");
			});
		});
	};
	
	applicationCRUD.create = function(application){
		return $q(function(resolve, reject){
			applicationResource.save(application, function(){
				resolve("Sucesso ao salvar a aplicação!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar a aplicação!");
			});
		});
	};
	
	applicationCRUD.retrieve = function(){
		return $q(function(resolve, reject){
			applicationResource.query(function(applicationCollection){
				resolve(applicationCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar as aplicações!");
			});
		});
	};
	
	applicationCRUD.update = function(application){
		return $q(function(resolve, reject){
			applicationResource.update({applicationId: application.id}, application, function(){
				resolve("Sucesso ao atualizar a aplicação!");
			}, function(error){
				console.log(error);
				reject("Falha ao atualizar a aplicação!");
			});
		});
	};
	
	applicationCRUD.delete = function(application){
		return $q(function(resolve, reject){
			applicationResource.delete({applicationId: application.id}, function(){
				resolve("Sucesso ao remover a aplicação!");
			}, function(error){
				console.log(error);
				reject("Falha ao remover a aplicação!");
			});
		});
	};
	
	return applicationCRUD;
}).factory('applicationQuery', function($resource, $q){
	
	var applicationQuery = {};
	var applicationClientResource = $resource('/workspace/manager/public/application/client/:clientId', null, {
		getApplicationByClient: {
			method: 'GET',
			isArray: true
		}
	});
		
	applicationQuery.getApplicationByClient = function(clientId){
		return $q(function(resolve, reject){
			applicationClientResource.getApplicationByClient({clientId: clientId}, function(applicationCollection){
				resolve(applicationCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar as aplicações para o cliente!");
			});
		});
	};
	
	return applicationQuery;
});