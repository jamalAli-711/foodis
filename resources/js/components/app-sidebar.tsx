import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { HomeIcon, LayoutGrid, LogOutIcon } from 'lucide-react';
import AppLogo from './app-logo';
import { NavPost } from './foodis/posts/nav-post';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Home',
        href: '/',
        icon: HomeIcon,
    },
    {
        title: 'Register',
        href: '/r/register',
        icon: LogOutIcon,
    },
];

export function AppSidebar() {
  const { auth } = usePage<SharedData>().props;
    const userType = auth?.user?.user_type;
    const isAdmin = userType === 'admin';

    return (
        <Sidebar>
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
                <NavMain items={mainNavItems} userType={userType} />
                {isAdmin && <NavPost />}
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={auth?.user} />
            </SidebarFooter>
        </Sidebar>
    );
}