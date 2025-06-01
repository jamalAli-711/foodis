<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryPost extends Model
{
     protected $fillable = ['name', 'slug'];

    public function Posts()
    {
        return $this->hasMany(Post::class);
    }
    
}
