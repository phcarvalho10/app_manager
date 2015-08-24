angular.module('manager').controller('MainController', function($scope, oAuth2){
	
	$scope.user = {};
	$scope.message = '';
	
	$scope.authenticate = function(){
		$scope.user.client_id = '1';
		$scope.user.client_secret = 'secret';
		$scope.user.grant_type = 'password';
	
		oAuth2.authenticate($scope.user)
		.then(function(message){
			$scope.user.username = '';
			$scope.user.password = '';
			$scope.message = message;
		})
		.catch(function(errorMessage){
			$scope.message = errorMessage;
		});
	};
});