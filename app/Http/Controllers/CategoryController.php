<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        // هنا يمكنك إضافة منطق لجلب الفئات من قاعدة البيانات
        // على سبيل المثال:
        $categories = Category::all();

        // ثم تمريرها إلى العرض
        return response($categories, 200);
    }
}
