import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import { motion } from "framer-motion";
import { UserInfo, SiteInfo } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";
import Image from "next/image";

type Props = {
  userInfo: UserInfo;
  siteInfo: SiteInfo;
};

export default function Hero({ userInfo, siteInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm ${userInfo?.firstName} :)`, "GuyWhosIntoDesign.ai", "<ButLovesToCode />"],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <div
      className={`bg-transparent from-[#070707] via-[#070707] bg-gradient-to-b  relative flex flex-col items-center justify-center text-center  ${
        osVersion >= "15.4" && isIOS ? "min-h-[100svh]" : "h-screen"
      } `}
    >
      {/* <BackGroundCircles siteInfo={siteInfo}/> */}
      <div className="relative space-y-8 z-10">
        <motion.div initial={{ scale: 2, opacity: 0, rotate: -45 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 0.40, delay: 2 }} viewport={{ once: true }}>
          <Image className=" shrink  mx-auto" width={200} height={200} src={urlFor(userInfo.heroImage).url()} alt="" />
        </motion.div>

        <div className="w-screen flex flex-col items-center justify-center">
          <motion.h2
            className=" text-sm md:text-base font-semibold uppercase pb-3 tracking-[5px] md:tracking-[10px]"
            initial={{ scale: 1, opacity: 0, }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            {userInfo?.role}
          </motion.h2>
          <h1 className=" px-10 text-2xl font-semibold md:text-5xl ld:text-6xl ">
            <span className=" mr-3 w-full">{text}</span>
            <Cursor cursorColor="#F2DD00" />
          </h1>

          <motion.div
            className="pt-6 sm:space-x-4 flex flex-wrap px-5 -space-x-2"
            initial={{ scale: .95, opacity: 0, y: 175}}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <a href="/#about" aria-label="About me">
              <p className="heroButton text-xs">About</p>
            </a>
            <a href="/#experience" aria-label="Work Experience">
              <p className="heroButton text-xs">Experience</p>
            </a>
            <a href="/#skills" aria-label="My Skills">
              <p className="heroButton text-xs">Skills</p>
            </a>
            <a href="/#projects" aria-label="My Projects">
              <p className="heroButton text-xs">Projects</p>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 2.9, }}
        viewport={{ once: true }}
        className={`clip-b-radius bg-[url('https://cdn.sanity.io/images/6j55bdp8/production/7d0c18804fff5f8894d156cfb98a3b59effd59cd-1512x900.png')] bg-no-repeat bg-bottom bg-contain md:bg-cover absolute w-screen max-w-screen-2xl h-full bottom-2`}
      />
    </div>
  );
}
