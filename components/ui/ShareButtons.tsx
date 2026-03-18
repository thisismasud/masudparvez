"use client";

import { Check, Linkedin, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import styles from "./ShareButtons.module.css";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Get the current URL if not provided (only on client side)
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl,
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.shareLinks}>
      <button
        onClick={handleLinkedInShare}
        className={styles.shareButton}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
        <span>LinkedIn</span>
      </button>
      <button
        onClick={handleCopyLink}
        className={styles.shareButton}
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check size={18} className={styles.successIcon} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon size={18} />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
