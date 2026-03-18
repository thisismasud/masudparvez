import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <FileQuestion size={80} strokeWidth={1.5} className={styles.icon} />
        </div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          The post or project you're looking for doesn't exist or has been
          moved. Let's get you back on track.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <Link href="/blog" className={styles.secondaryButton}>
            <ArrowLeft size={20} />
            <span>Explore Blog</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
