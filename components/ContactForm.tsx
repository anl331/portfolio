import React, { useEffect } from "react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

export default function ContactForm({}: Props) {
  const form = useRef<any>(null);
  const captcha = useRef<any>(null);
  const name = useRef<any>();
  const telephone = useRef<any>();
  const email = useRef<any>();
  const message= useRef<any>();
  const [toggle, setToggle] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID! ; 
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_PUBLID_ID!;
  const siteKey = process.env.NEXT_PUBLIC_SIE_KEY!;

  const sendEmail = async (e: any) => {
    e.preventDefault();

    await captcha.current.executeAsync();
    const token = await captcha.current.getValue();

    const templateParams = {
      "g-recaptcha-response": token,
      name: name.current.value,
      telephone: telephone.current.value,
      email: email.current.value,
      message: message.current.value,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
        form.current.reset();
        setToggle(true);
        setTimeout(() => {
          console.log("Sent! " + result.text);
          setToggle(false);
        }, 2800)
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <form method="POST" ref={form} onSubmit={sendEmail} id="myForm" className="w-screen px-5 min-w-[200px] max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-1 ">
          <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label className="tw-label">Name*</label>
            <input ref={name} className="tw-input" type="text" placeholder="" required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="tw-label">Telephone*</label>
            <input className="tw-input" type="tel" ref={telephone}  placeholder="" required />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="tw-label">E-mail*</label>
            <input className="tw-input" type="email" ref={email}  required />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="tw-label">Message*</label>
            <textarea className="no-resize tw-input h-48 resize-none" ref={message} required></textarea>
          </div>
        </div>

        {<ReCAPTCHA className="mb-5" ref={captcha} sitekey={siteKey} size="invisible" />}

        <div className="md:flex md:items-center">
          <div className="w-full">
            <button type="submit" className="shadow bg-yellow-500 hover:bg-yellow-500 focus:shadow-outline focus:outline-none font-bold py-3 px-12 rounded  active:scale-90 transition duration-150 cursor-pointer w-full ">Send</button>
          </div>
        </div>
      </form>

      <AnimatePresence>
          {toggle ? (
            <motion.div
              className={`z-50 fixed text-sm rounded-md bg-[#303640] border-b-4 border-yellow-500 shadow-xl max-w-[475px] inline-flex left-5 sm:left-0 right-5 sm:right-5 top-2 sm:top-3 mx-auto p-5`}
              initial={{ y: -100 }}
              animate={{ y: toggle ? 0 : -100}}
              transition={{ type: "spring", damping: 33, stiffness: 300 }}
              exit={{ y: -100}}
            >
              <p className="text-center italic w-full lg:inline text-xs py-1"  >Thank you for reaching out, your message was sent.</p>
            </motion.div>
          ) : null}
      </AnimatePresence>

      {/* 
      
      TODO:

      1. Disable contact form button when sending message
      
      */}
    </>
  );
}
