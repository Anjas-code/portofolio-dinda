import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/components/ui/fonts";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
    title: "Adinda",
    description: "Personal Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
