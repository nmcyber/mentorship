"use client";

import Section from "../shared/Section";
import { motion } from "framer-motion";
import Image from "next/image";

function ProgramOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Section className="container mx-auto py-12 md:py-20 relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-6 lg:mb-10">
        <p className="text-sm md:text-md mb-4 text-[#2AA9AD]">
          ---- OUR PROGRAMS ----
        </p>
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold font-jakarta mb-6 leading-tight">
          Core Cybersecurity Awareness Training Services
        </h1>

        {/* Hacker Illustration */}
        <motion.div
          className="relative w-full h-32 md:h-40 lg:h-48 xl:h-[10rem] max-w-lg mx-auto m-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/hacker-157.svg"
            alt="hacker-157"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </motion.div>

        {/* Mentorship Program */}
        <h2 className="text-sm md:text-md lg:text-lg xl:text-xl font-bold font-jakarta mb-6 leading-tight">
          MENTORSHIP PROGRAM
        </h2>
        <p className="leading-loose mb-8 mx-6 md:mx-36 text-sm md:text-base">
          In this program, you will receive more than just technical advice—you
          will get a trusted guide for your long-term career journey. At
          NMCYBER, we understand how overwhelming it can feel to navigate the
          constantly evolving cybersecurity field, especially when you are trying
          to figure out the right career moves, build meaningful industry
          connections, or handle complex real-world challenges. That’s where
          your mentor comes in. You will be paired with an experienced
          cybersecurity professional.
        </p>

        <button className="inline-flex items-center px-16 py-3 bg-gradient-to-r from-[#075E80] to-[#62CBF4] text-white font-medium rounded-full shadow-md">
          Read More
        </button>

        <p className="text-sm md:text-md mt-14 mb-4 text-[#2AA9AD]">
          ---- OUR PROGRAMS ----
        </p>
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold font-jakarta mb-6 leading-tight">
          Core Cybersecurity Awareness Training Services
        </h1>
      </div>

      {/* Shield Illustration Section */}
      <motion.div
        className="relative w-full h-32 md:h-40 lg:h-48 xl:h-[22rem] max-w-lg mx-auto m-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/program-shield.svg"
          alt="program-shield"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
        />
      </motion.div>
    </Section>
  );
}

export default ProgramOverview;
