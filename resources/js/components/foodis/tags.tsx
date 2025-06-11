

const Tags=({tags ,onTag})=>{
    return (
    <>
    <div className=" m-4 px-6 py-4  border rounded-lg  ">
        <header>
            <h4 className="text-2xl font-bold px-2 mb-4 ">Trending Recipes</h4>
        </header>
    <div >
        <div className="grid grid-cols-5 w-full gap-4" >
            {tags.data.map((tag)=>(
                <div  key={tag.id} className="">
   <span className="p-2   rounded-lg dark:bg-black/30 bg-gray-100  hover:bg-gray-300   "onClick={()=>onTag(tag)}>
          {tag.name} 
          </span>
                </div>
            ))}
        </div>
        
    </div>
    </div>
   
    </>
    )
}
export default Tags;