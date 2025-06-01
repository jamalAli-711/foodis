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
        //جدول مكونات الوصفة (Recipe_Ingredients)
   Schema::create('ingredient_recipe', function (Blueprint $table) {
    $table->id();
    $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
    $table->foreignId('ingredient_id')->constrained()->onDelete('cascade');
    $table->decimal('quantity', 8, 3);
    $table->string('unit')->nullable();
    $table->text('notes')->nullable();
    $table->timestamps();
    
    $table->unique(['recipe_id', 'ingredient_id']);
});

    }

    // الحقول:

// recipe_id: معرف الوصفة

// ingredient_id: معرف المكون

// quantity: الكمية المطلوبة

// unit: وحدة القياس (يمكن تجاوز الوحدة الافتراضية)

// notes: ملاحظات إضافية

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_ingredients');
    }
};








// ____________________/
//  $table->foreignId('user_id')->constrained()->onDelete('cascade');
//     $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
//     $table->integer('rating')->between(1, 5);
//     $table->text('comment')->nullable();

// user_id: معرف المستخدم الذي قام بالتقييم

// recipe_id: معرف الوصفة

// rating: التقييم من 1 إلى 5

// comment: تعليق المستخدم

//_____________________________________

//     $table->foreignId('user_id')->constrained()->onDelete('cascade');
//     $table->foreignId('recipe_id')->constrained()->onDelete('cascade');
//     $table->timestamps();
    
//     $table->unique(['user_id', 'recipe_id']);
// });
// الحقول:

// user_id: معرف المستخدم

// recipe_id: معرف الوصفة المفضلة

