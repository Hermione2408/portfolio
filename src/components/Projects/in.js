'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import FeaturesBg from '@/public/images/record-tc4155904b397e0fbc1237.gif';
// import TestDeduplication from '@/public/images/record-replaye538dde2a6e078f1b5a5.gif';
// import NativeIntegration from '@/public/images/replay-tc31305e1d2286fe485b27.gif';
// import testAndStubsGen from '@/public/images/TestGenHighlighted.json';
// import deDuplication from '@/public/images/CaptureAndReplayV2.json';
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
// import projImg1 from '../../assets/imgs/Fotor_AI.png';
// import projImg2 from '../../assets/imgs/ground-water-map.png';
// import projImg3 from '../../assets/imgs/istockphoto-1149099517-640x640.jpg';
// import OSSimg from '../../assets/imgs/opensource.jpeg';
// import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook
// import { ScrollTrigger } from 'gsap/all';
// import _ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);



// src/components/Projects.js
import React, {useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './projects.css'; // Ensure you have this CSS file for styling
import projImg1 from '../../assets/imgs/Fotor_AI.png';
import projImg2 from '../../assets/imgs/ground-water-map.png';
import projImg3 from '../../assets/imgs/istockphoto-1149099517-640x640.jpg';
import OSSimg from '../../assets/imgs/opensource.jpeg';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// const TestAndStubGenerationImage = () => {
//   return (
//     <div className="inline-flex flex-col w-full imageToShow " id="img-1">
//       {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
//       <div className=" mb-2 h-[50%]">
//         <LottiePlayer VideoPath={testAndStubsGen} />
//       </div>
//       <CopyCode />
//     </div>
//   );
// };

// const TestDuplicationImage = () => {
//   return (
//     <div className="w-full relative imageToShow" id="img-2">
//       {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
//       {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
//       <LottiePlayer VideoPath={deDuplication} className="h-[60vh]" />
//       <CopyCode />
//     </div>
//   );
// };

// const CopyCode = () => {
//   const codeRef = useRef<HTMLDivElement>(null);

//   const copyButtonRef = useRef<HTMLButtonElement>(null);
//   // const heightFix = () => {
//   //   if (tabs.current && tabs.current.parentElement)
//   //     tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
//   // };
//   useEffect(() => {
//     // heightFix();

//     const clipboard = new ClipboardJS(copyButtonRef.current!, {
//       target: () => codeRef.current!,
//     });

//     clipboard.on("success", (e) => {
//       // You can customize the success behavior here (e.g., show a notification).
//       console.log("Copied to clipboard:", e.text);
//     });

//     return () => {
//       clipboard.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={codeRef}
//         className="bottom-0 flex items-center w-full mb-8 overflow-hidden text-left md:mb-0 animate-float"
//       >
//         <div className="flex-grow w-7/12 p-3 bg-gray-900 rounded-md overflow-clip">
//           <pre className="w-11/12 text-xs text-green-300 truncate md:text-sm lg:text-base">
//             <code>
//               $ curl -O
//               https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh &&
//               source keploy.sh
//             </code>
//           </pre>
//         </div>
//         <div className="absolute right-3 bottom-2">
//           <button
//             ref={copyButtonRef}
//             onClick={() =>
//               navigator.clipboard.writeText(
//                 "curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"
//               )
//             }
//             className="ml-2"
//           >
//             <Image src={CopyButton} alt="Copy" className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
  const projects = [
    // {id: "img-1",
    //   title: "Open source",
    //   githubLink: "https://github.com/keploy/typescript-sdk/pulls/Hermione2408",
    //   description:
    //     "As an enthusiastic and committed beginner contributor to the Keploy open source community, I have actively participated in the development and improvement of Keploy projects.",
    //   imgUrl: OSSimg,
    //   techStack: ["Typescript", "JavaScript"],
    // },
    {id: "img-1",
      title: "Kavach",
      githubLink: "https://github.com/Hermione2408/kavach",
      description: `Allows users to report accidents easily and without hassle.
      Offers a bounty program for reporting violations of law.
      Assistance to users by identifying nearby facilities such as hospitals, police stations, and tow trucks.
      Integrated with emergency services for quick and efficient response in case of an accident.`,
      // imgUrl: kavachImg,
      imgUrl: projImg1,
      techStack: ["JavaScript", "React", "JSON server"],
    },
    {id: "img-2",
      title: "Aqua",
      githubLink: "https://github.com/Hermione2408/Aqua",
      description: `Developed a web app for hydrogeological aquifer mapping and characteristics of water using React.js, D3.js.
      Worked on the data collection, visualization and future prediction.
      Had a Role based access control (RBAC) mechanism in the app for the data collectors, supervisors, administrators and commutators.`,
      // imgUrl: aquaImg,
      imgUrl: projImg2,
      techStack: ["JavaScript", "React"],
    },
    {id: "img-3",
      title: "E-Conductor Bus System",
      githubLink: "",
      description: `Made a hardware plus software based model for E-conductor and continuous tracking of buses.
      Admin panel for tracking and updating buses.`,
      // imgUrl: eConductorImg,
      imgUrl: projImg3,
      techStack: ["JavaScript", "React"],
    },
  ];

const TextSection = ({
  svg,
  heading,
  description,
  btnDescription,
}) => {
  return (
    <div className="flex flex-col items-center pl-4 mt-6 mb-8 text-center md:block md:mb-0 h-min md:text-left md:mt-0 text-details">
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 bg-white rounded-full ">
        {svg}
      </div>
      <div className="mb-1 text-2xl font-bold leading-snug tracking-tight md:text-4xl text-secondary-300">
        {heading}
      </div>
      <div className="text-gray-600 md:text-lg">{description}</div>
      {btnDescription && (
        <div>
          <a
            className="btn mt-8 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
            href="/stub-generation"
          >
            {btnDescription}
          </a>
        </div>
      )}
    </div>
  );
};

export const Projects=()=> {
  const container = useRef(null);

  useGSAP(
    () => {
      const details = gsap.utils.toArray(".detail");

      const images = gsap.utils.toArray(".imageToShow");

      gsap.set(images[1], { opacity: 0 });

      ScrollTrigger.create({
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".right-content",
      });

      ScrollTrigger.create({
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".heading-text",
      });

      details.forEach((detail) => {
        gsap.to(detail, {
          scrollTrigger: {
            trigger: detail,
            start: "center center",
            scrub: 1,
          },
          opacity: 0,
        });
      });

      gsap.to(images[0], {
        scrollTrigger: {
          trigger: details[1],
          start: "center center",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
      });
      gsap.to(images[1], {
        scrollTrigger: {
          trigger: details[1],
          start: "center center",
          end: "center center",
          scrub: 1,
        },
        opacity: 1,
      });
    },
    { scope: container }
  );

  return (
    <>
      <section ref={container} className="relative hidden lg:block bg-white	">
        <div className="absolute left-1/2 transform -translate-x-1/2 max-w-full pt-8 mx-auto mt-16 text-center top-8 heading-text">
          <h1 className="mb-2 text-5xl font-bold text-secondary-300 text-center">
            Projects
          </h1>
          <p className="text-xl text-gray-600">
            simplified testing, capturing network interactions and generating
            automated tests
          </p>
        </div>
        <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[30vh] pb-[50vh]  mx-auto  content-container">
        <div className="mt-20 space-y-[50vh]">
  {projects.map((project, index) => (
    <div
      className="flex items-center detail"
      data-marker-content={project.id}
      key={project.id}
    >
      <TextSection
        svg={
          <svg
            className="w-6 h-6 fill-primary-300"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={project.svgPath} />
          </svg>
        }
        heading={project.title}
        description={project.description}
        // btnDescription={project.btnDescription}
      />
    </div>
  ))}
</div>
          <div className="flex items-center [&>*]:absolute relative  justify-center h-min [&>*]:top-0 right-content">
          <div className="inline-flex flex-col w-full imageToShow " id="img-1">
            <img src={projImg1} alt="proj1"/>
            </div>
            <div className="inline-flex flex-col w-full imageToShow " id="img-2">
            <img src={projImg2} alt="proj1"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
