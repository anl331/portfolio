import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { isIOS, osVersion } from "react-device-detect";
import _, { sortBy } from "underscore";


type Props = {
  experience: Experience[];
};

export default function WorkExperience({ experience }: Props) {
  const sortedExperiences = _.sortBy(experience, "dateStarted").reverse();



  return (
    <motion.div
      className={`grid grid-rows-[17%_1fr] justify-center ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className=" grid items-end justify-center pl-5">
        <h3 className="uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">Experience</h3>
      </div>

      <div
        className={`my-auto grid grid-flow-col w-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-transparent scrollbar-thumb-rounded-full scrollbar-thin max-w-screen-xl`}
      >
        {sortedExperiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>

  );
}
