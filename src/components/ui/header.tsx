import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
            <aside>
                <Image src="/logo.webp" alt="logo" width={120} height={40} />
            </aside>

            <nav></nav>

            <aside className="flex items-center space-x-5">
                <p className="text-sm">adinda280602@gmail.com</p>
                <div className="p-4 rounded-full bg-white">
                    <EnvelopeIcon className="w-6 h-6" />
                </div>
            </aside>
        </div>
    );
};
