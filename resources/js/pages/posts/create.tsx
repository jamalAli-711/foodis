
import InputT from '@/components/foodis/input';
import QuillEditor from '@/components/foodis/QuillEditor';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { FormEventHandler, useEffect, useState } from 'react';



export default function Create({ auth, success }: PageProps) {
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

    const [categories, setCategories] = useState<any[]>([]);
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
            <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
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
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            {/* Main Content Section */}
                            <div className="border-b border-gray-200 p-6">
                                <h2 className="mb-6 text-xl font-semibold text-gray-800">Post Information</h2>

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
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="category_id">
                                            Category
                                        </label>
                                        <select
                                            id="category_id"
                                            value={data.category_id}
                                            onChange={(e) => setData('category_id', e.target.value)}
                                            className="select select-primary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_id && <p className="mt-2 text-sm text-red-600">{errors.category_id}</p>}
                                    </div>
                                </div>

                                {/* Featured Image Upload */}
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="featured_image">
                                        Featured Image
                                    </label>
                                    {!imagePreview ? (
                                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="featured_image"
                                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:outline-none hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="featured_image"
                                                            name="featured_image"
                                                            type="file"
                                                            className="sr-only"
                                                            onChange={handleFileChange}
                                                            accept="image/*"
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative mt-2 flex justify-center">
                                            <div className="relative w-full max-w-lg">
                                                <img src={imagePreview} alt="Preview" className="h-48 w-full rounded-md object-cover shadow-sm" />
                                                <button
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                                                    aria-label="Remove image"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {errors.featured_image && <p className="mt-2 text-sm text-red-600">{errors.featured_image}</p>}
                                </div>

                                {/* Excerpt */}
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="excerpt">
                                        Excerpt
                                    </label>
                                    <textarea
                                        id="excerpt"
                                        rows={3}
                                        value={data.excerpt}
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="A brief summary of your post"
                                    />
                                    {errors.excerpt && <p className="mt-2 text-sm text-red-600">{errors.excerpt}</p>}
                                </div>

                                {/* Content Editor */}
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="content">
                                        Content
                                    </label>
                                    <div className="overflow-hidden rounded-md border border-gray-300">
                                        <QuillEditor id="content" value={data.content} onChange={(value) => setData('content', value)} />
                                    </div>
                                    {errors.content && <p className="mt-2 text-sm text-red-600">{errors.content}</p>}
                                </div>
                            </div>

                            {/* Publication Settings */}
                            <div className="border-b border-gray-200 bg-gray-50 p-6">
                                <h2 className="mb-6 text-xl font-semibold text-gray-800">Publication Settings</h2>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Status Select */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="status">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="select select-primary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                            <option value="archived">Archived</option>
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
                            <div className="bg-white p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="flex-shrink-0 rounded-md bg-indigo-100 p-2">
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
                                    <h2 className="ml-3 text-xl font-semibold text-gray-800">SEO Settings</h2>
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
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                className="mr-3 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
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
