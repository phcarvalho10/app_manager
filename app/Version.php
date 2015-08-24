<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Version extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['application_id', 'label', 'version', 'is_released'];
	
	/**
	 * Get the application that owns the version.
	 */
	public function application()
	{
		return $this->belongsTo('App\Application');
	}
	
	/**
	 * Get the files for the version.
	 */
	public function files()
	{
		return $this->hasMany('App\File');
	}
}
