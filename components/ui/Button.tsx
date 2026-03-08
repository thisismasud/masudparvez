import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "filled";
  fullWidth?: boolean;
  href?: string;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { className, variant = "primary", fullWidth, href, children, ...props },
    ref,
  ) => {
    const classNames = [
      styles.button,
      variant === "outline" ? styles.outline : "",
      variant === "filled" ? styles.filled : "",
      fullWidth ? styles.fullWidth : "",
      className || "",
    ]
      .join(" ")
      .trim();

    if (href) {
      return (
        <Link href={href} className={classNames}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNames}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
