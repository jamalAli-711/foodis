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
export default function Home({ auth = { user: null }}) {


    const { props } = usePage();
    const { recipes, categorys, ratings, posts, tags,categorysPosts } = props;
    const [recipesFood, setRecipesFood] = useState(recipes);
    const [valueSearch, setValueSearch] = useState('');
    const [dataPosts, setDataPosts] = useState(posts);
    const [dataPostsError, setDataPostsError] = useState(0);
    const [filteredPosts, setFilteredPosts] = useState();
        const [handilRecipe,setHandilCategory]=useState();



  useEffect(() => {

    // تصفية المقالات بناءً على نص البحث
    const filteredPost = posts.filter(post => 
      post.title.toLowerCase().includes(valueSearch.toLowerCase()) ||
      post.meta_title.toLowerCase().includes(valueSearch.toLowerCase()) ||
      (post.content && post.content.toLowerCase().includes(valueSearch.toLowerCase()))
    );
    if(filteredPost){
        // setFilteredPosts(filteredPost);

        setDataPosts(filteredPost);
        // setDataPostsError(1);
    }
    else{
        return (<div>
            kjdfjl
        </div>)
    }
  
    // console.log('Search results:', filteredPost);
  }, [valueSearch,posts]); // يعتمد على valueSearch و posts
 

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
   
console.log("auth.user ",auth.user );
    return (
      
 <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Home" />
                
            
    
                <header>
                    <Header topRef={topRef}   onChange={(e) => setValueSearch(e.target.value)} />
 
                </header>
            
                
            
    
            
            
     <>
            {categorysPosts && (
                
                <div className="flex h-full gap-4 rounded-xl p-1 max-md:flex-col min-sm:flex-row">

                    <Category recipes={categorysPosts} setDataPosts={setDataPosts} posts={posts}/>
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
