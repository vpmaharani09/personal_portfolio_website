"use client";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import DartIcon from "@/assets/icons/dart.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import location from "@/assets/images/location.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "Dart",
    iconType: DartIcon,
  },
  {
    title: "Flutter",
    iconType: FlutterIcon,
  },
  {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const hobbies = [
  {
    title: "Watch Movie",
    emoji: "🎬",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "45%",
  },
  {
    title: "Story Telling",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "45%",
    top: "70%",
  },
];

export const AboutComponent = () => {
  const constraintRef = useRef(null);
  // Animation variants for cards
  const cardVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <div className="">
      <div className="container">
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="h-[320px] md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <Image
                  src={location}
                  alt="Map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-purple to-[#38BDF8] after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-[#38BDF8] -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-[#38BDF8] -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="smiling emoji"
                    className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
            >
              <Card
                className="h-[320px] md:col-span-3 lg:col-span-2 bg-[#13152D]"
                useBorder={false}
              >
                <CardHeader
                  title="My Dev Kit"
                  description="A peek into the tech that powers my projects and makes dev life smoother."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </Card>
            </motion.div>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};
