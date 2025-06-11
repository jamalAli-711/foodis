import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { User, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {  HomeIcon, LayoutGrid, LogOutIcon, TagIcon } from 'lucide-react';
import AppLogo from './app-logo';
import { NavPost } from './foodis/posts/nav-post';
// const axiosget=axios.get('/');

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
     const { auth } = usePage<User>().props;
    
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
                {
                    auth.user.user_type==="admin"&&(

                        <NavPost/>
                    )
                }
               
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
