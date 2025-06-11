import { Head, usePage } from "@inertiajs/react";
import AppLayout from '@/layouts/app-layout';
import DOMPurify from 'dompurify';
import { useEffect } from 'react';

const breadcrumbs = [
  
];

export default function BlogShow() {
  const { props } = usePage();
  const { post } = props;

  // التحقق من وجود المدونة
  if (!post) {
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-red-500">
              المقال غير موجود
            </h1>
            <p className="mt-4 text-gray-600">
              تعذر تحميل المقال المطلوب. الرجاء المحاولة لاحقاً.
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  // تنظيف المحتوى
  const cleanHtml = DOMPurify.sanitize(post.content || '', {
    ALLOWED_TAGS: ['p', 'span', 'em', 'strong', 'h2', 'h3','h4','h5','table','tr','th','td','className', 'ul', 'ol', 'li', 'br', 'a', 'div', 'img'],
    ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'class', 'color']
  });

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={post.title || ''} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto ">
          {/* عنوان المقال */}
          <div className="mb-4 ">
            <h1 className="text-4xl font-bold  ">
              {post.title || ' '}
            </h1>
            {post.excerpt && (
              <p className="text-sm ">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* صورة المقال */}
          {/* {post.featured_image && (
            <img 
              src={post.featured_image} 
              alt={post.title || 'صورة المقال'}
              className="w-full h-auto rounded-xl mb-10 shadow-lg"
            />
          )} */}

          {/* محتوى المقال */}
          {post.content ? (
            <div 
              className="list"
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
            />
          ) : (
            <p className="text-center text-gray-500 py-8">
              لا يوجد محتوى متاح لهذا المقال
            </p>
          )}
        </div>
      </div>
    </AppLayout>
  );
}