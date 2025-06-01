<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RecipeGallery>
 */
class RecipeGalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
        protected $model = \App\Models\RecipeGallery::class;

    public function definition(): array
    {
      
       
               return [
        'image_path' => 'gallery/image-'.$this->faker->unique()->numberBetween(1, 1000).'.jpg',
        'caption' => $this->faker->optional()->sentence(),
    ];

        
    }
}
