<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
	return view('index');
});


//Route::group(['middleware' => 'oauth'], function(){
	Route::get('application/{id}', 'ApplicationController@edit');
	Route::get('application/client/{clientId}', 'ApplicationController@getApplicationByClient');
	Route::resource('application', 'ApplicationController',
	                ['only' => ['index', 'store', 'update', 'destroy']]);
	
	Route::get('version/assign/{id}', 'VersionController@isFileAssigned');
	Route::patch('version/assign/', 'VersionController@assignFile');
	Route::get('version/{id}', 'VersionController@edit');
	Route::get('version/application/{applicationId}', 'VersionController@getVersionByApplication');
	Route::resource('version', 'VersionController',
	                ['only' => ['index', 'store', 'update', 'destroy']]);
		
	Route::get('file/{id}', 'FileController@edit');
	Route::get('file/version/{versionId}', 'FileController@getFileByVersion');
	Route::post('file/upload', 'FileController@upload');
	Route::resource('file', 'FileController',
	                ['only' => ['index', 'store', 'update', 'destroy']]);
		
	Route::get('client/{id}', 'ClientController@edit');
	Route::post('client/assign', 'ClientController@assignApplication');
	Route::resource('client', 'ClientController',
	                ['only' => ['index', 'store', 'update', 'destroy']]);
//});