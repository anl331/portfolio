import React from 'react';
import { motion } from "framer-motion";


type Props = {}

export default function BackGroundCircles({}: Props) {
  return (
    <motion.div 
    className="relative -top-6 flex justify-center items-center "
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
        <div className="absolute border  border-yellow-500 rounded-full h-[200px] w-[200px] mt-52 animation-delay-3000 animate-ping"/>
        <div className="absolute border border-yellow-500 rounded-full h-[300px] w-[300px] mt-52 animation-delay-3000 animate-ping"/>
        <div className="absolute border border-yellow-500/20 rounded-full h-[400px] w-[400px] mt-52  animate-pulse"/>
        <div className="absolute border border-gray-500/80 rounded-full h-[500px] w-[500px] mt-52 animation-delay-3000 animate-ping"/>
        <div className="absolute border border-yellow-500/20 rounded-full h-[600px] w-[600px] mt-52  animate-pulse"/>
        <div className="absolute border border-gray-500/20 rounded-full h-[800px] w-[800px] mt-52  animate-pulse"/>
    </motion.div>
  )
}