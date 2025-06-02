import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState} from 'react';

import { PageProps } from '@/types';
import QuillEditor from '@/components/foodis/QuillEditor';
import AppLayout from '@/layouts/app-layout';
import InputT from '@/components/foodis/input';



export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        content: '',
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
    <AppLayout>
                <>
            <Head title="Create New Post" />

            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h1>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <InputT label='Title'  id="title" type="text"value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className={` block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                                    errors.title ? 'border-red-500' : ''
                                }`}/>
                            {errors.title && (
                                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
                            )}
                        </div>

                        {/* Slug Input */}
                        <div>
                        <div>
                            <InputT label='Slug'  id="slug" type="text"value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                className={`mx-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                                    errors.title ? 'border-red-500' : ''
                                }`}/>
                            {errors.title && (
                                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
                            )}
                        </div>
                        </div>

                        {/* Content Editor */}
                        <div className='my-14'>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <QuillEditor
                                id="content"
                                value={data.content}
                                onChange={(value) => setData('content', value)}
                            />
                            {errors.content && (
                                <p className="text-sm text-red-600">{errors.content}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                            >
                                {processing ? 'Creating...' : 'Create Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    </AppLayout>

    );
}
