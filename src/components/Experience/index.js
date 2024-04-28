import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
    // className="custom-timeline-element"
    
    contentStyle={{
      background: 'linear-gradient(71deg, #080509, #1a171c, #080509)',
      color: '#fff',
      boxShadow: '0 8px 16px rgba(19, 7, 50, 0.5)',
      borderRadius: '45px',
      padding: '40px',
      position: 'relative',
      zIndex: 2,
      // Any additional styling you want from .container-card
    }}
      contentArrowStyle={{ borderRight: "7px solid  #010002" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{
            width: '100%', // Adjust the size as needed
            height: '100%', // Adjust the size as needed
            objectFit: 'contain', // Keep aspect ratio
          }}
        />
      }
    >
      {/* <div className="bg-blue-box "> */}
      <div>
        <h3 className='text-white text-2xl font-bold font-serif'>{experience.title}</h3>
        
        <p
          className='font-sans text-2xl bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent '
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 list-disc ml-3 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-xl pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      {/* </div> */}
    </VerticalTimelineElement>
  );
};

export const Experience = () => {
  return (
    <div className="bg-black pt-16" id="experience">
      <motion.div variants={textVariant()}>
        {/* <p className={`text-center`}>
          What I have done so far
        </p> */}
        <h1 className="mb-2 text-5xl font-bold text-white font-serif text-center">
          Work 
          <span className="mb-2 ml-6 text-5xl font-extrabold font-serif mb-4 bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
           Experience
        </span>
        </h1>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};