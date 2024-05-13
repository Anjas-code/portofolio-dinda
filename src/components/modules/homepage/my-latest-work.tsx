import Image from "next/image";

export const ModuleHomepageMyLatestWork = () => {
    return (
        <div className="flex flex-col gap-20 py-[148px] px-[100px]">
            <div className="flex flex-col gap-1 text-smoky-950">
                <p className="tracking-wide text-5xl font-semibold leading-[64px]">
                    My Latest Works
                </p>
                <p className="text-xl leading-7 tracking-wide">
                    Solution for digital experiences
                </p>
            </div>

            {/* <div className="flex space-x-6 items-center justify-center"> */}
            <div className="flex overflow-x-auto">
                <div className="swipper flex snap-x snap-mandatory space-x-3 items-center">
                    <Image
                        src="/brand_identity.webp"
                        width={480}
                        height={400}
                        alt="brand identity"
                        priority
                    />
                    <Image
                        src="/web _design.webp"
                        width={480}
                        height={400}
                        alt="web design"
                        priority
                    />
                    <Image
                        src="/app_design.webp"
                        width={480}
                        height={400}
                        alt="app design"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
