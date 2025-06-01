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
if (Schema::hasTable('recipe_ingredients') && !Schema::hasTable('ingredient_recipe')) {
        Schema::rename('recipe_ingredients', 'ingredient_recipe');
    }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
if (Schema::hasTable('ingredient_recipe') && !Schema::hasTable('recipe_ingredients')) {
        Schema::rename('ingredient_recipe', 'recipe_ingredients');
    }    }
};
