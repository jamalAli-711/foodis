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
        //جدول خطوات التحضير (Steps)
        Schema::create('steps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
            $table->integer('step_number');
            $table->text('instruction');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

 
//recipe_id: معرف الوصفة

// step_number: رقم الخطوة (لترتيب الخطوات)

// instruction: نص الخطوة

// image: صورة توضيحية للخطوة
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('steps');
    }
};
