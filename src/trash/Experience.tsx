"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "FullStack Developer and Web Designer",
    company: "WhiteBox Indonesia",
    date: "Oct 2021 - Feb 2022",
    details: [
      "Contributed to application and website development with a focus on creating user-friendly interfaces.",
      "Collaborated on the frontend development of Mercu Buana University's website, demonstrating strong CSS/SCSS skills and supporting backend debugging.",
      "Designed website and mobile UI/UX for Ichiro Ramen Restaurant, aligning with client specifications to enhance customer experience.",
      "Assisted in redesigning existing brand interfaces to improve visual appeal and user engagement.",
    ],
    icon: "💻",
  },
  {
    role: "Frontend Engineer",
    company: "Prixa.ai",
    date: "March 2022 - Oct 2022",
    details: [
      "Contributed to the maintenance and development of a doctor-patient online consultation platform, including appointment booking and AI-powered symptom checking.",
      "Coordinated with the team to debug and resolve issues across Prixa's products.",
      "Developed Prixa's component library using Storybook and other UI frameworks.",
      "Responsible for maintaining patient data to ensure accuracy and security.",
    ],
    icon: "🖥️",
  },
  // ...tambahkan data lain di sini jika perlu...
];

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Experience() {
  return (
    <section className="bg-[#10101a] py-16 px-4 md:px-12">
      <h2 className="text-center text-purple text-sm font-semibold mb-2 tracking-widest">
        WHAT I HAVE DONE SO FAR
      </h2>
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-12">
        Work Experience.
      </h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2 z-0 hidden md:block" />
        <div className="flex flex-col gap-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0; // genap = kiri, ganjil = kanan
            return (
              <div
                key={idx}
                className={`
                  flex flex-col md:flex-row items-center md:items-stretch
                  ${isLeft ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Timeline content */}
                <motion.div
                  className={`
                    bg-[#181828] rounded-xl shadow-lg p-6 md:w-1/2
                    ${isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}
                  `}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={isLeft ? slideLeft : slideRight}
                >
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-violet-200 mb-3">{exp.company}</p>
                  <ul className="list-disc pl-5 text-gray-200 space-y-2 text-sm">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-3 text-gray-400 text-xs">{exp.date}</div>
                </motion.div>
                {/* Timeline icon & date */}
                <motion.div
                  className="flex flex-col items-center md:w-0 md:mx-6 my-4 md:my-0 z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeVariant}
                >
                  <div className="w-10 h-10 rounded-full bg-[#23233a] flex items-center justify-center text-2xl border-4 border-violet-400 shadow-lg">
                    {exp.icon}
                  </div>
                  <span className="hidden md:block mt-2 text-xs text-gray-400">
                    {exp.date}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
