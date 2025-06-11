import BlogsAll from '@/components/foodis/blogs-all';
import Category from '@/components/foodis/category';
import Header from '@/components/foodis/header';
import Recipes from '@/components/foodis/recipes';
import Tags from '@/components/foodis/tags';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Input } from '@headlessui/react';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
      
    },
];
export default function Home() {
    

    const { props } = usePage();
    const { recipes, categorys, ratings, posts, tags,categorysPosts } = props;
    const [recipesFood, setRecipesFood] = useState(recipes);
    const [valueSearch, setValueSearch] = useState('');
    const [dataPosts, setDataPosts] = useState(posts);
    const topRef = useRef();
    // console.log('categorysPosts', categorysPosts);
    const onTag = (tag) => {
        // console.log('onTag', tag.recipes);
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
    useEffect(()=>{
             console.log('search valueSearch',valueSearch);
    },[valueSearch])
  

    return (
 <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Home" />
                <header>
                    <Header topRef={topRef} />
 <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <Input type="search" 
        // onChange={}
                                        
        onChange={(e) => setValueSearch(e.target.value)}


        id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  
         dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." 
          />

    </div>
                </header>
            
            <>
            {categorysPosts && (
                
                <div className="flex h-full gap-4 rounded-xl p-1 max-md:flex-col min-sm:flex-row">

                    <Category recipes={categorysPosts} onCategory={onCategory} />
                     <section className="" >
                    {/* <h4 className="text-3xl px-4 font-bold"> Latest Blogs </h4> */}
                    {dataPosts.map((post) => (
                        <BlogsAll post={post} key={post.id} />
                    ))}
            </section>
                    {/* <Recipes recipes={recipesFood} categorys={categorys} ratings={ratings} /> */}
                </div>
            )}

           
              
              
          
</>
            <Tags tags={tags} onTag={onTag} />
        </AppLayout>
    );
}
