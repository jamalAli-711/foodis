<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('home');
// })->name('home');
Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('/posts/create',[HomeController::class,'PostsCreate'])->name('PostsCreate');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::get('/categories',[CategoryController::class,'index'])->name('categories');

Route::get('/blogs/{blog:slug}', function (Blog $blog) {

    return Inertia::render('blog-show', [
    'blog' =>$blog,
]);})->name('blogs.show');


Route::middleware(['auth', 'verified'])->group(function () {
});
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');
  Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
  Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
