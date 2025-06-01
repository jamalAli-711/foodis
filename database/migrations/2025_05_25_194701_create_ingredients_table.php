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
        // جدول المكونات (Ingredients)
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
                 $table->string('name')->unique()->comment('اسم المكون');
                 $table->string('unit')->default('unit')->comment('وحدة القياس الافتراضية للمكون');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingredients');
    }
};
