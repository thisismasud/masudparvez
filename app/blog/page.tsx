"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { blogs } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPage.module.css";

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <SectionWrapper className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.tagline}>
            Thoughts, stories and ideas. (Mostly about code and coffee).
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className={styles.listingSection}>
        <div className={styles.grid}>
          {blogs.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className={styles.blogCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.blogImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read Full Post →</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
