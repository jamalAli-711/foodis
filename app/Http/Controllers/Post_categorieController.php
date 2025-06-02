<?php

namespace App\Http\Controllers;

use App\Models\CategoryPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
class Post_categorieController extends Controller
{
    //
    public function create(){
            return Inertia::render('posts-categories/create');
    }
     public function store(Request $request)
    {
        // dd(44);

        return CategoryPost::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name)
        ]);
    }
}
