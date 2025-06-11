import { Input } from "@headlessui/react";

const Header=({topRef})=>{
    return (
<div className=" grid grid-cols-2" >
<div className="w-full px-4 " ref={topRef}>
                <h5 className="text-2xl tracking-tight ">Your passion for food starts here!</h5>
                <a href="#" className="flex flex-col max-md:flex-row md:flex-row">
                    <div className="flex flex-col justify-between ">
                        <h4 className="text-1xl"> Best food recipes with the foodie V network </h4>
                    </div>
                </a>
            </div>
<div className=" py-4 items-center pr-4">
               <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <Input type="search" 
        id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  
         dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." 
          />

    </div>
            </div>
            </div>
    );
}
export default Header;