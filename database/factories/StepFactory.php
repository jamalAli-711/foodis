<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Step>
 */
class StepFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'recipe_id' => \App\Models\Recipe::factory(),
            'step_number' => $this->faker->numberBetween(1, 10),
            'instruction' => $this->faker->paragraph(),
            'image' => $this->faker->optional(0.3)->imageUrl(600, 400, 'food'),
        ];
    }
}
