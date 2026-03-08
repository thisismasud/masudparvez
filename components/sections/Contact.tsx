"use client";

import styles from "@/components/sections/Contact.module.css";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Contact = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
        },
      });
    },
    { scope: container },
  );

  return (
    <SectionWrapper id="contact" className={styles.contactSection}>
      <div ref={container}>
        <span className="contact-anim section-label">Contact</span>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h2 className={`contact-anim ${styles.title}`}>
              Let's work <br />
              together
            </h2>
            <p className={`contact-anim ${styles.message}`}>
              Got an idea? A project? Or just want to say hi? My inbox is always
              open. I'll try my best to get back to you — unless I'm debugging,
              in which case give me a few hours.
            </p>

            <div className={`contact-anim ${styles.contactInfo}`}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>EMAIL</span>
                <a
                  href="mailto:thisismasud1@gmail.com"
                  className={styles.contactValue}
                >
                  thisismasud1@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>PHONE</span>
                <a href="tel:+8801865960331" className={styles.contactValue}>
                  +880 1865960331
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>LOCATION</span>
                <span className={styles.contactValue}>
                  Chittagong, Bangladesh
                </span>
              </div>
            </div>

            <div className={`contact-anim ${styles.socials}`}>
              <a
                href="https://github.com/thisismasud"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/thisismasud"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href="mailto:thisismasud1@gmail.com"
                className={styles.socialLink}
              >
                Email
              </a>
            </div>
          </div>

          <div className={styles.formCol}>
            <form className={`contact-anim ${styles.form}`}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Subject"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className={styles.textarea}
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
