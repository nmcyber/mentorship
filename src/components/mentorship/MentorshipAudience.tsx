"use client";
import  Section  from "../shared/Section";
import Image from "next/image";
import { motion } from "framer-motion";

function MentorshipAudience() {
  return (
    <Section className="container mx-auto py-8 md:py-12 relative overflow-hidden ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
        <motion.div
          className="order-2 lg:order-1 relative w-full h-52 md:h-64 lg:h-80 xl:h-[24rem] max-w-lg mx-auto lg:max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={"/images/audience-shield.svg"}
            fill
            alt="Audience Shield"
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 text-center lg:text-left "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm md:text-md mb-4  text-[#2AA9AD] max-w-lg mx-auto lg:mx-0">
            ---- WHO CAN BENEFIT ----
          </p>
          <h1 className="text-xl md:text-xl lg:text-3xl xl:text-5xl font-bold font-jakarta mb-6 leading-tight">
            Mentorship is ideal for:
          </h1>
          <p className="text-md md:text-lg mb-4 text-[#ABB1BF] max-w-xl mx-auto lg:mx-0 leading-loose">
            Aspiring Cybersecurity Professionals: Individuals looking to
            kickstart or transition into a cybersecurity career.
             <br />
            Mid-Career Security Specialists: Professionals aiming to advance
            their skills, specialize, or move into leadership roles.
            <br />
             IT Managers & Business Leaders: Those seeking to embed a
            strong security culture and human-centric practices within their
            teams.
          </p>
          <p className="text-md md:text-lg mb-4 text-[#ABB1BF] max-w-lg mx-auto lg:mx-0">
            <b className="text-white"> Students & Recent Graduates:</b> Looking for practical guidance and a competitive edge in the job market.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export default MentorshipAudience;
