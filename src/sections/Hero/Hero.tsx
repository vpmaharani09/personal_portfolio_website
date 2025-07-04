"use client";
import instagram from "@/assets/images/instagram.png";
import youtube from "@/assets/images/youtube.png";
import github from "@/assets/images/github.png";
import codewars from "@/assets/images/codewars.png";
import linkedin from "@/assets/images/linkedin.png";
import Image from "next/image";
import Speech from "./Speech";
import certif from "@/assets/images/certif.png";
import me from "@/assets/images/me.png";
import mepurple from "@/assets/images/mepurple.png";
import me2 from "@/assets/images/me2.png";
import me3 from "@/assets/images/me3.png";
import meborder from "@/assets/images/meborder.png";
import melight from "@/assets/images/melight.png";
import menatural from "@/assets/images/menatural.png";

// import profile from "@/assets/images/profile.png";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape from "@/sections/Hero/Shape";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative h-[100vh] lg:px-24 xl:px-5">
      <div className="h-full flex overflow-hidden flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between z-10 items-center lg:items-start text-center lg:text-left gap-9 lg:gap-0">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-12 text-5xl lg:text-[88px] xl:text-7xl font-bold"
          >
            <h1 className="text-purple">Hey There,</h1>
            <span className="text-white">I'm Rani!</span>
          </motion.div>

          {/* AWARDS */}
          <motion.div
            className="sm:w-[100%] lg:w-[60%] xl:w-[30%]"
            variants={awardVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="font-bold text-2xl" variants={awardVariants}>
              Experienced Frontend Developer
            </motion.h2>
            <motion.p
              variants={awardVariants}
              className="text-xs md:text-base text-[#ddd] my-4"
            >
              Building fast, responsive, and modern applications.
            </motion.p>
            <motion.div
              variants={awardVariants}
              className="flex gap-2 justify-center lg:justify-start"
            >
              <motion.a
                variants={awardVariants}
                className="h-9 w-9 p-2 bg-white rounded-full"
                href="https://github.com/vpmaharani09"
              >
                <Image className="object-cover" src={github} alt="" />
              </motion.a>
              <motion.a
                variants={awardVariants}
                className="h-9 w-9 p-2 bg-white rounded-full"
                href="https://www.codewars.com/users/vpmaharani09"
              >
                <Image className="object-cover" src={codewars} alt="" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* SCROLL SVG */}
          <motion.a
            animate={{ y: [0, 5], opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            href="#services"
            className="mb-12 w-max"
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <motion.path
                animate={{ y: [0, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.a>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-end lg:justify-between items-end z-10">
          {/* FOLLOW */}
          <motion.div
            variants={followVariants}
            initial="initial"
            animate="animate"
            className="hidden lg:flex flex-col gap-3 p-4 bg-[#2f204e] rounded-br-[10px]"
          >
            <motion.a
              variants={followVariants}
              href="https://www.instagram.com/itsrani.codes"
            >
              <Image className="w-5 h-5" src={instagram} alt="ig" />
            </motion.a>
            <motion.a
              variants={followVariants}
              href="https://www.linkedin.com/in/vidya-prita-maharani-475324221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <Image
                className="w-5 h-5"
                src={linkedin}
                alt="linkedin"
                color="#ffffff"
              />
            </motion.a>
            <motion.a
              variants={followVariants}
              href="https://www.youtube.com/@vpmaharani"
            >
              <Image className="w-5 h-5" src={youtube} alt="youtube" />
            </motion.a>
            <div className="w-5 h-5">
              <div className="uppercase bg-[#dd4c62] text-[12px] rotate-90 w-max h-full origin-top-left translate-y-[10px] translate-x-5 px-2 py-0 flex items-center rounded-br-[10px]">
                follow me
              </div>
            </div>
          </motion.div>

          {/* BUBBle */}
          <Speech />
          {/* CERTIFICATE */}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="hidden w-[60%] lg:flex flex-col items-center gap-2 text-center leading-6 font-light text-[#ddd]"
          >
            <Image
              src={certif}
              alt="certificate"
              className="w-[70px] h-[70px]"
            />
            4 YEARS
            {/* <br />
            EXPERIENCED */}
            <br />
            FRONTEND DEVELOPER
          </motion.div>

          {/* CONTACT BUTTON */}
          <motion.a
            animate={{
              x: [200, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
            }}
            href="/#contact"
            className="hidden md:flex mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative"
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="tracking-[3px] text-[20px]">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="tracking-[3px] text-[20px]">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="absolute m-auto top-0 bottom-0 left-0 right-0 w-[80px] h-[80px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        </div>

        <div className="absolute w-full h-[60%] xl:h-full xl:top-0 left-0 z-0 top-auto bottom-0">
          {/* 3d */}
          <Canvas>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-0 right-0 left-0 xl:h-[80%] lg:w-[60%] w-full h-full flex justify-center items-end md:m-auto">
            <Image
              src={mepurple}
              alt="3d"
              className="w-full h-full md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
