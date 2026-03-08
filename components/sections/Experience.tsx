"use client";

import styles from "@/components/sections/Experience.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Experience = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );

  const experience = [
    {
      title: "Full Stack Developer",
      place: "Munnas Academy Computer Learning Center",
      date: "2023 - Present",
      description:
        "Building real-world applications and teaching Front-end Development including HTML, CSS, Tailwind, JavaScript, React, and Python. Guiding students through coding exercises and introducing logic building techniques.",
    },
    {
      title: "Frontend Developer (Intern)",
      place: "Lexaeon, New York",
      date: "Jul 2025 - Aug 2025",
      description:
        "Contributed to client-facing projects using Next.js with WordPress as headless CMS via GraphQL. Created responsive, pixel-perfect UI components. Received a full-time offer based on performance.",
    },
  ];

  const education = [
    {
      title: "MERN Stack Development",
      place: "OSTAD",
      date: "2024",
      description:
        "Comprehensive full-stack development course covering MongoDB, Express.js, React, and Node.js with hands-on projects.",
    },
    {
      title: "Reactive Accelerator",
      place: "Learn with Sumit",
      date: "Ongoing",
      description:
        "Advanced React and Next.js course focusing on modern patterns, performance optimization, and production-ready applications.",
    },
  ];

  const items = activeTab === "experience" ? experience : education;

  useGSAP(
    () => {
      gsap.from(".exp-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <SectionWrapper id="experience">
      <div ref={container}>
        <span className="exp-anim section-label">Resume</span>
        <h2 className={`exp-anim ${styles.title}`}>Experience & Education</h2>

        <div className={`exp-anim ${styles.tabs}`}>
          <button
            className={`${styles.tab} ${activeTab === "experience" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`${styles.tab} ${activeTab === "education" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        <div className={styles.timeline}>
          {items.map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`exp-anim ${styles.timelineItem}`}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineDate}>{item.date}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>{item.title}</h3>
                <h4 className={styles.company}>{item.place}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
