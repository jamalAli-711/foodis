<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:posts',
            'content' => 'required|string',
            'category_id' => 'required|',
            'featured_image' => 'required|string',
            'status' => 'required|in:draft,published,archived',
            'published_at' => 'nullable|date',
            'excerpt' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'user_id' => 'required|',
        ]);

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('posts', 'public');
        }
        $validated['slug'] = $request->slug ?? Str::slug($request->title);

        Post::create($validated);
        return Inertia::render('posts/create', [
            'success' => 'تم إنشاء المنشور بنجاح!'
        ]);    }
    //
    public function show(Post $post)
{
    // dd(5);
    $post = Post::where('id', $post->id)->firstOrFail();

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
        // dd($ip );
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
         return Inertia::render('blog-show', [
     'post' =>$post,
]);

}
}
