import { CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

export const TempFeatures = [
    {
        Icon: FileTextIcon,
        name: "Spaces",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <img src="/projects/test.png" className="absolute" title="project" />,
        className: "w-full h-fit lg:h-full col-span-0",
    },
    {
        Icon: InputIcon,
        name: "Restaurant Demo Website",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: <img src="/projects/test2.png" className="absolute" title="project" />,
        className: "w-full h-fit lg:h-full col-span-0",
    },
    {
        Icon: GlobeIcon,
        name: "Persona",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: <img src="/projects/test3.png" className="absolute" title="project" />,
        className: "w-full h-fit lg:h-full col-span-0",
    },
    {
        Icon: CalendarIcon,
        name: "KBZPay Clone",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <img src="/projects/test4.png" className="absolute" title="project" />,
        className: "w-full  h-fit lg:h-full col-span-0",
    }
];

export const TempEducation = [
    {
        name: "Yangon Adventist Seminary Highschool",
        degree: "Highschool Year 11",
        date: "March, 2021",
        logo: "/education/yas.png"
    },
    {
        name: "British University College",
        degree: "Foundation Year",
        date: "March, 2023",
        logo: "/education/buc.jpg"
    },
    {
        name: "British University College",
        degree: "Higher Diploma in InfoComms Technology",
        date: "February, 2025",
        logo: "/education/buc.jpg"
    },
    {
        name: "General Education Development (GED)",
        degree: "Diploma, Overall Score: 676",
        date: "March, 2025",
        logo: "/education/ged.png"
    }
]