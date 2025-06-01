const RenderRecipe=({recipe})=>{
 return (
            <div key={recipe.id} className="mb-2 rounded-lg border shadow-sm">
                <a href="#">
                    <img
                        className="w-full rounded-t-lg object-cover"
                        src={'https://flowbite.com/docs/images/products/apple-watch.png'}
                        alt={recipe.title}
                    />
                </a>
                <div className="px-1">
                    <a href="#">
                        <h2 className="text-xl font-bold tracking-tight">{recipe.title}</h2>
                    </a>
                    <p className="mb-2 justify-between overflow-hidden text-sm text-nowrap">{recipe.description}</p>
                </div>
            </div>
        );
}
export default RenderRecipe;
