<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
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
