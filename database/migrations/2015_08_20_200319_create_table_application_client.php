<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableApplicationClient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('application_client', function (Blueprint $table) {
            $table->integer('application_id');
            $table->foreign('application_id')->references('id')->on('applications')->onDelete('cascade');
            $table->integer('client_id');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->decimal('version');
            $table->unique(['application_id', 'client_id', 'version']);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('application_client');
    }
}
