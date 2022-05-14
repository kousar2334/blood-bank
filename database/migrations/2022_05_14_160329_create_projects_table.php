<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('purpose')->nullable();
            $table->text('locations')->nullable();
            $table->integer('donation_enabale')->default(0);
            $table->double('donation_target')->default(0);
            $table->double('donation_collection')->default(0);
            $table->text('donation_instruction')->nullable();
            $table->text('description')->nullable();
            $table->text('video_link')->nullable();
            $table->text('image')->nullable();
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('projects');
    }
}
