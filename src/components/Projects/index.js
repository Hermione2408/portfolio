'use client';
import { useGSAP } from '@gsap/react'; // <-- import the hook
import styled from 'styled-components'
// src/components/Projects.js
import React, {useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './projects.css'; // Ensure you have this CSS file for styling
import projImg1 from '../../assets/imgs/project1.gif';
import projImg2 from '../../assets/imgs/project2.gif';
import projImg3 from '../../assets/imgs/EconductorBus.gif';
import gitIcon from '../../assets/imgs/github-svgrepo-com.svg'
import OSSimg from '../../assets/imgs/opensource.jpeg';
import {TechStack} from '../TechStack';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
      techStack: [{
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },        ]
    },
    {id: "img-2",
      title: "MyGram",
      githubLink: "https://github.com/Hermione2408/nextjs-project",
      description: `Features like infinite scrolling and optimized external image loading from sources like Unsplash make MyGram not just a technical showcase, but a testament to modern web capabilities, focusing on performance and user engagement."`,
      // imgUrl: aquaImg,
      imgUrl: projImg2,
      techStack: [{
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Next.js",
        image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },        ]
      // ["JavaScript","Next.js", "Redux Toolkit"],
    },
    {id: "img-3",
      title: "E-Conductor Bus System",
      githubLink: "https://drive.google.com/drive/folders/1yBDr-DX-ytAtzNSIhahjJH_1c33KiquH",
      description: `Made a hardware plus software based model for E-conductor and continuous tracking of buses.
      Admin panel for tracking and updating buses.`,
      // imgUrl: eConductorImg,
      imgUrl: projImg3,
      techStack:  [{
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Javascript",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },        ]
    },
  ];

const TextSection = ({
  svg,
  heading,
  description,
  techStack,
  projlink
}) => {
  // const gradientBgClass = "bg-gradient-to-b from-space-blue to-black";

  return (
    <div className={`flex flex-col items-center pl-4 mt-6 mb-8 text-center md:block md:mb-0 h-min md:text-left md:mt-0 text-details `}>
      {/* <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 bg-white rounded-full ">
        {svg}
      </div> */}
      <div className="mb-1 text-2xl font-bold leading-snug tracking-tight md:text-4xl font-serif text-white">
        {heading}
      </div>
      <div className="text-gray-600 md:text-xl font-sans mt-4">{description}</div>
      {techStack && (
        <div className="italic text-gray-600 mt-4">
<div className='SkillList'>
                {techStack?.map((item) => (
                  <div className = "SkillItem mt-4">
                    <img className='SkillImage' src={item.image}/>
                    {item.name}
                  </div>
                ))}
                        <div className="social-icon mt-4 !ml-0">

<a
        href={projlink}
        target="_blank"
        rel="noreferrer"
      >
<img src={gitIcon} alt="" />
      </a>
      </div>
              </div>        </div>
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

      gsap.set(images[2], { opacity: 0 });

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
      gsap.to(images[2], {
        scrollTrigger: {
          trigger: details[2],
          start: "center center",
          end: "center center",
          scrub: 1,
        },
        opacity: 1,
      });
    },
    { scope: container }
  );
  const gradientBgClass = "bg-gradient-to-b-from-dark-blue-to-black";

  return (
    <>   

      <section ref={container} className={`relative hidden lg:block bg-white ${gradientBgClass}`} id="projects"	>
        <div className="absolute left-1/2 transform -translate-x-1/2 max-w-full pt-8 mx-auto mt-16 text-center top-8 heading-text">
          <h1 className="mb-4 text-5xl font-bold font-serif text-center bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
            Projects
          </h1>
          {/* <p className="text-xl text-gray-600">
            simplified testing, capturing network interactions and generating
            automated tests
          </p> */}
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
        techStack={project.techStack}
        projlink={project.githubLink}
        // btnDescription={project.btnDescription}
      />
    </div>
  ))}
</div>
          <div className="flex items-center [&>*]:absolute relative  justify-center h-min [&>*]:top-0 right-content">
          <div className="inline-flex flex-col w-2/5 imageToShow rounded-lg next-gradient " id="img-1">
            <img src={projImg1} alt="proj1" className="max-w-xs pt-6 pb-2 px-2"/>
            </div>
            <div className="inline-flex flex-col w-full imageToShow rounded-lg next-gradient " id="img-2">
            <img src={projImg2} alt="proj1" className='py-6 px-4 w-full'/>
            </div>
            <div className="inline-flex flex-col w-full imageToShow rounded-lg next-gradient " id="img-3">
            <img src={projImg3} alt="proj1" className='py-6 px-4 w-full'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
