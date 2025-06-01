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
        //جدول الوصفات (Recipes)
        Schema::create('recipes', function (Blueprint $table) {
             $table->id();
             $table->string('title')->comment('عنوان الوصفة');
             $table->string('slug')->unique()->comment('رابط SEO-friendly للوصفة');
             $table->longText('description')->comment('وصف مختصر للوصفة');
             $table->integer('prep_time')->comment('وقت التحضير بالدقائق');
             $table->integer('cook_time')->comment('وقت الطهي بالدقائق');
             $table->integer('servings')->comment('عدد الحصص');
             $table->enum('difficulty', ['easy', 'medium', 'hard'])->default('medium')->comment(' مستوى الصعوبة');
             $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('معرف المستخدم الذي أضاف الوصفة');
             $table->foreignId('category_id')->constrained()->onDelete('cascade')->comment('الفئة التي تنتمي إليها الوصفة');
             $table->string('featured_image')->comment('الصورة الرئيسية للوصفة');
             $table->boolean('is_featured')->default(false)->comment('هل الوصفة مميزة؟');
             $table->boolean('is_approved')->default(false)->comment('هل تمت الموافقة على الوصفة؟
');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};
