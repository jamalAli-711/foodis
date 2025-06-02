import { Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';

const BlogsAll = ({ blog }) => {
    // console.log('blogs_all', blog);

    return (
        <div className="px-4"  >
            {blog && (
                <div className="mb-4">
                    <section key={blog.id} >
                        <Link
                            href={route('blogs.show', blog)}
                            className="flex flex-col items-center rounded-lg border  max-md:flex-row md:flex-row"
                        >
                            <img
                                className="h-32 w-full object-cover max-md:w-48 md:w-48 md:rounded-none md:rounded-s-lg"
                                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                alt={blog.title}
                            />

                            <div className="flex flex-1 flex-col justify-between overflow-hidden px-4 leading-normal">
                                <h1 className="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h1>

                                <div className="overflow-hidden text-sm text-nowrap text-ellipsis">
                                    <ReactMarkdown >{blog.content}</ReactMarkdown>
                                </div>
                            </div>
                        </Link>
                    </section>
                </div>
            )}
        </div>
    );
};
export default BlogsAll;
