import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { UserInfo } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";
import Image from "next/image";

type Props = {
  userInfo: UserInfo;
};

export default function About({ userInfo }: Props) {
  const [mobileBrowser, setMobileBrowser] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobileBrowser(!mobileBrowser);
    }
  }, []);

  return (
    <motion.div
      className={`flex flex-col items-center justify-center mx-auto relative px-7 md:text-left text-center max-w-7xl sm:pb-10 snap-y snap-mandatory w-screen ${
        osVersion >= "15.4" && isIOS ? "min-h-[100svh]" : "min-h-screen"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
    >
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 pb-5">
        <h2 className="uppercase tracking-[16px] text-gray-500 text-2xl">About</h2>
      </div>

      <div className="relative mx-auto space-y-5 w-full md:grid grid-cols-3">

        <motion.div
          className="relative h-48 w-48 sm:h-60 sm:w-60 md:h-max md:w-full md:aspect-[3/4] mx-auto rounded-full overflow-hidden md:rounded-lg my-auto"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image layout="fill" objectFit="cover" objectPosition="top" src={urlFor(userInfo.profilePic).url()} alt=""  />
        </motion.div>



        <div className="space-y-6 sm:px-10 col-span-2 flex flex-col justify-center ">
          <h2 className="text-2xl font-semibold sm:text-[1.4] md:text-[1.7rem] lg:text-4xl">
            Here is <span className="underline underline-offset-4 md:underline-offset-8 decoration-yellow-500">some</span> background
          </h2>
          <div className={!isMobile ? "space-y-4" : "space-y-4 snap-center snap-always pb-6"}>
            <p className="text-sm lg:text-base">{userInfo.backgroundInformation}</p>
            <p className="text-sm lg:text-base -">{userInfo.backgroundInformation2}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
