import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';

// interface UserMenuContentProps {
//     user: User;
// }

export function PostsMenuContent() {
    const cleanup = useMobileNavigation();

    return (
        <>
            {/* <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            // </DropdownMenuLabel> */}
                        
                        <DropdownMenuSeparator />
            
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('posts.create')} as="button" prefetch onClick={cleanup}>
                        {/* <PlusIcon className="mr-2" /> */}
                        create post
                    </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('posts.categories')} as="button" prefetch onClick={cleanup}>
                        {/* <PlusIcon className="mr-2" /> */}
                        create tag
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('posts.categories')} as="button" prefetch onClick={cleanup}>
                        {/* <PlusIcon className="mr-2" /> */}
                        create category
                    </Link>
                </DropdownMenuItem>

               
        </>
    );
}
