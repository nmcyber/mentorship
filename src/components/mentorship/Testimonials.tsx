"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I am incredibly grateful for the mentorship and guidance I received from NMCYBER through “The Definitive CYBER-360° Mentorship & Coaching Program” under the guidance of Dr Nickson.",
    name: "Manthan Patel",
    role: "Telco Sales Consultant",
    date: "16/02/2025",
  },
  {
    quote:
      "This program changed my cybersecurity career trajectory by giving me clarity, practical exposure, and industry connections that I couldn’t have imagined before.",
    name: "Aditi Sharma",
    role: "Cybersecurity Analyst",
    date: "20/02/2025",
  },
  {
    quote:
      "Thanks to the mentorship, I was able to transition smoothly into a cybersecurity role while developing leadership and communication skills.",
    name: "Rohan Mehta",
    role: "Security Engineer",
    date: "25/02/2025",
  },
  {
    quote:
      "The coaching program gave me the confidence to take on leadership roles and expand my expertise in cybersecurity strategy.",
    name: "Priya Verma",
    role: "Cybersecurity Consultant",
    date: "28/02/2025",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // scroll by container width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      <div className="mb-10">
        <p className="text-[#2AA9AD] uppercase tracking-wider text-sm mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
      </div>

      {/* <div className="flex  gap-2 mb-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          className=" absolute left-1 bottom-50 rounded-full bg-[#2AA9AD]"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-1 bottom-50 rounded-full bg-[#2AA9AD]"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div> */}
       <Button
          variant="outline"
          onClick={() => scroll("right")}
          className="absolute  right-1 bottom-50 rounded-full bg-[#2AA9AD] w-16 h-16 z-100"
        >
          <ArrowRight className="size-10" />
        </Button>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth "
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {/* hide scrollbar (webkit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex-shrink-0 w-full md:w-1/2 "
          >
            <Card className="relative bg-slate-900/40 border border-[#2AA9AD] rounded-3xl text-slate-200 backdrop-blur-md p-6 h-full">
              <CardContent className="flex flex-col h-full">
                <span className="text-8xl text-sky-600 opacity-20">“</span>
                <p className="text-sm leading-relaxed mt-2 mb-6">{t.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-slate-400 text-sm">
                    {t.role} – {t.date}
                  </p>
                </div>
                <span className="text-9xl text-[#2AA9AD] opacity-20 self-end ">
                  ”
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
