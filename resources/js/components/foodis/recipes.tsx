import { useState } from 'react';
import FeaturedRecipe from './featured-recipe';
import RenderRatingRecipe from './render-rating-recipe';
import RenderRecipe from './render-recipe';

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
}
interface Rating {
    id: number;
    rating: number;
    recipe_id: number;
}

interface RecipesPageProps {
    recipes: {
        data: Recipe[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    categorys: Category[];
    ratings: Rating[];
}

const Recipes = ({ recipes, categorys, ratings }: RecipesPageProps) => {
    const [myRatings, setmyRatings] = useState(recipes);
    return (
        <>
            <div className="w-full">
                {categorys.map((category) => {
                    const featuredRecipe = myRatings.data.find((recipe) => recipe.category_id === category.id && recipe.is_featured);
                    const categoryRecipes = myRatings.data.filter(
                        (recipe) => recipe.category_id === category.id && recipe.height !== 1 && (!featuredRecipe || recipe.id !== featuredRecipe.id),
                    );
                    const gridColumns = categoryRecipes.length === 4 ? 2 : categoryRecipes.length === 3 ? 3 : categoryRecipes.length === 2 ? 2 : 1;
                    const shouldShowCategory = recipes.data.some((recipe) => recipe.category_id === category.id && recipe.height !== 0);

                    if (!shouldShowCategory) return null;

                    return (
                        <section key={category.id} className="mb-2">
                            <div>
                                {featuredRecipe && (
                                    <div>
                                        <FeaturedRecipe featuredRecipe={featuredRecipe} />
                                    </div>
                                )}

                                <div
                                    className={`grid grid-cols-1 gap-4 ${categoryRecipes.length >= 3 ? 'sm:grid-cols-3' : categoryRecipes.length === 3 ? 'max-md:grid-cols-3' : categoryRecipes.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} ${categoryRecipes.length === 2 ? 'max-md:grid-cols-2' : categoryRecipes.length > 2 ? 'max-md:grid-cols-3' : 'max-md:grid-cols-1'} lg:grid-cols-${gridColumns}`}
                                >
                                    {categoryRecipes.length > 1 && categoryRecipes.map((recipe) => <RenderRecipe recipe={recipe} />)}
                                </div>
                            </div>
                        </section>
                    );
                })}
                <div className={`grid grid-cols-3 gap-4 max-md:grid-cols-2`}>
                    {recipes.data.map((recipe) => {
                        const categoryRecipes = recipes.data.filter((recip) => recip.category_id === recipe.category_id);
                        if (categoryRecipes.length === 1) {
                            return (
                                <div className="mb-2">
                                    <RenderRatingRecipe recipe={recipe} />
                                </div>
                            );
                        }

                        return null; // Important: return null for items that don't meet the condition
                    })}
                </div>
            </div>
        </>
    );
};

export default Recipes;
