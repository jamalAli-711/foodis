const RenderRatingRecipe=({recipe})=>{
 return (
            <div key={recipe.id} className="rounded-lg border px-1 shadow-sm">
                <a href="#">
                    <img className="rounded-t-lg object-cover" src={'https://flowbite.com/docs/images/products/apple-watch.png'} alt={recipe.title} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h2 className="mb-2 text-xl font-bold tracking-tight">{recipe.title}</h2>
                    </a>
                    <p className="text-sm">{recipe.description}</p>
                </div>
            </div>
        );
}
export default RenderRatingRecipe;