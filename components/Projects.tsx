import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";


type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {

  return (
    <motion.div
      className={`relative flex flex-col items-center text-center justify-center mx-auto      ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 ">
        <h3 className="uppercase tracking-[16px] text-gray-500 text-2xl">Projects</h3>
      </div>

      <div className=" relative flex items-center flex-grow w-full snap-x snap-mandatory scrollbar scrollbar-track-transparent scrollbar-thumb-[#2C313A] scrollbar-thumb-rounded-full z-20 ">
        {projects?.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center snap-always flex flex-col space-y-5 items-center justify-center px-6" key={i}>
            <motion.img
              src={urlFor(project.image).url()}
              alt=""
              className="max-w-[80%] sm:max-w-[42%]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />

            <div className="max-w-3xl space-y-6">
              <h4 className="text-xl font-semibold sm:text-[1.4] md:text-[1.7rem] lg:text-4xl">
                <span className="underline underline-offset-4 md:underline-offset-8 decoration-yellow-500">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-xs text-gray-500">Tech Stacked Used</p>
                <div className="flex items-center justify-center space-x-2">
                  {project.technologies.map((techStack) => (
                    <img src={urlFor(techStack.image).url()} key={techStack._id} alt="" className="w-10 h-10" />
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base md:text-left">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[35%] sm:top-[40%] bg-[#2C313A] left-0 h-[300px] sm:h-[400px] -skew-y-[6deg] z-0"></div>
    </motion.div>
  );
}
