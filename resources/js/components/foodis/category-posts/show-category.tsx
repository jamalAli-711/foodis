

const ShowCategory=({category_posts})=>{
   const setdate=new Date();
 
 const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // أو أي تنسيق تاريخ تفضله
  }; // أو أي تنسيق تاريخ تف
return (
<>
<div className=" rounded-lg   md:mx-2">
    <table className="w-full ">
        <thead>
            <tr className="">
                <th className="p-2 text-left font-bold ">Name</th>
                <th className="p-2 text-left font-bold ">Slug</th>
                <th className="p-2 text-left font-bold ">Created_at</th>
                <th className="p-2 text-left font-bold ">Status</th>
            </tr>
        </thead>
        <tbody className="">
            {category_posts &&(
                category_posts.map((category)=>(
 <tr key={category.id}>
                <td className="p-2  border">{category.name}</td>
                <td className="p-2  border ">{category.slug}</td>
 <td className="p-2 border">{formatDate(category.created_at)}</td>             
    <td className="p-2  border gap-2">
                    <span className="bg-green-500  py-1 px-2 rounded-full text-xs">Active</span>
                    <span className="bg-red-500  py-1 px-2 rounded-full text-xs">Inactive</span>

                </td>
            </tr>

                ))
            )

            }
           
           
          
            
            {/* <!-- Add more rows here --> */}
        </tbody>
    </table>
</div>
</>
)
}
export default ShowCategory;