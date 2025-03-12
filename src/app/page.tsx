"use client"

import { Cat, Facebook, FileText, Github, Instagram, Linkedin, Twitter, Volume2, VolumeOff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Home() {

  const router = useRouter();
  const routeToPage = (url: string) => { router.push(url) };
  const theme = () => {
    const theme = document.getElementsByTagName("body")[0];
    if (theme.getAttribute("data-theme") === "lofi") {
      theme.setAttribute("data-theme", "black");
    } else {
      theme.setAttribute("data-theme", "lofi");
    }
  }
  const [currentYear] = useState(new Date().getFullYear());
  const [projects, setProjects] = useState([
    { project_name: "Spaces", project_img: "/projects/project-1.png", project_stack: "NEXT.js"},
    { project_name: "Restaurant Demo", project_img: "/projects/project-2.png", project_stack: "PHP"},
    { project_name: "Persona", project_img: "/projects/project-3.png", project_stack: "React.js"},
    { project_name: "KBZPay Clone", project_img: "/projects/project-4.png", project_stack: "React.js"},
  ]);
  
  const audioRef = useRef(null);
  const [mute, setMute] = useState(false);
  const toggleMute = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current as any;
      console.log(audioElement.audio!.current.muted);
      audioElement.audio.current.muted = !audioElement.audio.current.muted; // Toggle mute
    }
  }

  useEffect(()=> {
    console.log(`mute = ${mute}`);
  }, [mute])

  return (
    <div className="relative w-screen h-fit flex justify-center font-['DailyMoody'] overflow-y-scroll">
      <div className="fixed left-1 bottom-2 w-1/4 h-fit hidden lg:hidden border border-secondary rounded-md">
        <AudioPlayer
          ref={audioRef}
          loop
          autoPlay
          muted={mute}
          src="/music/1-12. Dry Hands.mp3"
          volume={0.3}
          header="Now Playing : Mice on Venus"
          showSkipControls={false}
          showJumpControls={false}
          onPlay={e => console.log("onPlay")}
          style={{ backgroundColor: "transparent", border: "none"}} />
      </div>
      <div className="flex flex-col px-4 w-full md:w-1/2 lg:w-1/2">
        <nav className="flex items-center w-full h-20 text-2xl box-border">
          <div className="flex items-center gap-2">
            <Cat />
            <h1 className="font-['CuteNotes'] font-semibold text-3xl">Yion.dev</h1>
          </div>
        </nav>
        <div className="flex flex-col w-full h-fit gap-2">
          <div className="w-full h-fit flex items-center justify-end">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={theme} />

              {/* sun icon */}
              <svg
                className="swap-off size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="divider divider-horizontal"></div>
            <label className="swap text-xl">
              <input type="checkbox" title="audio" onChange={toggleMute} />
              <div className="swap-on"><VolumeOff /></div>
              <div className="swap-off"><Volume2 /></div>
            </label>
          </div>
          <div className="card card-side grow pt-4">
            <figure className="size-32 rounded-md">
              <img src="/picture.jpg" alt="Yion" />
            </figure>
            <div className="card-body w-1/2 px-4 py-0">
              <div className="card-title">Hi, My name is Yion</div>
              <p className="text-xs lg:text-lg">Full-Stack Developer in Chiang Mai, building fast, responsive web apps with React, Next.js, and scalable backends.</p>
              <div className="flex items-center justify-end">
                <a onClick={()=>routeToPage("/resume")} title="resume" className="btn btn-ghost size-8 p-0 border"><FileText strokeWidth={1} /></a>
                <a href="https://github.com/yion69" rel="noopener" target="_blank" title="github/yion69" className="btn btn-ghost size-8 p-0 border"><Github strokeWidth={1} /></a>
                <a href="https://www.linkedin.com/in/thu-ta-naing-83b5222b0/" rel="noopener" target="_blank" title="linkedin/thu_ta_naing" className="btn btn-ghost size-8 p-0 border"><Linkedin strokeWidth={1} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="w-full h-fit flex flex-col">
          <div className="card w-full h-fit">
            <div className="card-body p-0 gap-2">
              <h3 className="card-title">What I Do</h3>
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

        <div className="divider"></div>

        <div className="flex flex-col w-full h-fit gap-2">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <div className="card">
            <div className="card-body flex flex-col lg:flex-row lg:gap-24 h-fit p-0">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h4 className="card-title">Languages</h4>
                <div className="h-fit grid grid-flow-col justify-start gap-5">
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" /></svg>
                    HTML
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" /></svg>
                    CSS
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg>
                    JavaScript
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg className="size-8 fill-base-content" role="img" viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path></svg>
                    TypeScript
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" /></svg>
                    PHP
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <h4 className="card-title">Frameworks</h4>
                <div className="h-fit grid grid-flow-col justify-start gap-5">
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg viewBox="0 0 24 24" className="size-8 fill-base-content"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor"></path></svg>
                    React.js
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 fill-base-content" ><path fill="currentColor" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path></svg>
                    Next.js
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-base-content" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" /></svg>
                    Vue
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-base-content" viewBox="0 0 512 512"><path d="M107.2 0c2.5 0 4.7 .8 6.7 2l94.3 54.1c2.7 1.5 4.5 3.5 5.4 5.9c.9 2.2 .9 4.3 .9 5.6l0 193.4 69.2-39.7 0-100.3c0-2.6 .6-5 2.2-7.2c1.5-2.1 3.5-3.6 5.7-4.8c0 0 0 0 0 0l94-54c1.6-.9 3.4-1.6 5.5-1.6s4 .7 5.6 1.6l95.8 55.1c2.3 1.3 3.9 3 4.9 5.3c.9 2.1 .9 4.2 .9 5.8l0 107.2c0 2-.2 4.3-1.4 6.4c-1.2 2.2-3 3.7-5.1 4.9l-.1 .1-88 50.5 0 100c0 2.3-.3 4.8-1.6 7c-1.3 2.2-3.3 3.7-5.3 4.9c0 0 0 0-.1 0L208.7 510c-2.2 1.2-4.5 2-7.1 2s-4.9-.9-7.1-2l-.1-.1L7.1 402l-.5-.3c-1.1-.7-2.6-1.7-3.8-2.9C.9 396.9 0 394.6 0 391.6L0 65.9c0-4.8 3-7.9 5.5-9.3L100.5 2c2-1.2 4.3-2 6.8-2zM38.1 67.1l69 39.9 69.2-39.9L107.1 27.4l-69 39.7zm353 93.2l69-39.7-69-39.7-69.1 39.7 69.1 39.7zM189.2 89L120 128.8l0 186.4 69.2-39.9 0-186.4zM94.5 128.9L25.2 89.1l0 294.2 164 94.2 0-79.4-87.3-49.3-.2-.1c-1.3-.8-3.2-1.9-4.6-3.7c-1.7-2.1-2.5-4.7-2.5-7.7l0-208.5zm214.7 92.4l69.3 39.6 0-78.5-69.3-39.9 0 78.8zm94.5 39.6L473 221.2l0-78.8-69.3 39.9 0 78.5zM201.6 376.1l163.8-93.2-69-39.9L133 337.1l68.6 38.9zm12.9 101.5l164-94.2 0-78.8-164 93.6 0 79.4z" /></svg>
                    Laravel
                  </span>
                  <span className="flex flex-col items-center justify-center box-border">
                    <svg viewBox="0 0 24 24" className="size-8 fill-base-content"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"></path></svg>
                    Tailwind
                  </span>  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col w-full h-fit gap-2">
          <h3 className="text-xl font-semibold">Timeline</h3>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start timeline-box text-sm w-full">
                <h3 className="font-bold text-xs">Present</h3>
                Applying for university
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box text-sm w-full">
                <h3 className="font-bold text-xs">March, 2025</h3>
                Acquired GED
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box text-sm w-full">
                <h3 className="font-bold text-xs">February, 2025</h3>
                Completed Higher Diploma in Infocomm Technology
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box text-sm w-full">
                <h3 className="font-bold text-xs">March, 2024</h3>
                Completed Foundation Year at British United College
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box text-sm w-full">
                <h3 className="font-bold text-xs">March, 2021</h3>
                Completed Year 11 at Yangon Adventist Seminary High School
              </div>
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col w-full h-56 gap-2">
          <h3 className="text-xl font-semibold">Projects</h3>
          <Swiper
            className="w-full grow"
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400:{
                slidesPerView:1,
              },
              639: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            {
              projects.map((e,i) => (
                <SwiperSlide className="flex flex-col w-full h-full border border-secondary rounded-md overflow-hidden">
                  <div className="w-full h-3/4 bg-blue-400 overflow-hidden">
                    <img
                      src= {e.project_img}
                      alt="Shoes" />
                  </div>
                  <div className="flex items-center justify-around w-full h-1/4 px-4 py-2 border-t border-secondary font-mono ">
                    <h3 className=" p-0 w-full h-full">{e.project_name}</h3>
                    <div className="flex w-fit h-full items-center grow gap-1 justify-end">
                      <span className="badge badge-sm rounded-full bg-secondary text-secondary-content">{e.project_stack}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className="divider mb-0 pb-0"></div>

        <div className="flex flex-col lg:flex-row w-full h-fit pt-2 pb-4">
          <div className="flex justify-center lg:justify-start items-center w-full lg:w-1/2 h-fit">
            <h3 className="text-lg font-semibold">Socials •</h3>
            <ul className="grid grid-cols-4 gap-2">
              <li>
                <a href="#" className="hover:translate-y-1"><Facebook size={22} strokeWidth={1} className="hover:-translate-y-1 transition-all hover:fill-accent" /></a>
              </li>
              <li>
                <a href="#">
                  <Instagram size={22} strokeWidth={1} className="hover:-translate-y-1 transition-all hover:fill-accent"/>
                </a>
              </li>
              <li>
                <a href="#">
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
    </div>
  );
}
