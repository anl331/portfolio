import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const ContactForm = dynamic(() => import("./ContactForm"));
import {  isIOS, osVersion } from "react-device-detect";


type Props = {};

export default function Contact({}: Props) {
  return (
    <div
      className={`relative flex flex-col items-center text-center justify-center mx-auto  bg-[#070707] ${osVersion >= "15.4" && isIOS ? "h-[100svh]" : "h-screen"}`}
    >
      <div className="h-20"/>

      <div className="">
        <h3 className="uppercase tracking-[20px] text-white font-bold text-2xl md:text-4xl">Contact</h3>
      </div>

      <div className=" relative flex items-center flex-grow text-left">
        <ContactForm />
      </div>
    </div>
  );
}
