<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        
        factory(\App\User::class)->create([
        	'name' => 'admin',
        	'email' => 'admin@admin.com',
        	'password' => bcrypt('admin'),
        	'remember_token' => 'admin_token',
        ]);

        Model::reguard();
    }
}
