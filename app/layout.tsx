import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Masud Parvez - Full Stack Developer",
  description:
    "Portfolio of Masud Parvez — Full Stack Developer building modern web applications with MERN stack, Next.js, and more.",
  openGraph: {
    title: "Masud Parvez | Full Stack Developer",
    description:
      "Building modern web experiences with React, Next.js, and Node.js.",
    siteName: "Masud Parvez Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masud Parvez | Full Stack Developer",
    description: "Building modern web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} ${firaCode.variable}`}>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
