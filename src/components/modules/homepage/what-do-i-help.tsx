import { CardWhatDoIHelp } from "@/components/ui/card-what-do-i-help";
import { WHAT_DO_I_HELP } from "@/constants/what-do-i-help";

export const ModuleHomepageWhatDoIHelp = () => {
    return (
        <div className="py-[148px] px-[100px] flex items-start gap-24 bg-base-white">
            <div className="w-full flex flex-col items-center gap-8">
                {WHAT_DO_I_HELP.map((item) => (
                    <CardWhatDoIHelp
                        key={item.title}
                        title={item.title}
                        total_projects={item.total_projects}
                        icon={item.icon}
                        bg_colour={item.bg_colour}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-12">
                <p className="text-6xl font-semibold leading-none">
                    What do i help?
                </p>
                <p className="text-xl leading-10">
                    We will help you{" "}
                    <span className="text-genoa-600 font-semibold">
                        find solutions
                    </span>{" "}
                    and{" "}
                    <span className="text-orange-600 font-semibold">solve</span>{" "}
                    your{" "}
                    <span className="text-orange-600 font-semibold">
                        problems
                    </span>{" "}
                    by using the right design process to create digital products
                    (such as Websites/Dashboards/mobile apps/business designs){" "}
                    <span className="text-cream-can-500 font-semibold">
                        to support their business.
                    </span>
                </p>

                <p className="text-xl leading-10">
                    It&apos;s time for us to collaborate with digital to build
                    your business and reach a broader audience, so that your
                    product can be easily recognized!
                </p>

                <div className="flex items-center border-collapse">
                    <div className="flex text-xl items-center gap-3 pr-10 border-r border-black">
                        <span className="text-7xl font-medium">3</span>{" "}
                        <div>
                            <p>Year</p>
                            <p>Experiences</p>
                        </div>
                    </div>

                    <div className="flex text-xl items-center gap-3 pl-10 border-l border-black">
                        <span className="text-7xl font-medium">30+</span>{" "}
                        <div>
                            <p>Project&apos;s</p>
                            <p>Complated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
