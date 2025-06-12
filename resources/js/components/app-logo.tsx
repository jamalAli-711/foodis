import { CakeIcon } from 'lucide-react';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <CakeIcon className="size-5 fill-current text-red-500" />
                 {/* <CakeIcon className="w-10 h-10 text-red-500" /> */}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">FoodisV</span>
            </div>
        </>
    );
}
