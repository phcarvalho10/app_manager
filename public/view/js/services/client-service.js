angular.module('clientService', ['ngResource'])
.factory('clientCRUD', function($resource, $q){
	
	var clientCRUD = {};
	var clientResource = $resource('/manager/public/client/:clientId', null, {
		update: {
			method: 'PUT'
		}
	});
		
	clientCRUD.get = function(clientId){
		return $q(function(resolve, reject){
			clientResource.get({clientId: clientId}, function(client){
				resolve(client);
			}, function(error){
				console.log(error);
				reject("Falha ao obter o cliente!");
			});
		});
	};
	
	clientCRUD.create = function(client){
		return $q(function(resolve, reject){
			clientResource.save(client, function(){
				resolve("Sucesso ao salvar o cliente!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar o cliente!");
			});
		});
	};
	
	clientCRUD.retrieve = function(){
		return $q(function(resolve, reject){
			clientResource.query(function(clientCollection){
				resolve(clientCollection);
			}, function(error){
				console.log(error);
				reject("Falha ao listar os clientes!");
			});
		});
	};
	
	clientCRUD.update = function(client){
		return $q(function(resolve, reject){
			clientResource.update({clientId: client.id}, client, function(){
				resolve("Sucesso ao atualizar o cliente!");
			}, function(error){
				console.log(error);
				reject("Falha ao atualizar o cliente!");
			});
		});
	};
	
	clientCRUD.delete = function(client){
		return $q(function(resolve, reject){
			clientResource.delete({clientId: client.id}, function(){
				resolve("Sucesso ao remover o cliente!");
			}, function(error){
				console.log(error);
				reject("Falha ao remover o cliente!");
			});
		});
	};
	
	return clientCRUD;
}).factory('clientQuery', function($resource, $q){
	
	var clientQuery = {};
	var clientAssignResource = $resource('/manager/public/client/assign', null, {
		assignApplication: {
			method: 'POST'
		}
	});
		
	clientQuery.assignApplication = function(clientApplication){
		return $q(function(resolve, reject){
			clientAssignResource.assignApplication(clientApplication, function(){
				resolve("Sucesso ao salvar a aplicação para o cliente!");
			}, function(error){
				console.log(error);
				reject("Falha ao salvar a aplicação para o cliente!");
			});
		});
	};
	
	return clientQuery;
});