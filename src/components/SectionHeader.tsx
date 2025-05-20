"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  isCenter = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  isCenter?: boolean;
}) => {
  const slideFromTop = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideFromTop}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
      }}
      className={twMerge(
        "flex flex-col",
        isCenter ? "items-center" : "items-start"
      )}
    >
      <div className="">
        <h3 className="uppercase text-center text-purple text-sm font-semibold mb-2 tracking-widest">
          {eyebrow}
        </h3>
      </div>
      <h2
        className={twMerge(
          "font-montserrat font-black text-3xl md:text-6xl",
          isCenter ? "text-center" : "text-left"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={twMerge(
            "font-poppins md:text-base text-white/60 mt-4 max-w-md sm:mx-5",
            isCenter ? "text-center md:mx-auto" : "text-left md:mx-0"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
