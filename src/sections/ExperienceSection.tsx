"use client";

import { SectionHeader } from "@/components/SectionHeader";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Mandaya Royal Hospital Group",
    date: "Nov 2021 - Nov 2024",
    descriptions: [
      "Contributed to the development of a hospital service booking app using Dart and Flutter.",
      "Built a digital queue system for mobile users to manage their appointments efficiently.",
      "Developed an Android TV application to display real-time queue information for hospital environment.",
      "Performed ongoing bug fixes to maintain application stability and performance.",
    ],
  },
  {
    title: "Part Time Mobile Developer",
    company: "Krealogi Inovasi Digital",
    date: "Dec 2022 - Present",
    descriptions: [
      "Developed a mobile delivery platform that supports various logistics services, enabling online sellers across Indonesia to send COD and non-COD packages, complete with expedition selection, payment integration, and real-time chat features.",
      "Created a mobile application for Bapenda Serang to facilitate employee attendance tracking, task management, and leave requests, streamlining internal workflows for government staff.",
    ],
  },
  {
    title: "Mobile Developer",
    company: "PT. App Digi Indonesia",
    date: "Nov 2024 - Present",
    descriptions: [
      "Developed a social gaming application where users can book play sessions with pro players. Implemented supporting features such as in-app calling, chat, audio rooms, and more.",
      "Performed regular bug fixing to ensure stable app performance.",
      "Reviewed code written by junior developers before merging to the development branch.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="text-white py-16 lg:py-24 px-6 lg:px-20" id="experiences">
      <div className="mb-20">
        <SectionHeader
          eyebrow="WHAT I HAVE DONE SO FAR"
          title="Work Experiences"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-gray-700 z-0" />

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative mb-20 flex flex-row items-start ${
              idx % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute top-0 left-6 lg:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1D1D29] rounded-full border-4 border-white z-10" />

            <div
              className={`w-full lg:w-1/2 pl-16 lg:px-6 ${
                idx % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              } mt-8 lg:mt-0 relative z-10`}
            >
              <p className="text-sm text-gray-400 mb-1">{exp.date}</p>
              <h2 className="text-lg md:text-xl font-bold">{exp.title}</h2>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {exp.company}
              </p>
              <ul className="space-y-2 text-white pl-5 list-disc marker:text-white">
                {exp.descriptions.map((desc, i) => (
                  <li
                    key={i}
                    className="leading-relaxed text-justify text-sm md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="hidden md:flex md:w-1/2" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
