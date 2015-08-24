<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['version_id', 'source', 'name'];
	
	/**
	 * Get the version that owns the file.
	 */
	public function version()
	{
		return $this->belongsTo('App\Version');
	}
}
