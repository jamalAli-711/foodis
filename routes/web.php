<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Post_categorieController;
use App\Http\Controllers\PostController;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('about', function () {
    return Inertia::render('about');
})->name('about');
Route::get('services', function () {
    return Inertia::render('services');
})->name('services');
Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('/posts/create',[HomeController::class,'PostsCreate'])->name('posts.create');
Route::post('/posts/store',[HomeController::class,'store'])->name('posts.store');
Route::get('/posts/categories',[Post_categorieController::class,'create'])->name('posts.categories');
Route::post('/posts/categories-store',[Post_categorieController::class,'store'])->name('posts.categories-store');
Route::get('/posts/create',[HomeController::class,'PostsCreate'])->name('PostsCreate');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::get('/{post:slug}', [PostController::class, 'show'])->name('blogs.show');
Route::get('/categories',[CategoryController::class,'index'])->name('categories');



Route::middleware(['auth', 'verified'])->group(function () {
});
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');
  Route::get('/log/in', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
  Route::get('/r/register', [RegisteredUserController::class, 'create'])
        ->name('register');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
