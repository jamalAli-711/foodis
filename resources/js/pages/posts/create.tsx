import InputT from '@/components/foodis/input';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { FormEventHandler, useEffect, useState } from 'react';

export default function Create({ auth, success }: PageProps) {
    const { props } = usePage();
    const { categorysPosts } = props;

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        content: '',
        category_id: '',
        featured_image: null as File | null,
        status: 'draft',
        published_at: '',
        excerpt: '',
        meta_title: '',
        meta_description: '',
        user_id: auth.user.id, // أخذ القيمة من auth مباشرة
    });
    // const props=usePage();

    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        if (success) {
            setSuccessMessage(success);
            const timer = setTimeout(() => setSuccessMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]); // الاعتماد على المسار الكامل
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // const [categorysPosts, setCategories] = useState<any[]>([]);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const removeImage = () => {
        setData('featured_image', null);
        setImagePreview(null);
    };
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const categoriesRes = await axios.get(route('categories'));
                setCategories(categoriesRes.data);
            } catch (err) {
                console.error('Failed to fetch initial data:', err);
            }
        };

        fetchInitialData();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setData('featured_image', file);

            // إنشاء معاينة للصورة
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'), {
            onSuccess: () => {
                // إعادة تعيين الحقول بعد النجاح
                setData({
                    title: '',
                    slug: '',
                    content: '',
                    category_id: '',
                    featured_image: null as File | null,
                    status: 'draft',
                    published_at: '',
                    excerpt: '',
                    meta_title: '',
                    meta_description: '',
                    user_id: auth.user.id, // نحتفظ بقيمة user_id
                });
                setImagePreview(null); // إزالة معاينة الصورة
            },
        });
    };



    return (
        <AppLayout>
            <Head title="Create New Post" />
            {successMessage && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="rounded bg-green-500 px-4 py-2 text-white shadow-lg">
                        {successMessage}
                        <button onClick={() => setSuccessMessage(null)} className="ml-2">
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Create New Post</h1>
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </button>
                    </div>

                    <form onSubmit={submit} className="space-y-8">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            {/* Main Content Section */}
                            <div className="border-b p-6">
                                <h2 className="mb-6 text-xl font-semibold">Post Information</h2>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Title Input */}
                                    <div className="md:col-span-2">
                                        <InputT
                                            label="Title"
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            error={errors.title}
                                            required
                                            className="text-lg font-medium"
                                        />
                                    </div>

                                    {/* Slug Input */}
                                    <div className="md:col-span-1">
                                        <InputT
                                            label="Slug"
                                            id="slug"
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            error={errors.slug}
                                            required
                                        />
                                    </div>

                                    {/* Category Select */}
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-medium" htmlFor="category_id">
                                            Category
                                        </label>
                                        <select
                                           value={data.category_id}
                                            id="category_id"

                                            onChange={(e) => setData('category_id', e.target.value)}
                                            className="mt-1 block w-full rounded-md border py-2 shadow-sm"
                                        >
                                            {categorysPosts.map((category) => (
                                                <option className="text-black" 
                                                 value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_id && <p className="mt-2 text-sm text-red-600">{errors.category_id}</p>}
                                    </div>
                                </div>

                                {/* Featured Image Upload */}
                                <div className="mt-6">
                                    <InputT
                                        label="featured_image"
                                        id="featured_image"
                                        type="text"
                                        value={data.featured_image}
                                        onChange={(e) => setData('featured_image', e.target.value)}
                                        error={errors.title}
                                        required
                                        className="text-lg font-medium"
                                    />
                                </div>

                                {/* Excerpt */}
                                <div className="mt-6">
                                    <label className="block text-sm font-medium" htmlFor="excerpt">
                                        Excerpt
                                    </label>
                                    <textarea
                                        id="excerpt"
                                        rows={3}
                                        value={data.excerpt}
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        className="mt-1 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="A brief summary of your post"
                                    />
                                    {errors.excerpt && <p className="mt-2 text-sm text-red-600">{errors.excerpt}</p>}
                                </div>

                                {/* Content Editor */}
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium" htmlFor="content">
                                        Content
                                    </label>
                                    <div className="overflow-hidden">
                                        <code className="code-block">
                                            <textarea
                                                id="content"
                                                rows={20}
                                                value={data.content}
                                                onChange={(e) => setData('content', e.target.value)}
                                                className="block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                placeholder="A brief summary of your post"
                                            />
                                        </code>
                                    </div>
                                    {errors.content && <p className="mt-2 text-sm text-red-600">{errors.content}</p>}
                                </div>
                            </div>

                            {/* Publication Settings */}
                            <div className="border-b p-6">
                                <h2 className="mb-6 text-xl font-semibold">Publication Settings</h2>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Status Select */}
                                    <div>
                                        <label className="block text-sm font-medium" htmlFor="status">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="mt-1 block w-full rounded-md border py-2 shadow-sm"
                                        >
                                            <option className="text-black" value="draft">
                                                Draft
                                            </option>
                                            <option className="text-black" value="published">
                                                Published
                                            </option>
                                            <option className="text-black" value="archived">
                                                Archived
                                            </option>
                                        </select>
                                    </div>

                                    {/* Published Date */}
                                    {data.status === 'published' && (
                                        <div>
                                            <InputT
                                                label="Publish Date"
                                                id="published_at"
                                                type="datetime-local"
                                                value={data.published_at || formattedDate}
                                                onChange={(e) => setData('published_at', e.target.value)}
                                                error={errors.published_at}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* SEO Section */}
                            <div className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="flex-shrink-0 rounded-md p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-indigo-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="ml-3 text-xl font-semibold">SEO Settings</h2>
                                </div>

                                <div className="space-y-6">
                                    {/* Meta Title */}
                                    <InputT
                                        label="Meta Title"
                                        id="meta_title"
                                        type="text"
                                        value={data.meta_title}
                                        onChange={(e) => setData('meta_title', e.target.value)}
                                        error={errors.meta_title}
                                        placeholder="SEO optimized title (recommended: 50-60 characters)"
                                    />

                                    {/* Meta Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="meta_description">
                                            Meta Description
                                        </label>
                                        <textarea
                                            id="meta_description"
                                            rows={3}
                                            value={data.meta_description}
                                            onChange={(e) => setData('meta_description', e.target.value)}
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Brief description for search engines (recommended: 150-160 characters)"
                                        />
                                        {errors.meta_description && <p className="mt-2 text-sm text-red-600">{errors.meta_description}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="mr-3 inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                            >
                                {processing ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Creating...
                                    </span>
                                ) : (
                                    'Create Post'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
