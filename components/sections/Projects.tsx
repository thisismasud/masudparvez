"use client";

import styles from "@/components/sections/Projects.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  const projects = [
    {
      id: "student-management",
      title: "Student Management Panel",
      category: "Full Stack",
      description:
        "A dynamic, real-time system that replaced manual paper-based processes. Because spreadsheets are so 2010.",
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "portfolio-v1",
      title: "Previous Portfolio",
      category: "Frontend",
      description:
        "My first portfolio attempt. It taught me that good design takes more than just picking random colors.",
      tech: ["Next.js", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
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
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="projects" className={styles.projectsSection}>
      <div ref={container}>
        <span ref={labelRef} className="section-label">
          Portfolio
        </span>
        <h2 ref={titleRef} className={styles.title}>
          Selected Works
        </h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          Things I've built that I'm not embarrassed to show people.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.projectCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.viewText}>View Project →</span>
                </div>
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};