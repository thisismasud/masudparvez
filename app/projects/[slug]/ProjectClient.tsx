"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./Project.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectClient = ({ project }: { project: any }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".proj-hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".proj-fade").forEach((element: any) => {
        gsap.from(element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <main ref={container} className={styles.projectMain}>
      <section className={styles.projectHero}>
        <div className={styles.heroContent}>
          <Link
            href="/#projects"
            className={`proj-hero-anim ${styles.backLink}`}
          >
            ← Back to Projects
          </Link>
          <h1 className={`proj-hero-anim ${styles.title}`}>{project.title}</h1>
          <p className={`proj-hero-anim ${styles.tagline}`}>
            {project.tagline}
          </p>
        </div>
        <div className={`proj-hero-anim ${styles.heroImageContainer}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <SectionWrapper className={styles.detailsSection}>
        <div className={styles.detailsGrid}>
          <div className={styles.mainContent}>
            <div className={`proj-fade ${styles.block}`}>
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </div>

            <div className={`proj-fade ${styles.block}`}>
              <h2>The Problem</h2>
              <p>{project.problem}</p>
            </div>

            <div className={`proj-fade ${styles.block}`}>
              <h2>Features</h2>
              <div className={styles.featuresList}>
                {project.features.map((feature: any, i: number) => (
                  <div key={i} className={styles.featureItem}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <div className={styles.featureImageContainer}>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className={styles.featureImage}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`proj-fade ${styles.block}`}>
              <h2>Challenges & Learnings</h2>
              <p>{project.challenges}</p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={`proj-fade ${styles.techBox}`}>
              <h3>Tech Stack</h3>
              <div className={styles.techStack}>
                {project.techStack.map((tech: string, i: number) => (
                  <span key={i} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`proj-fade ${styles.actionBox}`}>
              <Button fullWidth>View Live Site</Button>
              <Button fullWidth variant="outline">
                Source Code
              </Button>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </main>
  );
};
