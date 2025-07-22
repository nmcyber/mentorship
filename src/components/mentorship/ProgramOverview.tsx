"use client"
import Section from '../shared/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

function ProgramOverview() {
  return (
    <Section className="container mx-auto py-12 md:py-20 relative overflow-hidden ">
      <div className="items-center text-center mb-16 lg:mb-24 ">
        <p className="text-sm md:text-md mb-4  text-[#2AA9AD] "> ---- OUR PROGRAMS ----</p>
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold font-jakarta mb-6 leading-tight">Core  Cybersecurity  Awareness  Training  Services</h1>
        <motion.div
          className="order-2 lg:order-1 relative w-full h-32 md:h-40 lg:h-48 xl:h-[10rem] max-w-lg mx-auto lg:max-w-none m-6"
          initial={{ scale:0.5, opacity: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image  
            src={"/images/hacker-157.svg"}
            fill
            alt="hacker-157"
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </motion.div>
        <h1 className="text-sm md:text-md lg:text-lg xl:text-xl font-bold font-jakarta mb-6 leading-tight">MENTORSHIP PROGRAM</h1>
        <p className=' text-clip leading-loose mb-8 mx-16 md:mx-36  '>In this program, you will receive more than just technical advice, you will get a trusted guide for your long-term career journey. At NMCYBER we understand how overwhelming it can feel to navigate the constantly evolving cybersecurity field, especially when you are trying to figure out the right career moves, build meaningful industry connections,  or handle complex, real-world challenges. That’s where your mentor comes in. You will be paired with an experienced cybersecurity professional.</p>
        
        <button className="inline-flex items-center px-16 py-3 bg-gradient-to-r from-[#075E80] to-[#62CBF4] text-white font-medium rounded-full shadow-md">
          Read More
        </button>
      </div>
      <div className="items-center text-center ">
        <p className="text-sm md:text-md mb-4  text-[#2AA9AD] "> ---- OUR PROGRAMS ----</p>
        <h1 className="text-xl md:text-xl lg:text-3xl xl:text-5xl font-bold font-jakarta mb-8 leading-tight">Core  Cybersecurity  Awareness  Training  Services</h1>
        <motion.div
          className="order-2 lg:order-1 relative w-full h-32 md:h-40 lg:h-48 xl:h-[22rem] max-w-lg mx-auto lg:max-w-none m-6"
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image  
            src={"/images/program-shield.svg"}
            fill
            alt="program-shield"
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      
    </Section>
  )
}

export default ProgramOverview