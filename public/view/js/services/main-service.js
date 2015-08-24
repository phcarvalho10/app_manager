angular.module('mainService', ['ngResource'])
.factory('oAuth2', function($resource, $q){

	var oAuth2 = {};
	var authResource = $resource('/workspace/manager/public/main/authenticate', null, {
		authenticate: {
			method: 'POST'
		}
	});
	
	oAuth2.authenticate = function(user){
		return $q(function(resolve, reject){
			authResource.authenticate(user, function(){
				resolve("Sucesso ao se autententicar!");
			}, function(error){
				console.log(error);
				reject("Falha ao se autententicar!");
			});
		});
	};
	
	return oAuth2;
});