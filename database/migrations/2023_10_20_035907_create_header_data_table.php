<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('header_data', function (Blueprint $table) {
            $table->id();
            $table->string('site_address');
            $table->string('site_email');
            $table->string('upcoming_news');
            $table->text('social_links');
            $table->string('site_logo');
            $table->text('site_menu');
            $table->string('site_contact');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('header_data');
    }
};
