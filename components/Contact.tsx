import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const ContactForm = dynamic(() => import("./ContactForm"));
import {  isIOS, osVersion } from "react-device-detect";


type Props = {};

export default function Contact({}: Props) {
  return (
    <motion.div
      className={`relative flex flex-col items-center text-center justify-center mx-auto      ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="h-20"/>

      <div className="">
        <h3 className=" text-center pl-5 uppercase tracking-[16px] text-gray-500 text-2xl">Contact</h3>
      </div>

      <div className=" relative flex items-center flex-grow text-left">
        <ContactForm />
      </div>
    </motion.div>
  );
}
