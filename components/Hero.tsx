import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import { motion } from "framer-motion";
import { UserInfo } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";
import Image from "next/image";

type Props = {
  userInfo: UserInfo;
};

export default function Hero({ userInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm ${userInfo?.firstName} :)`, "guyWhoLovesFashion.ts", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <div className={`relative flex flex-col items-center justify-center text-center w-screen ${osVersion >= "15.4" && isIOS ? "min-h-[100svh]" : "h-screen"} `}>
      <BackGroundCircles />
      <div className="relative space-y-8 z-10">
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 2.9 }}
          viewport={{ once: true }}
          className=""
        >
          <Image className="flex-shrink-0 rounded-full mx-auto" width={150} height={150} objectFit="cover" objectPosition="center" src={urlFor(userInfo.heroImage).url()} alt=""  />
        </motion.div>

        <div className="w-screen flex flex-col items-center justify-center">
          <motion.h2
            className="text-xs md:text-sm uppercase pb-3 tracking-[5px] md:tracking-[10px] text-gray-500"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 2.9 }}
            viewport={{ once: true }}
          >
            {userInfo?.role}
          </motion.h2>
          <h1 className="px-10 text-2xl font-semibold md:text-5xl ld:text-6xl ">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F2DD00" />
          </h1>

          <motion.div
            className="pt-6 sm:space-x-4 flex flex-wrap px-5 -space-x-2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 2.9 }}
            viewport={{ once: true }}
          >
            <a href="/#about" aria-label="About me"><p className="heroButton">About</p></a>
            <a href="/#experience" aria-label="Work Experience"><p className="heroButton">Work Experience</p></a>
            <a href="/#skills" aria-label="My Skills"><p className="heroButton">Skills</p></a>
            <a href="/#projects" aria-label="My Projects"><p className="heroButton">Projects</p></a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
