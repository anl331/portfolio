import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="relative flex flex-col items-center flex-shrink-0 max-h-[480px] min-h-[480px] sm:max-h-[530px] sm:min-h-[530px] w-[350px] sm:w-[400px] md:w-[430px] snap-always snap-center px-3 py-5 pb-8 bg-[#0d0d0d] outline-border space-y-4 mb-2 scale-[.95] outer-card">
      <div className="z-10 relative px-5 items-center flex w-full ">

        <div
          className="relative aspect-square h-auto w-28 md:w-52 rounded-lg md:rounded-full mr-5 overflow-hidden"
        >
          <Image layout="fill" objectFit="cover" objectPosition="center" src={urlFor(experience.companyImage).url()} alt=""  />
        </div>

        <div className="text-left pt-2">
          <h4 className="text-lg font-light sm:text-[1.4] md:text-[1.7rem] ">{experience.jobTitle}</h4>
          <h3 className="text-xl font-bold sm:text-[1.4] md:text-[1.7rem]  sm:pb-2">{experience.company}</h3>
          <p className="uppercase text-white/50 text-sm pt-1">
            {new Date(experience.dateStarted).toLocaleDateString("en-us", { year: "numeric", month: "short" })} - {" "}
            {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toLocaleDateString("en-us", { year: "numeric", month: "short" })}
          </p>
        </div>
      </div>

      <div className="z-10 px-4 space-y-1 flex flex-col text-left items-start w-full">
        <div className="flex flex-col ">
          <p className="text-xs text-white/50 py-2">Technology Used</p>
          <div className="flex space-x-1 overflow-x-auto">
            {experience.technology.map((techStack) => (
              <Image key={techStack._id} width={36} height={36} objectFit="cover" objectPosition="center" src={urlFor(techStack.image).url()}  alt="" />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-white/50 py-2">Highlights</p>
          <ul className="list-disc space-y-4 ml-3 text-xs sm:text-sm pl-4 pr-1 overflow-y-auto h-[250px] sm:h-[235px] overflow-mobile scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-[#303640] scrollbar-thumb-rounded-full scrollbar-thin">
            {experience.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="z-0 absolute w-full h-full -top-4 rounded-lg scale-[0.98]  bg-[#0d0d0d]"/>
    </article>
  );
}
