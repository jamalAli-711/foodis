import { useEffect, useState } from "react";

interface Recipe {
    id: number;
    title: string;
    description: string;
    featured_image: string;
    is_featured: boolean;
    category_id: number;
    height?: number;
    category: {
        name: string;
    };
}

interface Category {
    id: number;
    name: string;
    description: string;
    image?: string;
    icon?: string;
}
interface CategorysPosts {
    id: number;
    name: string;
   
}

interface CategorysPageProps {
    recipes: {
        data: Recipe[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    categorysPosts: CategorysPosts[];
}
export default function Category({ recipes ,setDataPosts,posts}) {
    
    const red = 'red';
    const [handilCategory,setHandilCategory]=useState();
    useEffect(()=>{
const filteredPost = posts.filter(post => post.category_id ===handilCategory);

setDataPosts(filteredPost);
// console.log("handilRecipe",setDataPosts(dataPosts));
    },[handilCategory])


  const onclikRecipe=(recipe)=>{

    
      if( handilCategory===recipe){
  return "bg-amber-400  ";
      }
      return ;
      
  }
    return (
        <>

            <div>
                                          <h1 className="py-2 font-bold">Recipes</h1>
            <div className="border-sidebar-border/70 dark:border-sidebar-border  rounded-xl border p-1 max-md:hidden">
                 <p
                     className={'me-2 mb-2  w-xs rounded-lg  border  1  py-0.5  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100  '+ onclikRecipe(0)}
                      onClick={()=>setHandilCategory(0)} 
               
                    >
                       All
                      
                      
                       

                    </p>
                {recipes.map((recipe) => (
                    <p
                    key={recipe.id}
                     className={'me-2 mb-2  w-xs rounded-lg  border  1  py-0.5  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100  '+ onclikRecipe(recipe.id)}
                      onClick={()=>setHandilCategory(recipe.id)} 
               
                    >
                        {recipe.name} 
                      
                      
                       

                    </p>
                ))}
            </div>
            </div>
        </>
    );
}
