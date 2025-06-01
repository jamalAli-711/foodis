<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
         use HasFactory;

 protected $fillable = [
        'title', 'slug', 'description', 'prep_time', 'cook_time',
        'servings', 'difficulty', 'user_id', 'category_id',
        'featured_image', 'is_featured', 'is_approved'
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
  public function ingredients()
{
    return $this->belongsToMany(Ingredient::class)
        ->withPivot('quantity', 'unit', 'notes');
}
    
    public function steps()
    {
        return $this->hasMany(Step::class);
    }
    
    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }
    
   public function tags()
{
    return $this->belongsToMany(Tag::class, 'recipe_tags');
}
    
    public function galleries()
    {
  return $this->hasMany(RecipeGallery::class);    }
    
    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }}
