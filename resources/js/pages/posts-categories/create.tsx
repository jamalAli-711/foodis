import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import CreateCategory from '@/components/foodis/category-posts/create-category';
import ShowCategory from '@/components/foodis/category-posts/show-category';

const CreateCategoryPosts = ({status,category_posts}) => {
    console.log("category_posts",category_posts);
  
    return (
        <AppLayout>
            <Head title="Category" />
            <div className='grid grid-cols-2 max-md:grid-cols-1 py-4  gap-4'>
                 <CreateCategory  status={status}  />
            <ShowCategory category_posts={category_posts} />

            </div>
           
           
           
        </AppLayout>
    );
};
export default CreateCategoryPosts;
