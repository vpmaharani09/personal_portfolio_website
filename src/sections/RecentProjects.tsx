import { SectionHeader } from "@/components/SectionHeader";
import { FaLocationArrow } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-16 lg:py-24 md:px-10 px-5">
        <SectionHeader
          eyebrow="A small selection of recent projects"
          title="My Portfolio"
        />
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-5 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
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
                          className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                          src={img}
                          alt="cover"
                          className="z-10 absolute bottom-0 w-[70vw] lg:w-[30vw] md:w-[40vw]"
                        />
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
                          <p className="flex lg:text-lg md:text-lg text-sm text-purple">
                            Check Live Site
                          </p>
                          <FaLocationArrow
                            className="ms-3 lg:text-lg md:text-lg text-sm"
                            color="#CBACF9"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
