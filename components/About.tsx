import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { UserInfo } from "../typings";
import { urlFor } from "../sanity";
import { isIOS, osVersion } from "react-device-detect";


type Props = {
  userInfo: UserInfo ;
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
      className={`flex flex-col items-center justify-center mx-auto relative px-7 sm:text-left text-center max-w-7xl sm:pb-10 snap-y snap-mandatory w-screen ${osVersion >= "15.4" && isIOS ? "min-h-[100svh]" : "min-h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
    >
      <div className="h-20 " />

      <div className="flex flex-col-reverse pl-5 pb-5">
        <h3 className="uppercase tracking-[16px] text-gray-500 text-2xl">About</h3>
      </div>

      <div className="flex-row items-center flex-grow mx-auto space-y-5 sm:flex ">
        <motion.img
          className="h-48 w-48 mx-auto rounded-full object-cover object-top sm:w-56 sm:h-auto md:w-72 md:h-auto sm:rounded-lg lg:w-[375px] xl:h-[475px] sm:inline-flex"
          src={urlFor(userInfo.profilePic).url()}
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        />

        <div className="space-y-6 sm:px-10">
          <h4 className="text-2xl font-semibold sm:text-[1.4] md:text-[1.7rem] lg:text-4xl">
            Here is <span className="underline underline-offset-4 md:underline-offset-8 decoration-yellow-500">some</span> background
          </h4>
          <div className={!isMobile ? "space-y-4" : "space-y-4 snap-end snap-always pb-6"}>
            <p className="text-sm lg:text-base">{userInfo.backgroundInformation}</p>
            <p className="text-sm lg:text-base">{userInfo.backgroundInformation2}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
