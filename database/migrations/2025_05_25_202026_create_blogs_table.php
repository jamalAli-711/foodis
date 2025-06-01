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
        //11. جدول المقالات (Blogs) 
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt');
            $table->longText('content');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('featured_image');
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }
// title: عنوان المقال

// slug: رابط SEO-friendly للمقال

// excerpt: ملخص المقال

// content: محتوى المقال الكامل

// user_id: معرف الكاتب

// featured_image: الصورة الرئيسية للمقال

// is_published: هل المقال منشور؟

// published_at: تاريخ النشر
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
