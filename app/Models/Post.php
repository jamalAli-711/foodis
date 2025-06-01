<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
     use HasFactory;
    protected $fillable = [
        'title',
        'slug',
        'content',
        'featured_image',
        'user_id',
        'category_id',
        'status',
        'published_at',
        'excerpt',
        'meta_title',
        'meta_description'
    ];
 protected $casts = [
        'published_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(CategoryPost::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function views()
{
    return $this->hasMany(PostView::class);
}

   

    public function comments()
    {
        return $this->hasMany(CommentPost::class);
    }
}
