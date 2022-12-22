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
      className={`flex flex-col items-center justify-start mx-auto relative px-7 md:text-left text-center max-w-7xl snap-y snap-mandatory w-screen ${
        osVersion >= "15.4" && isIOS ? "min-h-[100svh]" : "min-h-screen"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <div className="relative flex flex-col-reverse pl-5 pb-5 min-h-[9rem]">
        <h2 className="uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">About</h2>
      </div>

      <div className="relative mx-auto space-y-5 w-full md:grid grid-cols-3 h-full flex flex-col items-center ">

       {/* Desktop Picture */}
        <motion.div
          className="hidden md:block left-6 relative mx-auto overflow-hidden my-auto "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image className="scale-95" width={400} height={552}  src={urlFor(userInfo.aboutPic).url()} alt=""  />
        </motion.div>

       {/* Mobile Picture */}
        <motion.div
          className="flex md:hidden "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image  width={250} height={250}  src={urlFor(userInfo.aboutPicMobile).url()} alt=""  />
        </motion.div>



        <div className="space-y-6 sm:px-10 col-span-2 flex flex-col justify-center ">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Here's a <span className=" pl-2 tracking-[10px] text-base font-bold align-middle">little</span> about me
          </h2>
          <div className={!isMobile ? "space-y-4 text-justify" : "space-y-4 snap-end snap-always pb-6 text-justify"}>
            <p className="text-sm lg:text-base">{userInfo.backgroundInformation}</p>
            <p className="text-sm lg:text-base ">{userInfo.backgroundInformation2}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
