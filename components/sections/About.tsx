"use client";

import styles from "@/components/sections/About.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
        },
      });
    },
    { scope: container },
  );

  return (
    <SectionWrapper id="about">
      <div ref={container}>
        <span className={`about-anim section-label`}>About Me</span>
        <div className={styles.content}>
          <h2 className={`about-anim ${styles.title}`}>
            A passionate developer who loves building things
          </h2>
          <div className={`about-anim ${styles.textContent}`}>
            <p>
              Hey there! I'm Masud, a Full Stack Developer based in Chittagong,
              Bangladesh. My journey into web development started with a simple
              curiosity about how websites work — which quickly escalated into
              me spending hours debugging CSS at 2 AM.
            </p>
            <p>
              When I'm not coding, you'll find me reading about new tech,
              optimizing my terminal setup for the 100th time, or explaining to
              non-developers why "it works on my machine" is a valid defense.
            </p>
          </div>
          <div className={`about-anim ${styles.counters}`}>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>2+</span>
              <span className={styles.counterLabel}>Years Experience</span>
            </div>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>5+</span>
              <span className={styles.counterLabel}>Projects Done</span>
            </div>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>10+</span>
              <span className={styles.counterLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
