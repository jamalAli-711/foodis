<?php

namespace Database\Factories;

use App\Models\Recipe;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       $title = $this->faker->sentence(3);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(3),
            'prep_time' => $this->faker->numberBetween(5, 60),
            'cook_time' => $this->faker->numberBetween(10, 120),
            'servings' => $this->faker->numberBetween(1, 10),
            'difficulty' => $this->faker->randomElement(['easy', 'medium', 'hard']),
            'user_id' => \App\Models\User::factory(),
            'category_id' => \App\Models\Category::factory(),
            'featured_image' =>function() {
    $tempFile = tempnam(sys_get_temp_dir(), 'food');
    copy('https://picsum.photos/800/600', $tempFile);
    return 'recipes/'.basename($tempFile).'.jpg';
},
            'is_featured' => $this->faker->boolean(20),
            'is_approved' => true,
        ];
    }
    public function configure()
{
    return $this->afterCreating(function (Recipe $recipe) {
          RecipeGalleryFactory::new()   ->count(2)
            ->create(['recipe_id' => $recipe->id]);
       
   });
}
}
