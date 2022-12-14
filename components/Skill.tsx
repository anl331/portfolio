import React from "react";
import { motion } from "framer-motion";
import { Skill as currentSkill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  skill: currentSkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? "200%" : "-200%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 mx-auto overflow-hidden rounded-full border border-gray-500 filter group-hover:grayscale group-hover:border-yellow-500 transition duration-300 ease-in-out"
      >
        <Image layout="fill" objectFit="cover" objectPosition="center" src={urlFor(skill?.image).url()} alt="" />
      </motion.div>

      <div className="absolute transition opacity-0 group-hover:opacity-80 duration-300 ease-in-out rounded-full">
        <div className="flex items-center justify-center bg-[#2C313A] rounded-full border border-yellow-500  w-14 h-14 lg:w-20 lg:h-20">
          <p className="sm:text-xl font-bold opacity-100">{skill.progress}%</p> 
        </div>
      </div>
    </div>
  );
}
