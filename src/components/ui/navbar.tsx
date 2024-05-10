import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { NAVBAR_LINKS } from "@/constants/navbar";
import { NavbarLinks } from "./navbar-links";

export const Navbar = () => {
    return (
        <div className="hidden w-full static top-0 py-4 md:flex items-center justify-between bg-transparent">
            <aside>
                <Image src="/logo.webp" alt="logo" width={120} height={40} />
            </aside>

            <nav className="w-full flex items-center justify-center space-x-4">
                {NAVBAR_LINKS.map((link) => (
                    <NavbarLinks
                        key={link.title}
                        title={link.title}
                        href={link.href}
                    />
                ))}
            </nav>

            <aside className="flex items-center space-x-5">
                <p className="text-sm font-medium">adinda280602@gmail.com</p>
                <div className="p-4 rounded-full bg-white drop-shadow-sm shadow-sm">
                    <EnvelopeIcon className="w-6 h-6 text-genoa-600 drop-shadow-sm shadow-sm" />
                </div>
            </aside>
        </div>
    );
};
