import React from "react";
import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({
  id,
  className,
  children,
  ...props
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className || ""}`}
      {...props}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
};
