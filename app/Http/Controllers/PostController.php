<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function store(Request $request)
    {
        dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:posts',
            'content' => 'required|string',
        ]);

        Post::create($validated);

        return Inertia::render('posts/create')->with('success', 'Post created successfully!');
    }
    //
    public function show($slug)
{
    $post = Post::where('slug', $slug)->firstOrFail();

    $viewExists = false;

    if (auth()->check()) {
        // للمستخدمين المسجلين
        $viewExists = $post->views()->where('user_id', auth()->id())->exists();
        if (!$viewExists) {
            $post->views()->create(['user_id' => auth()->id()]);
            $post->increment('views');
        }
    } else {
        // للزوار
        $ip = request()->ip();
        $userAgent = request()->userAgent();
        $viewExists = $post->views()
            ->where('ip_address', $ip)
            ->where('user_agent', $userAgent)
            ->exists();

        if (!$viewExists) {
            $post->views()->create([
                'ip_address' => $ip,
                'user_agent' => $userAgent
            ]);
            $post->increment('views');
        }
    }

    return view('posts.show', compact('post'));
}
}
