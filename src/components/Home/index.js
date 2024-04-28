import React from 'react';
import { Banner } from "./../Banner";
import { Achievement } from "../Achievement";
import { Projects } from "./../Projects";
import {Experience} from "./../Experience"
import {Hero} from "./../Hero"
import StarEffect from '../Sparkle/sparkle';
import { Spotlight } from '../Spotlight';
import { Skill } from '../Skill';
export function Home() {
  return (
    <>
      {/* <Spotlight /> This will activate the star effect */}
      <Banner />
      <Skill />
      {/* <Skills /> */}
      <Projects />
      <Experience />
      <Achievement />
    </>
  );
}
