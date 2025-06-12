import { Link } from "@inertiajs/react";
import { FacebookIcon, Github, GithubIcon, InstagramIcon, LinkedinIcon, LucideYoutube, MailIcon, PhoneIcon, SirenIcon, SlidersIcon, TwitterIcon } from "lucide-react";

const Footer=()=>{
    return (
      
        <footer className="flex flex-col rounded-lg  space-y-10 border  justify-center  ">

    <nav className="flex justify-center flex-wrap gap-6  font-medium">
        <Link className="hover:text-gray-900" href="/">Home</Link>
        <Link className="hover:text-gray-900" href="/about">About</Link>
        <Link className="hover:text-gray-900" href="/services">Services</Link>
        {/* <Link className="hover:text-gray-900" href="#">Media</Link>
        <Link className="hover:text-gray-900" href="#">Gallery</Link>
        <Link className="hover:text-gray-900" href="#">Contact</Link> */}
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        </a>
      
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon/>
        </a>
    </div>
    <p className="text-center font-medium">&copy;© 2025 <a href="https://flowbite.com/">FoodisV™</a>. All Rights Reserved..</p>
</footer>

    );

}
export default Footer;