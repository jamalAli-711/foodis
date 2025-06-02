import InputT from '@/components/foodis/input';
import TextareaBlog from '@/components/foodis/textarea-blog';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import CreateCategory from '@/components/foodis/category-posts/create-category';

const CreateCategoryPosts = () => {
  
    return (
        <AppLayout>
            <Head title="Home" />
            <CreateCategory />
           
           
        </AppLayout>
    );
};
export default CreateCategoryPosts;
2