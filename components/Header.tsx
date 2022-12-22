import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import { json } from "node:stream/consumers";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const workSocials = socials.filter((social) => ['LinkedIn', 'GitHub'].includes(social.title));
  return (
    <header className="sticky top-0 px-4 md:px-10 flex items-start justify-between mx-auto z-50 xl:items-center bg-transparent h-20 pt-3 max-w-screen-2xl">
      <motion.div
        className="flex flex-row items-center relative right-4"
        initial={{
          x: -500,
          opacity: 0,
          scale: 2.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.3,
        }}
        viewport={{ once: true }}
      >
        {workSocials.map((social) => (
          <SocialIcon key={social._id} url={social.url} bgColor="transparent" fgColor="currentColor" className="text-white hover:text-yellow-500 scaleBtn"/>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-white cursor-pointer group"
        initial={{
          x: 500,
          opacity: 0,
          scale: 2.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.3,
        }}
        viewport={{ once: true }}
      >
        <SocialIcon url="#contact" network="email" bgColor="transparent" fgColor="currentColor" className="text-white group-hover:text-yellow-500 scaleBtn" />
        <a href="#contact"aria-label="Get In Touch"><p className="uppercase hidden sm:inline-flex text-sm scaleBtn group-hover:text-yellow-500">Get In Touch</p></a>
      </motion.div>
    </header>
  );
}
