import { TechStackData } from "@/data/svg"

export default function TechStack() {
    return (
        <div className="grid grid-rows-auto h-full w-full gap-4 px-2 pb-2">
            <div className="flex flex-col gap-2">
                <h4 className="text-lg">Frontend</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-fit gap-2">
                    {
                        TechStackData.FrontEnd.map((tech, index) => (
                            <TechUI key={index} data={tech} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-lg">Backend</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-fit gap-2">
                    {
                        TechStackData.Backend.map((tech, index) => (
                            <TechUI key={index} data={tech} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-lg">Tools</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-fit gap-2">
                    {
                        TechStackData.Tools.map((tech, index) => (
                            <TechUI key={index} data={tech} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

import { JSX } from "react";

export function TechUI({ data }: { data: { name: string, icon: () => JSX.Element } }) {
    return (
        <div className="flex items-center justify-start w-full h-10 lg:h-12 px-4 bg-base-100/80 text-base lg:text-lg gap-2 rounded-sm">
            {data.icon()} {data.name}
        </div>
    )
}