<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name'];
	
	/**
	 * The applications that belong to the client.
	 */
	public function applications()
	{
		return $this->belongsToMany('App\Application');
	}
}
