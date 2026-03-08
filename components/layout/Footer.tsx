import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Masud Parvez
            </Link>
            <p className={styles.tagline}>
              Built with Next.js, coffee, and a reasonable amount of debugging.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigate</h4>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Social</h4>
              <a
                href="https://github.com/thisismasud"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/thisismasud"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:thisismasud1@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} Masud Parvez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
