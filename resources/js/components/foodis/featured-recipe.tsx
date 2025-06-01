import { Link } from "lucide-react";
import RenderRecipe from "./render-recipe";

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
const FeaturedRecipe=({featuredRecipe})=>{
     if (!featuredRecipe?.is_featured) return null;

        return (
            <>

                <div className="mb-2 list ">
                    

  
                {/* <Link path="/render-recipe"  className="flex flex-col rounded-lg border shadow-sm max-md:flex-row md:flex-row"  elment={<RenderRecipe recipe={featuredRecipe}  />}> */}
                    <a href="#" className="flex flex-col rounded-lg border shadow-sm max-md:flex-row md:flex-row">
                        <img
                            className="h-96 w-full object-cover max-md:h-46 max-md:w-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="https://flowbite.com/docs/images/blog/image-4.jpg"
                            alt={featuredRecipe.title}
                        />

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            {featuredRecipe.is_featured && <p className="w-32 bg-amber-400 text-center font-normal">featured recipe</p>}
                            <h1 className="mb-2 text-3xl font-bold tracking-tight">{featuredRecipe.category.name}</h1>
                            <p className="mb-3 font-normal">{featuredRecipe.description}</p>
                        </div>
                     </a>
                    {/* </Link> */}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{featuredRecipe.title}</h2>
            </>
        );
};
export default FeaturedRecipe;