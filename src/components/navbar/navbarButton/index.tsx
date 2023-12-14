import Link from "next/link";
import { NavbarButtonProps } from "./index.interface";

const NavbarButton = ({ content, href }: NavbarButtonProps) => {
    return (
        <Link
            href={href}
            className="px-7 py-2 border-x-2 border-genoa-500 rounded-[43px] text-genoa-950"
        >
            <p className="text-sm uppercase">{content}</p>
        </Link>
    );
};

export default NavbarButton;
