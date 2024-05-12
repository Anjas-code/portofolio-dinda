import { ModuleHomepageBanner } from "@/components/modules/homepage/banner";
import { ModuleHomepageMyWorkExperiences } from "@/components/modules/homepage/my-work-experience";
import { ModuleHomepageWhatDoIHelp } from "@/components/modules/homepage/what-do-i-help";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
    return (
        <main>
            <div className="w-full flex flex-col bg-genoa-50 px-9 md:px-[100px] gap-y-28">
                <Navbar />
                <ModuleHomepageBanner />
            </div>

            <ModuleHomepageWhatDoIHelp />
            <ModuleHomepageMyWorkExperiences />
        </main>
    );
}
