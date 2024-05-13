import { SOCIAL_MEDIA } from "@/constants/social-media";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-[120px]  px-[100px] pt-[120px]">
            <div className="flex items-start gap-[205px] bg-white  text-base-black">
                <div className="flex flex-col items-start gap-[120px] max-w-[556px]">
                    <p className="text-5xl font-semibold leading-normal">
                        Let&apos;s make something amazing together.
                    </p>

                    <p className="text-5xl font-semibold leading-normal">
                        Start by{" "}
                        <span className="text-outrageous-orange-500 underline underline-offset-auto">
                            saying hi
                        </span>
                        <div className="w-full flex  items-center justify-start gap-3 md:gap-5 mt-8">
                            {SOCIAL_MEDIA.map((item) => (
                                <div
                                    key={item.name}
                                    className="p-3 rounded-full bg-transparent border border-genoa-600 text-genoa-600 text-3xl"
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    <p className="text-4xl font-semibold leading-normal py-2">
                        Information
                    </p>

                    <div className="flex flex-col gap-12 text-2xl font-medium">
                        <p>HOME</p>
                        <p>PROJECTS</p>
                        <p>ARTICLES</p>
                        <p>PROFILE</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-t-2 border-genoa-500 py-9">
                <aside className="flex items-center gap-8">
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={120}
                        height={40}
                        className="pr-8 border-r border-neutral-600"
                    />
                    <p className="text-neutral-900">
                        ©2023. All Rights Reserved
                    </p>
                </aside>

                <aside className="flex items-center gap-8">
                    <p className="text-neutral-900">
                        Design by <span className="text-genoa-500 font-semibold">Adinda</span>
                    </p>
                </aside>
            </div>
        </div>
    );
};
