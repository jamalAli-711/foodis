<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ingredient>
 */
class IngredientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

    static $count = 0;
    $ingredients = [
        'دقيق القمح', 'سكر ناعم', 'زيت زيتون', 'ملح بحري', 'فلفل أسود',
        'بيض كبير', 'حليب كامل', 'زبدة غير مملحة', 'فانيليا سائلة', 'بيكنج باودر'
        // أضف بقية المكونات...
    ];
    
    return [
        'name' => $ingredients[$count++] ?? $this->faker->unique()->word,
        'unit' => $this->faker->randomElement(['كوب', 'ملعقة', 'جرام', 'ملليلتر', 'حبة'])
    ];
    }
}
