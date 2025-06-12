import { Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';

const BlogsAll = ({ post }) => {
    return (
        <div className="p-4 mb-4 "   >
            {post && (
                    <section key={post.id} >
                        <Link
                            href={route('blogs.show', post)}
                            className="flex flex-col rounded-lg border shadow-sm md:flex-row"
                        >
                            <img
                                className="h-56 w-56   object-cover max-md:h-full  max-md:w-full md:h-56 md:w-full max-md:rounded md:rounded-s-lg"
                                src={post.featured_image}
                                alt={post.title}
                            />
                            <div className=" py-2 max-md:px-2 px-8 tracking-tight justify-between overflow-hidden  leading-normal">
                                <h1 className=" text-2xl font-bold ">{post.meta_title}</h1>
                                <div className="overflow-hidden text-sm py-4 max-md:py-2 text-left">
                                       <div className='overscroll-none clear-right '>{post.meta_description}</div>
                                </div>
                            </div>
                        </Link>
                    </section>
            )}
        </div>
    );
};
export default BlogsAll;

