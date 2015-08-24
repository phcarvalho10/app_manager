<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\File;
use DB;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
		$fileCollection = DB::select('SELECT DISTINCT f.id AS id, f.name AS name, v.version AS version, a.name AS application_name  FROM files AS f LEFT JOIN versions AS v ON (f.version_id = v.id) LEFT JOIN applications AS a ON (a.id = v.application_id)');
    
    	return response()->json($fileCollection, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
    	File::create($request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
    	return response()->json(File::find($id), 200);
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
        $file = File::find($id);
        $file->version_id = $request->input('version_id');
        $file->source = $request->input('source');
        $file->name = $request->input('name');
        $file->save();  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
    	File::destroy($id);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function getFileByVersion($versionId)
    {
    	$fileCollection = DB::select('SELECT * FROM files AS f INNER JOIN versions AS v ON (f.version_id = v.id AND v.id = :versionId)', ['versionId' => $versionId]);
    
    	return response()->json($fileCollection, 200);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function upload(Request $request)
    {
    	$file = $request->file('file');
    	$file->move(storage_path(), $request->file('name'));
    	//$file->move('C:\Users\Paulo\Desktop\new', $request->file('name'));
    }
}
