"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    title: string;
    href: string;
}

export const NavbarLinks = ({ title, href }: Props) => {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={cn("block px-6 py-2 text-sm font-medium uppercase leading-5 tracking-wide", {
                "border-x-2 rounded-[43px] border-genoa-500 text-genoa-500": pathname === href,
            })}
        >
            {title}
        </Link>
    );
};
