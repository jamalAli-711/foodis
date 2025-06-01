import { Head, usePage } from "@inertiajs/react";
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
   {
       title: 'dashboard',
       href: '/dashboard',
   },
   {
       title: 'Home',
       href: '/',
   },
];
export default function BlogShow() {
    const { props } = usePage();
    const {  blog } = props;
    console.log("blog",blog);
    return (
           
 <AppLayout>
        
                    <Head title={blog.slug} />

    {/* <!-- Blog post with featured image --> */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
        {/* <!-- Blog post header --> */}
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">{blog.title}
</h1>
            <p className=" text-sm">هل شعرتَ يومًا أن الطبخ يجب أن يكون ممتعًا، لكنه ينتهي بالإحباط؟ لستَ وحدك. من المدهش أن 80% من طهاة المنازل يتخلون عن وصفاتهم الجديدة بعد خطأ واحد. ولكن ماذا لو كان الخبز الخالي من الغلوتين بسيطًا وسريعًا ولذيذًا في كل مرة؟

</p>
        </div>

        {/* <!-- Featured image --> */}
        <img src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/a8dda9d7-b051-4287-a348-2a4f69c83c27/126540b3-6190-4263-be8c-5393e8fe110e.jpg"alt="Featured image" className="w-full h-auto mb-8"/>

        {/* <!-- Blog post content --> */}
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p> {blog.content}</p>
               
        </div>
    </div>
</div>
</AppLayout>
          

    );

}
 