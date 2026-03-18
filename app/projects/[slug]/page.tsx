import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectClient } from "./ProjectClient";

// Normally this would come from a CMS or database
const projectsData: Record<string, any> = {
  "student-management": {
    title: "Student Management System",
    tagline:
      "A scalable MERN-based platform to manage students, fees, attendance, and operations in one place.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    overview:
      "A full-featured management system designed for coaching centers and academies to digitize daily operations like student admissions, fee tracking, attendance, exams, and financial management. The system is built with flexibility in mind, allowing multi-role access and real-time data handling.",
    problem:
      "The academy relied on manual processes for managing students, fees, and attendance, which caused data inconsistency, calculation errors, lack of transparency, and difficulty in tracking financial records and student progress.",
    features: [
      {
        title: "Role-Based Authentication & Authorization",
        description:
          "Secure login system using JWT stored in HTTP-only cookies. Different roles like Admin and Employees have controlled access to specific features.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
      },
      {
        title: "Student Admission & Management",
        description:
          "Add, update, and manage student profiles with structured data. Supports tracking of active and canceled students with proper validation.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      },
      {
        title: "Advanced Fee Management System",
        description:
          "Handle monthly fees, dues, and payments with detailed records. Prevents duplicate entries and maintains accurate financial tracking per student.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
      },
      {
        title: "Attendance Tracking (Students & Employees)",
        description:
          "Daily attendance system with restrictions to prevent duplicate entries. Includes employee attendance with entry/exit tracking and automatic working hour calculation.",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800",
      },
      {
        title: "Bulk Attendance Entry",
        description:
          "Allows marking attendance for multiple students at once using student indexes, generating a report of successful and failed entries.",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=800",
      },
      {
        title: "Exam & Result Management",
        description:
          "Create exams, assign students, and store results including MCQ, CQ, total marks, and ranking with proper references.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
      },
      {
        title: "Financial Account System",
        description:
          "Manage multiple accounts (cash, bank, etc.), handle deposits, withdrawals, and expenses with proper balance tracking.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
      },
      {
        title: "Dynamic Course & Enrollment System",
        description:
          "Flexible course structure with sessions and batches. Students can enroll in multiple courses with separate payment and tracking systems.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
      },
      {
        title: "Excel Report Generation",
        description:
          "Export student fee reports and other data into Excel files using optimized data handling for frequent report generation.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      },
      {
        title: "Secure Middleware & Validation",
        description:
          "Implemented advanced middleware including rate limiting, data sanitization, and input validation using express-validator for secure operations.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      },
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Authentication",
      "React Query",
      "PrimeReact",
      "Tailwind CSS",
      "Axios",
    ],
    challenges:
      "Designing a flexible and scalable data structure for courses, sessions, and enrollments while maintaining data consistency. Handling duplicate entries in fees and attendance, ensuring secure authentication with JWT cookies, and optimizing performance for frequent report generation were key challenges.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = projectsData[slug];

  if (!data) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://masudparvez.vercel.app";
  const projectUrl = `${baseUrl}/projects/${slug}`;

  return {
    title: `${data.title} | Projects | Masud Parvez`,
    description: data.tagline,
    openGraph: {
      title: data.title,
      description: data.tagline,
      url: projectUrl,
      siteName: "Masud Parvez Portfolio",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.tagline,
      images: [data.image],
    },
  };
}

export function generateStaticParams() {
  return [{ slug: "student-management" }];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = projectsData[slug];

  if (!data) {
    notFound();
  }

  return <ProjectClient project={data} />;
}
