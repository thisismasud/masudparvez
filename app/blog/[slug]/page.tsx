import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { blogs } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./BlogPost.module.css";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.postPage}>
      <SectionWrapper className={styles.heroSection}>
        <div className={styles.content}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className={styles.contentSection}>
        <div className={styles.articleGrid}>
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <aside className={styles.sidebar}>
            <div className={styles.authorBox}>
              <h3>About the Author</h3>
              <p>
                Masud Parvez is a Full Stack Developer and Educator passionate
                about building modern web experiences.
              </p>
            </div>
            <div className={styles.shareBox}>
              <h3>Share Post</h3>
              <div className={styles.shareLinks}>
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>Copy Link</span>
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </main>
  );
}
