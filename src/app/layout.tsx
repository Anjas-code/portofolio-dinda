import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

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
            <body className={poppins.className}>
              <Header/>
              {children}
            </body>
        </html>
    );
}
