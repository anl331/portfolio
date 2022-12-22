import React from 'react';
import { motion } from "framer-motion";
import { SiteInfo } from "../typings";
import { urlFor } from "../sanity";


type Props = {
  siteInfo: SiteInfo;
};

export default function BackGroundCircles({siteInfo}: Props) {
  return (
    <motion.div 
    className="relative -top-6 flex justify-center items-center"
    initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,1.5,2.5,1],
        opacity: .25,
      }}
      transition={{
        duration: 2.9,
      }}
    >
      <div className={`clip-b-radius bg-[url('https://cdn.sanity.io/images/6j55bdp8/production/7d0c18804fff5f8894d156cfb98a3b59effd59cd-1512x900.png')] bg-no-repeat bg-bottom bg-contain md:bg-cover absolute w-screen max-w-screen-2xl h-full bottom-2`}/>
    </motion.div>
  )
}