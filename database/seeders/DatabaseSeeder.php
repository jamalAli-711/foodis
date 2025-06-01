<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Database\Factories\BlogFactory;
use Database\Factories\CategoryFactory;
use Database\Factories\IngredientFactory;
use Database\Factories\RatingFactory;
use Database\Factories\RecipeFactory;
use Database\Factories\RecipeGalleryFactory;
use Database\Factories\StepFactory;
use Database\Factories\TagFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
     
        \App\Models\User::factory(10)->create();
        
        // إنشاء مستخدم مدير
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'jamalA@example.com',
            'password' => 'admin',
        ]);
  
      \Database\Factories\CategoryFactory::new()->count(5)->create();
      
        // إنشاء المكونات
       \Database\Factories\IngredientFactory::new()->count(30)->create();
        
        // إنشاء الوصفات مع علاقاتها
    \App\Models\Recipe::factory(20)
    ->hasSteps(5)
    ->hasRatings(3)
    ->has(\App\Models\RecipeGallery::factory()->count(2), 'galleries') // استخدم 'galleries' هنا
    ->hasAttached(
        \App\Models\Ingredient::factory()->count(5),
        ['quantity' => rand(1, 5), 'unit' => 'كوب']
    )
    ->hasAttached(
        \App\Models\Tag::factory()->count(3)
    )
    ->create();
        
        // إنشاء المقالات
        BlogFactory::new()->count(5)->create();
        
        // إنشاء مفضلات للمستخدمين
        \App\Models\User::all()->each(function ($user) {
    $user->favorites()->createMany(
         \App\Models\Recipe::inRandomOrder()
            ->limit(5)
            ->get()
            ->map(function ($recipe) {
                return ['recipe_id' => $recipe->id];
            })
            ->toArray()
    );
});
    }
}
