import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import SelectCombobox from '../posts/select-Combobox';
import axios from 'axios';

type CategoryForm = {
    name: string;
    slug: string;
};

interface CategoryProps {
    status?: string;
    canResetPassword: boolean;
}

export default function CreateCategory({ success }: CategoryProps) {
    const { data, setData, post, processing, errors } = useForm<Required<CategoryForm>>({
        name: '',
        slug: '',
      
    });
const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
        useEffect(() => {
            if (success) {
                setSuccessMessage(success);
                const timer = setTimeout(() => setSuccessMessage(null), 5000);
                return () => clearTimeout(timer);
            }
        }, [success]);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
       post('/posts/categories-store');
    };

    return (
        <div className=" border rounded-lg px-2 md:mx-2 ">          
        <AuthLayout  title="New Category">
          <Head title="New Category" />
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

            <form className="flex flex-col  " onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">name category</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>

                        <div className="grid gap-2">
                         <Label htmlFor="slug">name category</Label>

                        <Input
                            id="slug"
                            type="text"
                            tabIndex={2}
                            autoComplete="current-slugslug"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            placeholder="slug"
                        />
                        <InputError message={errors.slug} />
                    </div>
                        

                   

                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Save
                    </Button>

         </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
     </AuthLayout>
        </div>

    );
}
