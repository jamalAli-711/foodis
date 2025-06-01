import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/home',
    },
];

export default function Welcome({recipes}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="block h-full gap-4 rounded-xl p-4 min-sm:flex">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border py-2 max-md:hidden">
                    <h1 className="p-2 font-bold ">Sections</h1>
                    <div className="p-2 text-ms">Sections1</div>
                    <div className="p-2 text-ms">Sections</div>
                    <div className="p-2 text-ms">Sections</div>
                    <div className="p-2 text-ms">Sections</div>
                    {' '}
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border py-2 md:min-h-min"></div>
            </div>
        </AppLayout>
    );
}
