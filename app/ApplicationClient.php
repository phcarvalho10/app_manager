<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApplicationClient extends Model
{
	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'application_client';
	
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['application_id', 'client_id', 'version'];
}
