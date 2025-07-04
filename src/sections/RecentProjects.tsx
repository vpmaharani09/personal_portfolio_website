"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    des: "A personal website built with Next.js to showcase my work and experience as a developer. Designed with a modern and interactive style to leave a professional impression.",
    img: "/cover2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/vpmaharani09/personal_portfolio_website",
  },
  {
    id: 2,
    title: "Caredokter - Healthcare App",
    des: "A mobile app that lets users book healthcare services and doctors at Mandaya Royal Puri Hospital. Bringing healthcare services right to your fingertips.",
    img: "/cover.svg",
    iconLists: [
      "/flutter.svg",
      "/dart.svg",
      "/firebase.svg",
      "/android.svg",
      "/ios.svg",
    ],
    link: "https://caredokter.com/download/",
  },
  {
    id: 3,
    title: "Michan - Mabar Online App",
    des: "A mobile app that connects users to play together with pro players or other registered players. Includes features like chat, voice calls, and audio rooms.",
    img: "/cover5.svg",
    iconLists: [
      "/flutter.svg",
      "/dart.svg",
      "/zg.svg",
      "/stream.svg",
      "/firebase.svg",
      "/android.svg",
      "/ios.svg",
    ],
    link: "",
  },
  {
    id: 4,
    title: "TaskFocus - Productivity App",
    des: "A mobile-first website that helps manage time with the Pomodoro method, enhanced with task assignment features for better focus and productivity.",
    img: "/cover3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/vpmaharani09/pomodoro-app",
  },
];

const RecentProjects = () => {
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
    <section id="projects">
      <div className="py-16 lg:py-24 md:px-10 px-5">
        <SectionHeader
          eyebrow="A small selection of recent projects"
          title="My Portfolio"
        />
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-5 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }, idx) => (
            <motion.div
              key={id}
              variants={cardVariants}
              initial={idx % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: idx * 0.15,
                ease: "easeInOut",
              }}
              className="lg:min-h-[32.5rem] md:min-h-[30rem] min-h-[30rem] flex items-center justify-center w-[400px] md:w-[400px] lg:w-[400px]"
            >
              <div className="relative group/pin z-50  cursor-pointer">
                <div
                  style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                  }}
                  className="absolute left-1/2 top-1/2 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    style={{
                      transform: "translate(-50%,-50%) rotateX(0deg)",
                    }}
                    className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                  >
                    <div className="relative z-50">
                      <div className="relative flex items-center justify-center w-[300px] md:w-[400px] lg:w-[400px] overflow-hidden h-[35vh] lg:h-[35vh] md:h-[30vh] mb-5">
                        <div
                          className="relative w-full h-full overflow-hidden rounded-xl"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <img
                            src={img}
                            alt="bgimg"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                        {title}
                      </h1>

                      <p
                        className="md:text-base lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                          color: "#BEC1DD",
                          margin: "1vh 0",
                        }}
                      >
                        {des}
                      </p>

                      <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center justify-between">
                          {iconLists.map((icon, index) => (
                            <div
                              key={icon}
                              className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <img src={icon} alt="icon" className="p-2" />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center items-center">
                          {link && link.trim() !== "" ? (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(
                                  link,
                                  "_blank",
                                  "noopener,noreferrer"
                                );
                              }}
                              className="flex lg:text-lg md:text-lg text-sm text-purple hover:text-purple/80 transition-colors cursor-pointer"
                            >
                              Check Live Site
                            </button>
                          ) : (
                            <p className="flex lg:text-lg md:text-lg text-sm text-gray-500 cursor-not-allowed">
                              On Development
                            </p>
                          )}
                          {link && link.trim() !== "" && (
                            <FaLocationArrow
                              className="ms-3 lg:text-lg md:text-lg text-sm"
                              color="#CBACF9"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
