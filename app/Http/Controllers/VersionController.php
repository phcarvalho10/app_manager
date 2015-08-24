<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Version;
use App\File;
use DB;

class VersionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(Version::with('application')->get(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
    	Version::create($request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
    	return response()->json(Version::find($id), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $version = Version::find($id);
        $version->application_id = $request->input('application_id');
        $version->version = $request->input('version');
        $version->is_released = $request->input('is_released');
        $version->save();  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
    	Version::destroy($id);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function getVersionByApplication($applicationId)
    {
    	$versionCollection = DB::select('SELECT * FROM versions AS v INNER JOIN applications AS a ON (v.application_id = a.id AND a.id = :applicationId) WHERE v.is_released = true', ['applicationId' => $applicationId]);
    	 
    	return response()->json($versionCollection, 200);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function assignFile(Request $request)
    {
    	$file = File::find($request->input('fileId'));

    	if($file->version_id == NULL){
    		$file->version_id = $request->input('versionId');
    		$file->save();
    	}else{
    		abort(500, 'Already exists a file assigned with this version!');
    	}
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function isFileAssigned($id)
    {
    	$fileCollection = DB::select('SELECT * FROM files AS f INNER JOIN versions AS v ON (f.version_id = v.id AND v.id = :versionId)', ['versionId' => $id]);
    	
    	return !empty($fileCollection) ? "true" : "";
    }
}
