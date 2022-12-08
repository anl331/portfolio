import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { isIOS, osVersion } from "react-device-detect";
import _, { sortBy } from 'underscore';


type Props = {
  experience: Experience[]
};

export default function WorkExperience({experience}: Props) {
  const sortedExperiences = _.sortBy(experience, 'dateStarted').reverse()

  return (
    <motion.div 
    className={`flex flex-col items-center text-center justify-center mx-auto max-w-7xl  ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    // viewport={{ once: true }}
    transition={{ duration: 0.75 }}
    >
      
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 ">
        <h3 className="uppercase tracking-[16px] text-gray-500 text-2xl">
        Experience
        </h3>
      </div>

        <div className={` relative flex items-center ${experience.length > 3 ? "" :"sm:justify-center"} flex-grow w-full snap-x snap-mandatory  scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-[#2C313A] scrollbar-thumb-rounded-full scrollbar-thin mt-5 pl-4 pr-5`}>
          {sortedExperiences?.map(experience => (
            <ExperienceCard  key={experience._id} experience={experience}/>
          ))}
        </div>
    </motion.div>
  );
}