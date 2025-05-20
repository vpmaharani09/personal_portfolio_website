"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const onClick = () => {
    const phone = "6281234141500"; // Ganti dengan nomor tujuan
    const text = `Hello, I'm interested in offering a project to you.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
          >
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let's connect and
                  discuss how I can help you achieve your goals
                </p>
              </div>
              <div>
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
                  onClick={onClick}
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
