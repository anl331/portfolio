import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { isIOS, osVersion } from "react-device-detect";


type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      className={`flex flex-col items-center  text-center justify-center mx-auto relative     ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 ">
        <h3 className="uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">Skills</h3>
        
      </div>

      <div className="relative flex flex-col justify-center items-center flex-grow w-screen">
        <h3 className="text-xs md:text-sm lg:text-lg max-w-sm uppercase pb-10 tracking-[1px] md:tracking-[3px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#876512] via-[#DC42A4] to-[#5917B0]">Hover over a skill for current proficiency.</h3>

        <div className="grid grid-cols-4 gap-3 ">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length / 2, skills.length ).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
