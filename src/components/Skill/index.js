import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./skill.css";
import ReactLogo from "../../assets/imgs/reactlogo.svg";
import GoLogo from "../../assets/imgs/gologo.svg";
import CypressLogo from "../../assets/imgs/cypresslogo.png";
import NextLogo from "../../assets/imgs/nextlogo.jpg";
import GithubLogo from "../../assets/imgs/githublogo.png";
import CssLogo from "../../assets/imgs/csslogo.png";
import HtmlLogo from "../../assets/imgs/htmllogo.png";
import UXLogo from "../../assets/imgs/UXLogo.png";
import GSAPLogo from "../../assets/imgs/SAP.png"
import JavascriptLogo from "../../assets/imgs/jslogo.png"
import Profile from "../../assets/imgs/skillProfile.png"
import navIcon1 from "../../assets/imgs/nav-icon.svg";
import navIcon2 from "../../assets/imgs/github-svgrepo-com.svg";
import navIcon3 from "../../assets/imgs/icons8-twitter.svg";
import { useNavigate, useLocation } from "react-router-dom";
import PythonLogo from "../../assets/imgs/python-svgrepo-com.svg"
export const Skill = () => {
    const reactLogoRef = useRef();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
      gsap.to(reactLogoRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none"
      });
    }, []);
  const gradientBgClass = "bg-gradient-to-b from-space-blue to-black";

  return (
    <section className={`skillContainer h-screen skillpage`} id="skills">
         {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
      <div className="flex gap-4 px-36 py-12 h-5/6">
        <div className="flex flex-col gap-4 flex-grow w-1/4">
          <div className=" rounded-6xl h-1/2 w-full ux-gradient z-2 ">
            {" "}
            <div className="flex justify-center items-center h-full ">
              <img
                src={UXLogo}
                alt="HTML logo"
                className="h-3/4 w-3/4 object-contain"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full h-full">
            <div className="flex flex-col w-1/2 gap-4 flex-grow">
              <div className="rounded-6xl h-1/2 w-full go-gradient z-2">
                {" "}
                {/* <div className="flex justify-center items-center h-full"> */}
                  <img
                    src={GoLogo}
                    alt="HTML logo"
                    className="object-contain"
                  />
                {/* </div> */}
              </div>
              <div className="rounded-6xl p-4 h-full w-full circular-gradient z-2">
                {" "}
                {/* <div className="flex justify-center items-center h-full"> */}
                  <img
                    src={CssLogo}
                    alt="HTML logo"
                    className="object-contain"
                  />
                {/* </div> */}
              </div>
              <div className="rounded-3xl  h-1/4 w-full z-2">
                {" "}
                {/* <div className="flex justify-center items-center h-full"> */}
                  <img
                    src={CypressLogo}
                    alt="HTML logo"
                    className="object-contain rounded-3xl"
                  />
                {/* </div> */}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 flex-grow">
              <div className="rounded-6xl p-2 h-1/3 ts-gradient z-2 ">
                <h1 className='text-6xl font-sans font-bold'>TS</h1>
              </div>
              <div className="rounded-6xl h-2/3 python-gradient z-2 ">
              <img
                    src={PythonLogo}
                    alt="HTML logo"
                    className="object-contain rounded-6xl"
                  />              </div>
              <div className="rounded-6xl  h-1/3 z-2">
              <img
                    src={GSAPLogo}
                    alt="HTML logo"
                    className="object-contain rounded-6xl"
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-grow w-1/2">
       {/* <div className="moving-border z-2 "> */}
       <div className="bg-blue-box ">
      <div className="container-card z-2 ">
      <div className="profile-circle">
      <img src={Profile} alt="Profile" />
    </div>
           {/* <h1 className='text-center text-5xl font-sans font-bold'>I am </h1>
         <div className='text-white text-xl font-sans leading-normal tracking-wide tracking-wider mt-4'>
         a passionate learner, tech enthusiast. I enjoy solving complex problems. My goal? To craft smooth, smart code that makes people's lives <span className='font-bold' >easier !</span> Whether you need a dynamic web application, a responsive website, or a robust API, I'm your person. My tech journey, rooted in curiosity, has led me from solo learning to collaborative victories in hackathons, contribution to open-source .Now at Keploy, I continue to evolve, innovate, and contribute to the tech community.
         <br /> */}
                   <h2 className="font-sans font-bold ">I am</h2>
          <p class=" font-sans text-2xl bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent "> Software Developer</p>
          <p class="font-sans">          I enjoy solving complex problems and creating efficient,
                    scalable code that delivers a great user experience. Whether
                    you need a dynamic web application, a responsive website, or
                    a robust API, I can help bring your vision to life.
</p>
<div className="social-icon p-2">
              <a
                href="https://www.linkedin.com/in/hermione-dadheech/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Hermione2408"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://twitter.com/HermioneDadhee1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
              {/* <button className="vvd" onClick={() => navigate("/contact")}>
                <span>Let's connect</span>
              </button> */}
            </div>
            <div className='animatedButtonContainer'>
            <a href="https://youtube.com/c/shortcode" target="_blank" class="animated-button font-sans text-xl">
    <span></span> 
    <span></span>
    <span></span>
    <span></span>
    Let's Connect 🚀
</a>
            </div>


{/* <span > I am good at </span> */}
         {/* </div> */}
         {/* </div> */}
         </div>
         </div>


         <div className="rounded-6xl w-full h-1/3 js-gradient z-2">    <img
                 src={JavascriptLogo}
                 alt="HTML logo"
                 className=" h-full object-contain"
               />
               </div>
       </div>

        <div className="flex flex-col gap-4 flex-grow w-1/4">
          <div className="flex gap-4 h-1/4">
            <div className="rounded-6xl flex-grow p-4 next-gradient z-2">
              {" "}
              <div className="flex justify-center items-center h-full  ">
                <img
                  src={GithubLogo}
                  alt="HTML logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="rounded-6xl flex-grow p-4 my-gradient-div z-2 ">
              <div className="flex justify-center items-center h-full ">
                <img
                  src={HtmlLogo}
                  alt="HTML logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="rounded-6xl p-4 h-1/4 white-gray-gradient z-2">
            {" "}
            <div className="flex justify-center items-center h-full ">
              <img
                src={NextLogo}
                alt="HTML logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className=" h-1/2 z-2 ">
            {" "}
            <div className="flex justify-center items-center h-full react-gradient rounded-6xl">
              <img
                src={ReactLogo}
                alt="HTML logo"
                className="h-full w-full object-contain"
                ref={reactLogoRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
