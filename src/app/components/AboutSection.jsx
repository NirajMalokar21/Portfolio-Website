"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Skills from "./Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>React</li>
        <li>NextJS</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Tailwind</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>4th Year Computer Science Student</li>
        <li>Carleton Unversity, Ottawa</li>
        <li>GPA: 10.95/12.00</li>
      </ul>
    ),
  },
  {
    title: "Details",
    id: "details",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>Email: <span className="underline text-blue-500">nirajharshavardhanma@cmail.carleton.ca</span></li>
        <li>Employment: Open</li>
        <li>Availability: May 2026 - May 2027</li>
        <li>Looking for Co-ops and internship learning opportunites</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  useGSAP(() => {
    gsap.to('#about_me', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#about_me',
        start: 'top 90%', 
        end: 'bottom 90%',
        scrub: true, 
        once: true
      },
    })
    gsap.to('#about2', {
      y: "-80",
      yoyo: true,
      duration: 2,
      repeat: -1,
      ease: 'power1.inOut'
    })
  }, [])

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black lg:pb-8" id="about">
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Skills />
        <div id="about_me" className="mt-4 md:mt-0 text-left flex flex-col h-full pl-8 opacity-0 translate-x-1/4">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            <p className="py-3">I’m an enthusiastic Computer Science student and lifelong learner with a passion for exploring every corner of technology. From web development and application design to data science, AI, and machine learning, I enjoy building interactive, responsive, and intelligent applications that bring ideas to life. </p>

            <p className="pb-3">My experience spans both full-stack web development and data-driven projects, working with tools and frameworks like Next.js, React, Redux, Node.js, Spring Boot, and Express on the development side, and NumPy, Pandas, scikit-learn, and Matplotlib on the data side. I thrive on learning new technologies, experimenting with different problem-solving approaches, and collaborating with others to create impactful solutions.</p>

            <p className="pb-3">Always curious and adaptable, I’m excited to keep pushing my boundaries, whether that means building scalable web apps, training machine learning models, or developing innovative applications at the intersection of multiple fields.</p>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <div className="hidden max-sm:flex">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
            </div>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("details")}
              active={tab === "details"}
            >
              {" "}
              Details{" "}
            </TabButton>
          </div>
          
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          <div id="about2" className="hidden lg:flex -translate-y-24">
            <Image            
              src='/images/about-element-2.png'
              alt="about-element-2"
              width={60}
              height={60}
              className="translate-x-96"
            />
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
