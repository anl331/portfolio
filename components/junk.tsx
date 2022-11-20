import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const [toggle, setToggle] = useState(false);

<AnimatePresence>
{toggle ? (
  <motion.div
    className={`z-50 fixed h-[100svh] w-screen top-0 sm:hidden`}
    initial={{ y: 370 }}
    animate={{ y: toggle ? 0 : 370 }}
    transition={{ type: "spring", damping: 33, stiffness: 300 }}
    exit={{ y: 370 }}
  >
    <div className={`h-[20rem] bg-[#303640] w-screen fixed bottom-0 rounded-t-lg flex justify-center items-center z-20 transform transition duration-500 ease-in-out `}>
      <div className="grid place-items-center">
        <h1 className="text-lg text-white text-center px-20">Thank you for reaching out, your message was sent.</h1>
        {/* <Player ref={lotti} autoplay={false} keepLastFrame={true} loop={false} renderer="svg" src="https://assets5.lottiefiles.com/private_files/lf30_o0calpsv.json" style={animationConfig} /> */}
        <img src="/imgs/mail.gif" className="h-32 w-32 flex-shrink-0 flex mt-2" />
      </div>
    </div>
  </motion.div>
) : null}
</AnimatePresence>