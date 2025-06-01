<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Blog extends Model
{
    use HasFactory;
 protected $fillable = [
        'title', 'slug', 'excerpt', 'content', 
        'user_id', 'featured_image', 'is_published', 'published_at'
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
