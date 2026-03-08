import { ProjectClient } from "./ProjectClient";

// Normally this would come from a CMS or database
const projectsData: Record<string, any> = {
  "student-management": {
    title: "Student Management Panel",
    tagline: "A complete MERN stack solution for education centers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    overview:
      "This project replaces manual paper-based processes with an automated digital system for managing students, courses, and announcements.",
    problem:
      "The academy was struggling with paper-based fee collections and announcements, leading to manual errors and delays.",
    features: [
      {
        title: "Role-Based Access Control",
        description:
          "Secure login for Admins, Teachers, and Students with specific permissions.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
      },
      {
        title: "Automated SMS API",
        description:
          "Integrated third-party SMS API to send fee confirmations and class announcements instantly.",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query",
    ],
    challenges:
      "Handling real-time SMS API rate limits and ensuring secure data access with custom JWT middleware.",
  },
  "portfolio-v1": {
    title: "Previous Portfolio",
    tagline: "My very first portfolio website.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    overview: "A static portfolio website to showcase my early projects.",
    problem: "I needed a place to put my projects and a resume link.",
    features: [
      {
        title: "Responsive Design",
        description: "Looks good on mobile and desktop.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
      },
    ],
    techStack: ["Next.js", "Vanilla CSS", "GSAP"],
    challenges:
      "Learning how to structure a Next.js App Router project for the first time.",
  },
};

export function generateStaticParams() {
  return [{ slug: "student-management" }, { slug: "portfolio-v1" }];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = projectsData[slug];

  if (!data) {
    return <div>Project not found</div>;
  }

  return <ProjectClient project={data} />;
}
