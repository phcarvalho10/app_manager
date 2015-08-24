<?php

namespace App;

use Illuminate\Support\Facades\Auth;

class Verifier
{
	public function verifyByDocumentation($username, $password)
	{
		if(Auth::validate(['email' => $username, 'password' => $password])){
        	$user = \App\User::where('email', $username)->first();
                        
			return $user->id;
		}else{
			return false;   
		}
	}
	
	public function verify($username, $password)
	{
		$credentials = [
				'email'    => $username,
				'password' => $password,
		];
	
		if (Auth::once($credentials)) {
			return Auth::user()->id;
		}
	
		return false;
	}
}