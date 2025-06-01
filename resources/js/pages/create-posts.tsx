import TextareaBlog from '@/components/foodis/textarea-blog';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const CreatePosts = () => {
    return (
        <AppLayout>
            <Head title="Home" />
            <Input type='text' />
            <TextareaBlog />
        </AppLayout>
    );
};
export default CreatePosts;
