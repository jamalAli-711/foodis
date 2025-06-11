<?php

namespace App\Http\Controllers;

use App\Models\CategoryPost;
use App\Models\TagPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
class Post_categorieController extends Controller
{
    //
    public function create(){
        $category_posts=CategoryPost::all();
            return Inertia::render('posts-categories/create',[
                'category_posts'=>$category_posts,
            ]);
    }
     public function store(Request $request)
    {
        // dd($request);
         CategoryPost::create([
            'name' => $request->name,
            'slug' => $request->slug??Str::slug($request->name)
        ]);
         return Inertia::render('posts-categories/create', [
            'success' => 'تم  الحفظ بنجاح!'
        ]);    

       
    }
}
