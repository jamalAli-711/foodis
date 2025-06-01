<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Rating;
use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
 public function index()
    {
        // dd(Rating::all());
       $recipes= Recipe::with(['category', 'ingredients', 'steps', 'tags','ratings'])
            ->latest()
            ->paginate(50);
       $tags= Tag::with(['recipes'])
            ->latest()
            ->paginate(100);
            
    return Inertia::render('home', [
    'recipes' =>$recipes,
    'categorys' =>Category::all(),
        'ratings' =>Rating::all(),
        'blogs_all' =>Blog::all(),
        'tags' =>$tags,

]);


    }
 public function PostsCreate()
    {
        // dd(Rating::all());
      
            
    return Inertia::render('posts/create');


    }

}
