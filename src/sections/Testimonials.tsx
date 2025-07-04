import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  // {
  //   name: "Marisa Ghassani",
  //   position: "UI/UX Developer @ Mandaya Royal Hospital Puri",
  //   text: "Working with Rani has been an absolute pleasure. She’s not only technically skilled, but also a great team player who’s always open to feedback and collaboration. Our project wouldn’t have been the same without his frontend expertise.",
  //   avatar: memojiAvatar1,
  // },
  {
    name: "Anggit Prayogo",
    position: "Android Developer @ Accenture",
    text: "Rani consistently delivers high-quality frontend work on time. She understands the requirements quickly and transforms ideas into beautiful, functional interfaces. I highly recommend working with him.",
    avatar: memojiAvatar2,
  },
  {
    name: "Rizdian Dinata",
    position: "Backend Developer @ KipasKipas",
    text: "Rani is the kind of developer who doesn’t just code — she solves problems. Whether it's optimizing performance or improving design consistency, she always brings smart solutions to the table.",
    avatar: memojiAvatar3,
  },
  {
    name: "Erlan Sentosa",
    position: "UI/UX Developer @ Mandaya Royal Hospital Puri",
    text: "I had the pleasure of working with Rani on the redesign of the Outpatient Queue project. She’s a brilliant and dedicated mobile developer who consistently delivered high-quality work. Rani skillfully applied the complex mobile interactions I designed, and her problem-solving and reliability made a real difference to our team. Any company would be lucky to have her.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            title="Happy Partners"
            eyebrow="What Partners Say about Me"
            description="Don't just take my word for it. See what my partners have to say about my work"
          />
          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
              {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base md:mt-6 mt-4">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
