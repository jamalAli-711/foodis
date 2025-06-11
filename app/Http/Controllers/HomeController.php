<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\CategoryPost;
use App\Models\Post;
use App\Models\Rating;
use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
 public function index(Request $request)
    {
      
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
        'posts' =>Post::all(),
        'tags' =>$tags,
            'categorysPosts' =>CategoryPost::all(),


]);


    }
 public function PostsCreate()
    {
        // dd(Rating::all());
      
            
    return Inertia::render('posts/create', [
    'categorysPosts' =>CategoryPost::all(),

]);


    }
 public function store()
    {
       dd(545);
      
            
    return Inertia::render('posts/create');


    }

}
