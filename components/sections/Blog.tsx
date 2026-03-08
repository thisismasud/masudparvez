"use client";

import styles from "@/components/sections/Blog.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { blogs } from "@/lib/blogData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Blog = () => {
  const container = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const viewAllRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useGSAP(
    () => {
      const elements = [
        labelRef.current,
        titleRef.current,
        viewAllRef.current,
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
          stagger: 0.15,
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
    <SectionWrapper id="blog" className={styles.blogSection}>
      <div ref={container}>
        <span ref={labelRef} className="section-label">
          Insights
        </span>
        <div className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>
            Latest from the blog
          </h2>
          <Link href="/blog" ref={viewAllRef} className={styles.viewAll}>
            View All Posts →
          </Link>
        </div>

        <div className={styles.grid}>
          {blogs.slice(0, 3).map((post, index) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.blogCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.blogImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read Post</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};