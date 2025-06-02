import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, HomeIcon, LayoutGrid, LogOutIcon, TagIcon } from 'lucide-react';
import AppLogo from './app-logo';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/24/solid';
import { NavPost } from './foodis/posts/nav-post';
const axiosget=axios.get('/');

const mainNavItems: NavItem[] = [
    

    {
        title: 'Dashboard',
        href: '/dashboard',
        
        icon: LayoutGrid,
    },
    {
        title: 'Home',
        href:'/',
        icon: HomeIcon,

    },
    {
        title: 'Register',
        href:'/register',
        icon: LogOutIcon,

    },
    
    // {
    //     title: ' Post settings',
    //     href:'/posts/categories',
    //     icon: TagIcon,

    // },
      
   
];



export function AppSidebar() {
    return (
        <Sidebar >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                
                <NavPost/>
               
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
