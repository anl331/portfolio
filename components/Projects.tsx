import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";
import _, { sortBy } from "underscore";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const sortedPorjects = _.sortBy(projects, "position");

  return (
    <motion.div
      className={`bg-transparent from-[#070707] via-[#070707] bg-gradient-to-t rounded-tl-lg relative flex flex-col items-center text-center justify-around mx-auto ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
    >
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 ">
        <h3 className="z-10 uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">Projects</h3>
      </div>

      <div className=" overflow-y-hidden relative flex items-center flex-grow w-full snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#52208C] scrollbar-thumb-rounded-full z-20 md:px-20">
        {sortedPorjects?.map((project, i) => (
          <div className=" relative w-screen flex-shrink-0 snap-center snap-always flex flex-col space-y-5 items-center justify-center px-6" key={i}>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative "
            >
              <Image width={475} height={500} src={urlFor(project.image).url()} alt="" />
            </motion.div>

            <div className="max-w-3xl space-y-4">
              <h4 className="text-xl font-semibold sm:text-[1.4] md:text-[1.7rem] lg:text-3xl">
                <span className="underline underline-offset-4 md:underline-offset-8 decoration-yellow-500">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex flex-col items-center justify-center space-y-1">
                <p className="text-xs text-white">Tech Stacked Used</p>
                <div className="flex items-center justify-center space-x-2">
                  {project.technologies.map((techStack) => (

                    <Image width={42} height={42} objectFit="cover" objectPosition="center" src={urlFor(techStack.image).url()} key={techStack._id} alt="" />
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base max-w-lg mx-auto">{project.summary}</p>
              <a className="flex projectButton justify-center items-center group backdrop-blur-sm text-white/50" target="_blank" href={project.linkToBuild}>
                <p className=" mt-2">View Github Repo</p>
                <svg className="relative top-[3px] ml-1 fill-white/50 group-hover:fill-yellow-500 transition-all duration-150" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>


      <div className={`clip-t-radius bg-[url('https://cdn.sanity.io/images/6j55bdp8/production/e317aa95c8e7b131bda8644b7d7a1e240325347d-1512x926.png')] bg-no-repeat bg-top bg-contain lg:bg-cover absolute w-full max-w-screen-2xl h-full top-2`}/>

    </motion.div>
  );
}
