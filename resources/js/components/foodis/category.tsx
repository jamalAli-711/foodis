import { useState } from "react";

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
export default function Category({ recipes ,onCategory}) {
    
    const red = 'red';
    const [handilRecipe,setHandilRecipe]=useState(0);

    return (
        <>

            <div>
             <h1 className="max-md:hidden py-2 font-bold">Recipes</h1>
            <div>
            <div className="border-sidebar-border/70 dark:border-sidebar-border w-xs rounded-xl border px-1 max-md:hidden">
                
                {recipes.map((recipe) => (
                    <p
                    key={recipe.id} className="me-2 mb-2 w-full rounded-lg bg-gray-100  dark:bg-gray-700/30 py-0.5"
                    onClick={()=>onCategory(recipe)}
                    >
                        {recipe.name}
                    </p>
                ))}
            </div>
            </div>
            </div>
        </>
    );
}
