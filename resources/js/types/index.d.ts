import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';



export interface BreadcrumbItem {
    title: Array;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}
export  interface Auth {
        user: User | null; // تعديل لجعل user nullable
    }

export interface User {
    id: number;
    name: string;
    userType: string | null;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface SharedData {
    name: string;
    user_type: string;

    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}
interface Recipe {
    id: number;
    title: string;
    description: string;
    featured_image: string;
    is_featured: boolean;
    category_id: number;
    height?: number;
    category: {
        name: string;
    };
}

interface Category {
    id: number;
    name: string;
    description: string;
    image?: string;
    icon?: string;
}

export interface CategorysPageProps {
    recipes: {
        data: Recipe[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    categorys: Category[];
}

