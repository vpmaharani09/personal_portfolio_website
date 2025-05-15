"use client";
import man from "@/assets/images/man.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="hidden lg:w-[100%] lg:flex xl:w-[50%] gap-2 justify-between items-end"
    >
      <div className="w-full h-[100px] bg-white text-[#555] p-6 text-base rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl">
        <TypeAnimation
          sequence={[
            1000,
            "Kodenya clean banget, dan komunikasinya cepat. Highly recommended!",
            1000,
            "Bug nya hari ini, fix nya hari itu juga, Mantap!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <Image
        className="w-[50px] h-[50px] rounded-full object-cover bg-[#dd4c62]"
        src={man}
        alt="man"
      />
    </motion.div>
  );
};

export default Speech;
