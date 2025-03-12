"use client";

import { SquareChevronLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default function Resume() {

    return(
        <div className="flex flex-col items-center justify-center w-full h-auto p-4 font-['Doris'] overflow-y-scroll">
            <div className="relative flex items-center justify-between w-full lg:w-1/2 h-20 lg:h-24">
                <button title="back" type="button" onClick={() => redirect("/")} className="absolute btn btn-square btn-ghost w-fit p-0">
                    <SquareChevronLeft className="size-8" />
                </button>
                <h2 className="w-full text-center text-2xl">Resume Preview</h2>
            </div>
            <div className="w-full lg:w-1/2 h-auto border">
                <embed src="/Thu_Ta_Naing_Resume.pdf#view=FitH" type="application/pdf" className="w-full" height="700px" />
            </div>
        </div>
    )
}