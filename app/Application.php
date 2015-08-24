<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name'];
	
	/**
	 * Get the versions for the application.
	 */
	public function versions()
	{
		return $this->hasMany('App\Version');
	}
	
	/**
	 * The clients that belong to the application.
	 */
	public function clients()
	{
		return $this->belongsToMany('App\Client');
	}
}
