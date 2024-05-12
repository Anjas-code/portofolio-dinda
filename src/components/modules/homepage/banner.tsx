import { SOCIAL_MEDIA } from "@/constants/social-media";
import Image from "next/image";
import Link from "next/link";

export const ModuleHomepageBanner = () => {
    return (
        <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-5 md:gap-0">
            <div className="container flex flex-col gap-y-[124px]">
                <div className="flex flex-col gap-6 md:gap-12">
                    <div className="flex flex-col text-genoa-950 text-center md:text-start">
                        <h1 className="font-semibold text-3xl md:text-6xl leading-normal">
                            Hello, I&lsquo;m Adinda
                        </h1>
                        <h1 className="font-semibold text-xl md:text-4xl tracking-wide">
                            UI/UX Designer
                        </h1>
                    </div>

                    <div className="w-[118px] h-[2px] bg-genoa-600 hidden md:block" />

                    <div className="text-center md:text-start md:text-xl text-base md:leading-9 leading-normal">
                        <p>with design, i can help others to</p>
                        <p>visualize their dreams, what a great job!</p>
                    </div>
                </div>

                <Link
                    href="/profile"
                    className="hidden md:block w-fit px-20 py-3 rounded-[50px] text-lg border-2 bg-transparent text-genoa-500 border-genoa-500"
                >
                    View Profile
                </Link>
            </div>

            <div className="container flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-5 mx-2">
                <Image
                    src="/adinda_ai.webp"
                    alt="adinda ai pic"
                    width={560}
                    height={612}
                    className="scale-90 md:scale-100"
                    priority
                />
                <div className="w-full flex flex-row items-center justify-center md:flex-col gap-3 md:gap-5">
                    {SOCIAL_MEDIA.map((item) => (
                        <div
                            key={item.name}
                            className="p-2 rounded-full bg-transparent border border-genoa-600 text-genoa-600"
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
