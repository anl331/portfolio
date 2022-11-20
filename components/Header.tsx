import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 px-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center bg-gradient-to-b from-[#282C34] via-[#282C34]/95 h-20 pt-3 min-w-full ">
      <motion.div
        className="flex flex-row items-center"
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
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} bgColor="transparent" fgColor="#6B7280" />
        ))}

        {/* <SocialIcon url="https://www.instagram.com/_itsanl" bgColor="transparent" fgColor="#6B7280" />
        <SocialIcon url="https://www.twitter.com/_itsanl" bgColor="transparent" fgColor="#6B7280" />
        <SocialIcon url="https://www.linkedin.com/_itsanl" bgColor="transparent" fgColor="#6B7280" /> */}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-500 cursor-pointer"
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
        <SocialIcon url="#contact" network="email" bgColor="transparent" fgColor="#6B7280" />
        <p className="uppercase hidden sm:inline-flex text-sm">Get In Touch</p>
      </motion.div>
    </header>
  );
}
