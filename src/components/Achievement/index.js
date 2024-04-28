import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/imgs/color-sharp.png";
import { useState } from "react";
import "./skills.css";
import {ComputersCanvas} from '../canvas/obj'
import { Card } from "../Card";
// import {parchmentPaper} from '../../assets/imgs/parchmentpaper.svg'
import { Parch } from "../../assets/imgs/parch";
const achievementdata = [
  {
    title:"Winner",
    subtitle:"Smart India Hackathon",
    desc:"organized by MHRD, Govt. of India. Built a hardware + software based smart Bus ecosystem to resolve issue in existing system"
  },
  {
    title:"Runner Up",
    subtitle:"UIA Hackathon",
    desc:"particated in 36 hour hackathon organized by Ministry of Education and AICTE along with 22 African nations"
  },
  {
    title:"Awarded",
    subtitle:"AnitaB.org Inclusion Scholarship ",
    desc:"got the opportunity to attend Grace Hopper Celebration 2024 and the mentorship from industry veteran "
  }
]
export const Achievement = () => {
  const [light,setLight] = useState(false)
  return (
    <div className="bg-black ">
<div className="bg-black pt-16 flex flex-row justify-between "> 
      <div className="h-auto"> {/* Adjust the width and margin if needed */}
        <h1 className="mb-2 text-5xl font-extrabold text-white font-serif text-left p-8 ml-24 mt-16">
          Spotlight
          <span className="mb-2 ml-4 text-5xl font-extrabold font-serif mb-4 bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
            moments
          </span>
        </h1>
        <p className="mb-1 text-xl font-bold leading-snug tracking-tight md:text-2xl ml-24 font-serif text-white"> Making a Mark, One Milestone at a Time</p>
        {/* <h1 className="font-extrabold text-left p-8 ml-24 text-white" onClick={() => setLight(!light)}>Lumos</h1> */}
      </div>
      <div className="items-start" style={{  }}> 
        <ComputersCanvas light={true} />
      </div>
    </div>
    <div className="flex flex-row" style={{ marginTop:'-15vh'}}>
    {achievementdata.map((achievement)=> <Card achievement={achievement}/>)}
</div>


    </div>

  );
};
