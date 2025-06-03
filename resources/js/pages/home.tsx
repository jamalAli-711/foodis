import BlogsAll from '@/components/foodis/blogs-all';
import Category from '@/components/foodis/category';
import Recipes from '@/components/foodis/recipes';
import Tags from '@/components/foodis/tags';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Home() {
    

    const { props } = usePage();
    const { recipes, categorys, ratings, blogs_all, tags } = props;
    const [recipesFood, setRecipesFood] = useState(recipes);
    const topRef = useRef();
    console.log('blog', blogs_all);
    const onTag = (tag) => {
        console.log('onTag', tag.recipes);
        setRecipesFood({
            data: tag.recipes,
            links: [], // يمكنك تعديل هذا حسب احتياجاتك
        });
        scrollToTop();
    };
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // console.log('recipesFood',recipesFood);
    const onCategory = (recipe) => {
        return console.log('onCategory', recipe);
    };

    return (
 <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Home" />
            <div className="w-full" ref={topRef}>
                <h5 className="text-2xl tracking-tight">Your passion for food starts here!</h5>

                <a href="#" className="flex flex-col max-md:flex-row md:flex-row">
                    <div className="flex flex-col justify-between px-1 py-4">
                        <h4 className="text-1xl"> Best food recipes with the foodie v network </h4>
                    </div>
                </a>
            </div>
            <>
            {recipes && (
                <div className="flex h-full gap-4 rounded-xl p-1 max-md:flex-col min-sm:flex-row">
                    <Category recipes={recipes} onCategory={onCategory} />
                    <Recipes recipes={recipesFood} categorys={categorys} ratings={ratings} />
                </div>
            )}

           
               <div>
                    <h4 className="text-3xl font-bold"> Latest Blogs </h4>
                    {blogs_all.map((blog) => (
                        <BlogsAll blog={blog} key={blog.id} />
                    ))}
              
            </div>
          
</>
            <Tags tags={tags} onTag={onTag} />
        </AppLayout>
    );
}
