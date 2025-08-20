"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Brain, Network, MessageSquare } from "lucide-react";

export default function CybersecurityFeatures() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Personalized Career Roadmapping:",
      description:
        "Develop a clear roadmap for your cybersecurity career, identifying key skills, certifications, and pathways relevant to your ambitions. Gain insights into emerging trends and in-demand roles within the cybersecurity industry.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      title: "Skill Enhancement & Practical Application:",
      description:
        "Bridge the gap between theoretical knowledge and real-world application, with guidance on practical cybersecurity skills. Learn to 'think like a cyber defender' and apply human-centric security principles in your work.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: "Strategic Problem-Solving:",
      description:
        "Receive expert advice on tackling complex cybersecurity challenges and making informed decisions. Develop critical thinking and analytical skills essential for leadership roles.",
    },
    {
      icon: <Network className="w-6 h-6 text-pink-500" />,
      title: "Industry Insights & Networking:",
      description:
        "Understand the nuances of the cybersecurity landscape, including compliance, risk management, and security culture. Gain advice on effective networking strategies within the cybersecurity community.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: "Leadership & Communication Development:",
      description:
        "Enhance your communication skills to articulate cybersecurity concepts effectively to technical and non-technical audiences. Cultivate leadership qualities to drive security initiatives within your organization.",
    },
  ];

  return (
    <section className="container mx-auto py-8 md:py-12 relative overflow-hidden">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold p-2">What You'll Gain: Your Mentorship Journey</h1>
      <p className=" text-center text-sm md:text-lg lg:text-xl mx-36 p-8">The mentorship sessions are designed to be a personalized journey of growth and development. Expect a collaborative and insightful experience focused on your unique aspirations.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-6 mx-auto">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="bg-slate-900 rounded-3xl text-slate-100 border-slate-800 hover:border-slate-700 transition-all "
          >
            <CardHeader className=" mx-12 p-4 w-16 rounded-2xl border border-[#2AA9AD] border-b-0">
              {feature.icon}
            </CardHeader>
              <CardTitle className="text-lg text-start mx-6">{feature.title}</CardTitle>
            <CardContent>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
