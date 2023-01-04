import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { isIOS, osVersion } from "react-device-detect";
import _, { sortBy } from "underscore";
import Dot from "./Dot";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Props = {
  experience: Experience[];
};

export default function WorkExperience({ experience }: Props) {
  const sortedExperiences = _.sortBy(experience, "dateStarted").reverse();

  const responsive = {
    0: { items: 1 },
    678: { items: 2, itemsFit: 'fill' },
    1240: { items: 3, itemsFit: "fill" },
  };

  return (
    <motion.div
      className={`relative grid grid-rows-[8rem_1fr] justify-center ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className=" grid items-end justify-center pl-5">
        <h3 className="uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">Experience</h3>
      </div>

      <div
        className={`w-screen snap-x snap-mandatory overflow-x-hidden scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-transparent scrollbar-thumb-rounded-full scrollbar-thin max-w-screen-xl select-none my-auto justify-center`}
      >
        <AliceCarousel
          responsive={responsive}
          controlsStrategy="alternate"
          mouseTracking
          disableButtonsControls
          keyboardNavigation
        >
          {sortedExperiences?.map((experience, cardIndex) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </AliceCarousel>
      </div>
    </motion.div>
  );
}
