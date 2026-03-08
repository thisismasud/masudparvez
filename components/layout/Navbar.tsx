"use client";

import styles from "@/components/layout/Navbar.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">Masud Parvez</Link>
        </div>

        <nav
          className={`${styles.desktopNav} ${mobileMenuOpen ? styles.mobileOpen : ""}`}
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navAction}>
            <Button href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Hire Me
            </Button>
          </div>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ""}`}
          ></span>
        </button>
      </div>
    </header>
  );
};
