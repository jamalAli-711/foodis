import { useState } from 'react';
import FeaturedRecipe from './featured-recipe';
import RenderRatingRecipe from './render-rating-recipe';
import RenderRecipe from './render-recipe';
import { CategorysPageProps } from '@/types';





const Recipes = ({ recipes, categorys, ratings }: CategorysPageProps) => {
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
                                    {categoryRecipes.length > 1 && categoryRecipes.map((recipe) => <RenderRecipe recipe={recipe} key={recipe.id} />)}
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
                                <div className="mb-2" key={recipe.id}>
                                    <RenderRatingRecipe recipe={recipe} key={recipe.id} />
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
