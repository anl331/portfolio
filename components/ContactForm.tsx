import React from "react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

type Props = {};

export default function ContactForm({}: Props) {

  const form = useRef<any>(null);
  const captcha = useRef<any>(null);
  const name = useRef<any>();
  const telephone = useRef<any>();
  const email = useRef<any>();
  const message = useRef<any>();
  const [toggle, setToggle] = useState(false);
  const [btnToggle, setBtnToggle] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_PUBLID_ID!;
  const siteKey = process.env.NEXT_PUBLIC_SIE_KEY!;

  const successfull = "Thank you for reaching out, your message was sent.";
  const failed = "An error occurred, refresh the page and try again.";

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setBtnToggle(true);

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
        setMsgSent(true);
        setToggle(true);
        form.current.reset();
        setBtnToggle(false);
        setTimeout(() => {
          setMsgSent(false);
          setToggle(false);
        }, 3300);
      },
      (error) => {
        console.log(error.text);
        setToggle(true);
        form.current.reset();
        setBtnToggle(false);
        setTimeout(() => {
          setToggle(false);
        }, 3300);
      }
    );
  };

  return (
    <>
      <form method="POST" ref={form} onSubmit={sendEmail} id="myForm" className="w-screen px-5 min-w-[200px] max-w-lg ">
        <div className="flex flex-wrap -mx-3 mb-1 ">
          <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label className="tw-label">Name*</label>
            <input ref={name} className="tw-input" type="text" disabled={btnToggle ? true : false} required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="tw-label">Telephone*</label>
            <input className="tw-input" type="tel" ref={telephone} disabled={btnToggle ? true : false} required />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="tw-label">E-mail*</label>
            <input className="tw-input" type="email" ref={email} disabled={btnToggle ? true : false} required />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="tw-label">Message*</label>
            <textarea className="no-resize tw-input h-48 resize-none" ref={message} disabled={btnToggle ? true : false} required></textarea>
          </div>
        </div>

        {<ReCAPTCHA className="mb-5" ref={captcha} sitekey={siteKey} size="invisible" />}

        <div className="md:flex md:items-center">
          <div className="w-full">
            <button
              type="submit"
              className="shadow bg-yellow-500/90 hover:bg-yellow-500 focus:shadow-outline focus:outline-none font-bold py-3 px-12 rounded  active:scale-90 transition duration-150 cursor-pointer w-full disabled:cursor-not-allowed disabled:active:scale-100 disabled:animate-pulse "
              disabled={btnToggle ? true : false}
            >
              {btnToggle ? (
                <Player
                  autoplay
                  loop={true}
                  renderer="svg"
                  src="https://assets7.lottiefiles.com/packages/lf20_a2gg7umq.json"
                  style={{
                    height: "20px",
                    width: "80px",
                  }}
                />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {toggle ? (
          <motion.div
            className={`z-50 fixed text-sm rounded-md bg-[#303640] border-b-4 ${
              msgSent ? "border-yellow-500" : "border-red-500"
            } shadow-xl max-w-[475px] inline-flex left-5 sm:left-0 right-5 sm:right-5 top-2 sm:top-3 mx-auto p-5`}
            initial={{ y: -100 }}
            animate={{ y: toggle ? 0 : -100 }}
            transition={{ type: "spring", damping: 33, stiffness: 300 }}
            exit={{ y: -100 }}
          >
            <p className="text-center italic w-full lg:inline text-xs py-1">{msgSent ? successfull : failed}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
