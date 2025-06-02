import { useState } from "react";


export default function Category({ recipes ,onCategory}: CategorysPageProps) {
    
    const red = 'red';
    const [handilRecipe,setHandilRecipe]=useState(0);
    return (
        <>
            <div className="border-sidebar-border/70 dark:border-sidebar-border w-xs rounded-xl border px-1 max-md:hidden">
                <h1 className="py-2 font-bold">Recipes</h1>
                
                {recipes.data.map((recipe) => (
                    <p
                    key={recipe.id} className="me-2 mb-2 w-full rounded-lg bg-gray-100 py-0.5 dark:bg-gray-700/30"
                    onClick={()=>onCategory(recipe)}
                    >
                        {recipe.title}
                    </p>
                ))}
            </div>
        </>
    );
}
