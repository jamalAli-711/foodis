<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:posts',
            'content' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'featured_image' => 'nullable|image|max:2048',
            'status' => 'required|in:draft,published,archived',
            'published_at' => 'nullable|date',
            'excerpt' => 'nullable|string|max:300',
            'meta_title' => 'nullable|string|max:60',
            'meta_description' => 'nullable|string|max:160',
            'user_id' => 'required|exists:users,id',
        ]);

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('posts', 'public');
        }

        Post::create($validated);
        return Inertia::render('posts/create', [
            'success' => 'تم إنشاء المنشور بنجاح!'
        ]);    }
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
