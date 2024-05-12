interface Props {
    title: string;
    total_projects: number;
    icon: React.ReactNode;
    bg_colour: string;
}

export const CardWhatDoIHelp = ({
    title,
    total_projects,
    icon,
    bg_colour,
}: Props) => {
    return (
        <div className="bg-base-white w-full p-5 flex items-center justify-start gap-6 drop-shadow-sm shadow-md">
            <div
                className={`rounded-full p-4 text-white`}
                style={{
                    backgroundColor: bg_colour,
                }}
            >
                {icon}
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-xl font-semibold leading-normal">{title}</p>
                <p>{total_projects} Projects</p>
            </div>
        </div>
    );
};
