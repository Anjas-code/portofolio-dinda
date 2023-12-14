import Image from "next/image";
import logo from "@/../public/logo_adinda.svg";
import NavbarButton from "./navbarButton";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center py-[10px] px-[100px]">
            <Image src={logo} alt="logo adinda" />

            <div className="flex space-x-3">
                <NavbarButton content="Home" href={"/"} />

                <NavbarButton content="Projects" href={"/"} />

                <NavbarButton content="Articles" href={"/"} />

                <NavbarButton content="Profile" href={"/"} />
            </div>

            <div className="flex space-x-3 text-sm">
                <p className="text-genoa-950">adinda280602@gmail.com</p>
                <div>
                    <EnvelopeIcon className="w-6 h-6 text-genoa-600"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
