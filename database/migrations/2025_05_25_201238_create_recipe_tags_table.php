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
        //جدول وسوم الوصفات (Recipe_Tags)
        Schema::create('recipe_tags', function (Blueprint $table) {
            $table->id();
             $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
             $table->foreignId('tag_id')->constrained()->onDelete('cascade');
    $table->unique(['recipe_id', 'tag_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_tags');
    }
};
