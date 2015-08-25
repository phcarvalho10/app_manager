<!DOCTYPE html>
<html ng-app="manager">
	<head>
		<meta charset="ISO-8859-1">
		<title>Manager</title>
        <!-- CSS Files -->
		<link rel="stylesheet" href="view/css/bootstrap.min.css">
		<link rel="stylesheet" href="view/css/bootstrap-theme.min.css">
        
        <!-- AngularJS Files -->
		<script type="text/javascript" src="view/js/core/angular.min.js"></script>
		<script type="text/javascript" src="view/js/core/angular-route.min.js"></script>
		<script type="text/javascript" src="view/js/core/angular-resource.min.js"></script>
        
        <!-- Source - AngularJS - Main -->
		<script type="text/javascript" src="view/js/main.js"></script>
        
        <!-- Source - AngularJS - Controllers -->
        <script type="text/javascript" src="view/js/controllers/main-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/client-index-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/client-merge-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/client-assign-controller.js"></script>
 		<script type="text/javascript" src="view/js/controllers/application-index-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/application-merge-controller.js"></script>
        <script type="text/javascript" src="view/js/controllers/version-index-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/version-merge-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/version-assign-controller.js"></script>
        <script type="text/javascript" src="view/js/controllers/file-index-controller.js"></script>
		<script type="text/javascript" src="view/js/controllers/file-merge-controller.js"></script>
        
        <!-- Source - AngularJS - Services -->
		<script type="text/javascript" src="view/js/services/main-service.js"></script>
		<script type="text/javascript" src="view/js/services/client-service.js"></script>
		<script type="text/javascript" src="view/js/services/application-service.js"></script>
		<script type="text/javascript" src="view/js/services/version-service.js"></script>
		<script type="text/javascript" src="view/js/services/file-service.js"></script>
        
        <!-- Source - AngularJS - Directives -->
		<script type="text/javascript" src="view/js/directives/file-directives.js"></script>
	</head>
	<body>
		<div class="jumbotron">
			<h1 class="text-center">Manager</h1>
		</div>
		<ul class="nav nav-pills">
			<li role="navigation"><a href="#/main">Main</a></li>
			<li role="navigation"><a href="#/client">Clients</a></li>
			<li role="navigation"><a href="#/application">Applications</a></li>
			<li role="navigation"><a href="#/version">Versions</a></li>
			<li role="navigation"><a href="#/file">Files</a></li>
		</ul>
		<div class="container">
			<ng-view></ng-view>
		</div>
	</body>
</html>