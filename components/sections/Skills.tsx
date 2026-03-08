"use client";

import styles from "@/components/sections/Skills.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, GitBranch, Layers, Terminal } from "lucide-react";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiFirebase,
  SiGit,
  SiDocker,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import { Code } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Skills = () => {
  const container = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layers size={24} />,
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "GSAP", icon: <SiGreensock /> },
      ],
    },
    {
      name: "Backend Development",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Python", icon: <SiPython /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "REST APIs", icon: <Code size={16} /> },
      ],
    },
    {
      name: "Database & Backend",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: <GitBranch size={24} />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Linux", icon: <SiLinux /> },
      ],
    },
  ];

  useGSAP(
    () => {
      const elements = [
        labelRef.current,
        titleRef.current,
        subtitleRef.current,
        ...cardsRef.current,
      ].filter(Boolean);

      gsap.fromTo(
        elements,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
            // Alternative: "play none none reset" if you want it to reset instead of reverse
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="skills" className={styles.skillsSection}>
      <div ref={container}>
        <span ref={labelRef} className="section-label">
          My Skills
        </span>
        <h2 ref={titleRef} className={styles.title}>
          Tech Stack & Expertise
        </h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          A collection of tools and technologies I use to bring ideas to life.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.skillCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};