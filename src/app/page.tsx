"use client"

import { CarTaxiFront, Facebook, FileText, Github, Instagram, Linkedin, PawPrint, Send, Twitter, Volume2, VolumeOff } from "lucide-react";
import "swiper/css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Particles } from "@/components/magicui/particles";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { EducationData, ProjectsData } from "@/data/imp-data";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { LinksData } from "@/data/links";
import { HyperText } from "@/components/magicui/hyper-text";
import TechStack from "@/components/ownui/techstack";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
  CUPCAKE = "cupcake",
  BUMBLEBEE = "bumblebee",
  EMERALD = "emerald",
  CORPORATE = "corporate",
  SYNTHWAVE = "synthwave",
  RETRO = "retro",
  CYBERPUNK = "cyberpunk",
  VALENTINE = "valentine",
  HALLOWEEN = "halloween",
  GARDEN = "garden",
  FOREST = "forest",
  AQUA = "aqua",
  LOFI = "lofi",
  PASTEL = "pastel",
  FANTASY = "fantasy",
  WIREFRAME = "wireframe",
  BLACK = "black",
  LUXURY = "luxury",
  DRACULA = "dracula",
  CMYK = "cmyk",
  AUTUMN = "autumn",
  BUSINESS = "business",
  ACID = "acid",
  LEMONADE = "lemonade",
  NIGHT = "night",
  COFFEE = "coffee",
  WINTER = "winter",
  SILK = "silk",
  SUNSET = "sunset",
}

export default function Home() {

  const router = useRouter();
  const routeToPage = (url: string) => { router.push(url) };

  const [theme, setTheme] = useState<THEME>(THEME.SUNSET);
  const themeChange = () => { theme === THEME.WINTER ? setTheme(THEME.SUNSET) : setTheme(THEME.WINTER) };

  const [currentYear] = useState(new Date().getFullYear());

  const audioRef = useRef(null);
  const [mute, setMute] = useState(false);
  const toggleMute = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current as any;
      console.log(audioElement.audio!.current.muted);
      audioElement.audio.current.muted = !audioElement.audio.current.muted;
    }
  } 

  return (
    <div className="relative w-screen h-fit flex justify-center pt-10 pb-24 font-['test'] overflow-y-scroll" data-theme={theme}>
      <div className="flex flex-col px-4 gap-6 w-full md:w-1/2 lg:w-1/2 z-10">
        <div className="flex flex-col w-full h-fit px-4 py-4 lg:py-6 gap-2 small-section">
          <div className="card card-side grow flex items-center gap-2">
            <div className="card-body w-1/2 p-0">
              <div className="card-title text-3xl lg:text-6xl">
                Hi, I'm 
                <HyperText className="text-3xl lg:text-6xl font-['test']">Yion</HyperText>
              </div>
              <p className="text-xs lg:text-2xl">Full-Stack Developer in Chiang Mai, building fast, responsive web apps with React, Next.js, and scalable backends.</p>
            </div>
            <figure className="size-28 lg:size-44 rounded-md">
              <img src="/picture.jpg" alt="Yion" className="rounded-md border" />
            </figure>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col p-4 small-section">
          <div className="card w-full h-fit">
            <div className="card-body p-0 gap-2">
              <h3 className="card-title text-xl">What I Do</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h4 className="font-semibold">Web Development</h4>
                  <p>I build modern, high-performance websites using modern techs like Next.js, Tailwind and handle server-side tasks like API routes, database queries, and optimizations.</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">Software Development</h4>
                  <p>I have experience in developing management software with C# and Java, focusing on efficiency, scalability, and user-friendly interfaces during my college year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit p-4 gap-2 small-section">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <TechStack /> 
        </div>

        <div className="flex flex-col w-full h-fit p-4 gap-2 small-section">
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="list">
            {
              EducationData.map((item, index) => (
                <li className="list-row px-0 lg:px-4" key={index}>
                  <div>
                    <img className="size-10 rounded-md" src={item.logo} alt={item.name} />
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{item.degree}</div>
                  </div>
                  <div className="flex">{item.date}</div>
                </li>
              ))
            }

          </ul>
        </div>

        <div className="flex flex-col w-full h-fit p-4 gap-2 small-section">
          <h3 className="text-xl font-semibold">Projects</h3>
          <div className="w-full h-fit gap-0">
            <BentoGrid className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[22rem] lg:auto-rows-[22rem]">
              {ProjectsData.map((project, index) => (
                <BentoCard key={index} {...project} />
              ))}
            </BentoGrid>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-fit p-4 small-section">
          <div className="flex justify-center lg:justify-start items-center w-full lg:w-1/2 h-fit">
            <h3 className="text-lg font-semibold">Socials •</h3>
            <ul className="grid grid-cols-4 gap-2">
              <li>
                <a href={ LinksData.Facebook.href } target="_blank" rel="noopener">
                  <Facebook size={22} strokeWidth={1} className="hover:-translate-y-1 transition-all hover:fill-accent" />
                </a>
              </li>
              <li>
                <a href={ LinksData.Instagram.href } target="_blank" rel="noopener">
                  <Instagram size={22} strokeWidth={1} className="hover:-translate-y-1 transition-all hover:fill-accent" />
                </a>
              </li>
              <li>
                <a href={ LinksData.Twitter.href } target="_blank" rel="noopener">
                  <Twitter size={22} strokeWidth={1} className="hover:-translate-y-1 transition-all hover:fill-accent" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
            <p className="">&copy; <span>{currentYear}</span> Yion ‣ All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="hidden">
        <AudioPlayer
          ref={audioRef}
          loop
          autoPlay
          muted={mute}
          src="/music/test.mp3"
          layout="horizontal"
          volume={0.2}
          header="Now Playing : Mice on Venus"
          showSkipControls={false}
          showJumpControls={false}
          onPlay={e => console.log("onPlay")}
          style={{ backgroundColor: "transparent", border: "0px", boxShadow: "none" }} />
      </div>
      <Particles
        className="absolute inset-0 z-0 overflow-hidden"
        quantity={100}
        ease={100}
        size={2}
        color={theme === THEME.WINTER ? "#40546f" : "#f8f8f3"}
        refresh />
      <div className="fixed bottom-8 z-20">
        <Dock direction="middle" className="rounded-full h-10">
          <DockIcon className="tooltip" data-tip="Contact Me">
            <a href={LinksData.Email.href} target="_blank" rel="noopener" title="email" className="">
              <Send className="size-6" />
            </a>
          </DockIcon>
          <DockIcon>
            <a onClick={() => router.push(`/resume?theme=${theme}`)} title="resume" className="btn btn-ghost size-8 p-0 border">
              <FileText className="size-6" />
            </a>
          </DockIcon>
          <div className="divider divider-horizontal mx-0"></div>
          <DockIcon>
            <a href={LinksData.Github.href} target="_blank" rel="noopener" title="email">
              <Github className="size-6" />
            </a>
          </DockIcon>
          <DockIcon className="hidden lg:flex">
            <a href={LinksData.Linkedin.href} target="_blank" rel="noopener" title="email">
              <Linkedin className="size-6" />
            </a>
          </DockIcon>
          <div className="divider divider-horizontal mx-0"></div>
          <DockIcon>
            <label className="swap text-xl">
              <input type="checkbox" title="audio" onChange={toggleMute} />
              <div className="swap-on"><VolumeOff /></div>
              <div className="swap-off"><Volume2 /></div>
            </label>
          </DockIcon>
          <DockIcon>
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={themeChange} title="theme" />

              <svg
                className="swap-off size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>


              <svg
                className="swap-on size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
