"use client";

import styles from "@/components/sections/Hero.module.css";
import { Button } from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Entrance Animations
      tl.from(`.${styles.label}`, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          `.${styles.title}`,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          `.${styles.description}`,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          `.${styles.actions}`,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          `.${styles.stats}`,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          `.${styles.imageWrapper}`,
          {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1",
        )
        .from(
          `.${styles.decorBorder}`,
          {
            x: -20,
            y: -20,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .fromTo(
          `.${styles.socialIcon}`,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        );
    },
    { scope: container },
  );

  return (
    <section id="home" className={styles.heroSection} ref={container}>
      <div className={styles.content}>
        <span className={styles.label}>
          <span className={styles.labelLines}></span>
          FULL STACK DEVELOPER
        </span>
        <h1 className={styles.title}>
          Hi, I'm <br />
          <span className={styles.name}>Masud Parvez</span>
        </h1>

        <p className={styles.description}>
          I help teams and businesses bring ideas to life on the internet. Most
          things work smoothly — and when they don’t, I’m usually the one fixing
          them.
        </p>
        <div className={styles.actions}>
          <Button href="#projects">View Projects</Button>
          <Button variant="outline" href="#contact">
            Let's Talk
          </Button>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.imageWrapper}>
          <div className={styles.decorBorder}></div>
          <div className={styles.portraitFrame}>
            <Image
              src="/main.png"
              alt="Masud Parvez"
              fill
              className={styles.mainImage}
              priority
            />
          </div>

          <div className={styles.socialSidebar}>
            <a
              href="https://github.com/thisismasud"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:thisismasud1@gmail.com"
              className={styles.socialIcon}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/thisismasud"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
