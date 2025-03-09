"use client"
import { Cat, FileText, Github, Linkedin } from "lucide-react";

export default function Home() {
  const theme = () => {
    const theme = document.getElementsByTagName("body")[0]; 
    if(theme.getAttribute("data-theme") === "lofi") {
      theme.setAttribute("data-theme", "black");
    } else {
      theme.setAttribute("data-theme", "lofi");
    }
  }

  return (
    <div className="w-screen h-fit flex flex-col px-4 font-['Doris']">
      <nav className="flex items-center w-full h-20 text-2xl box-border">
        <div className="flex items-center gap-2">
          <Cat />
          <h1 className="font-mono font-semibold">Yion.dev</h1>
        </div>
      </nav>
      <div className="flex flex-col w-full h-1/4 gap-2">
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
            <input type="checkbox" />
            <div className="swap-on">EN</div>
            <div className="swap-off">MM</div>
          </label>
        </div>
        <div className="card card-side grow py-4">
          <figure className="size-32 rounded-md">
            <img src="/picture.jpg" alt="Yion" />
          </figure>
          <div className="card-body w-1/2 px-4 py-0">
            <div className="card-title">Hi, My name is Yion</div>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita doloremque quia eos at? Sunt.</p>
            <div className="flex items-center justify-end">
              <a href="#" className="btn btn-ghost size-8 p-0 border"><FileText strokeWidth={1} /></a>
              <a href="#" className="btn btn-ghost size-8 p-0 border"><Github strokeWidth={1} /></a>
              <a href="#" className="btn btn-ghost size-8 p-0 border"><Linkedin strokeWidth={1} /></a>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi omnis incidunt assumenda delectus suscipit eius, labore doloremque quisquam sed!</p>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">Software Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi omnis incidunt assumenda delectus suscipit eius, labore doloremque quisquam sed!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col w-full h-fit gap-2">
        <h3 className="text-xl font-semibold">Technologies</h3>
        <div className="card">
          <div className="card-body h-fit p-0">
            <h4 className="card-title">Languages</h4>
            <div className="h-fit grid grid-flow-col justify-start gap-4">
              <span className="flex flex-col items-center justify-center box-border">
                <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                HTML
              </span>
              <span className="flex flex-col items-center justify-center box-border">                
                <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                CSS
              </span>
              <span className="flex flex-col items-center justify-center box-border">               
                <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
                JavaScript
              </span>
              <span className="flex flex-col items-center justify-center box-border">                
                <svg className="size-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/></svg>
                PHP
              </span>
              <span className="flex flex-col items-center justify-center box-border">

              </span>
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

    </div>
  );
}
