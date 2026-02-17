import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://faisal-faizypk.vercel.app/"),

  title: {
    default:
      "Mohammed Faisal | MERN Stack Developer | Full Stack Web & Mobile Expert",
    template: "%s | Mohammed Faisal",
  },
  description:
    "Mohammed Faisal is a highly skilled MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Expert in building scalable web and mobile applications with 2025 modern tech stacks. Available for hire and remote work.",
  keywords: [
    "Mohammed Faisal",
    "Faisal developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer Portfolio",
    "JavaScript Developer",
    "Software Engineer Portfolio",
    "MERN Stack Portfolio 2025",
    "Web Developer Kerala",
    "Freelance React Developer",
    "Hire MERN Developer",
    "Scalable Web Applications",
    "NextJS Specialist",
    "App Developer Kerala",
    "Mohammed Faisal Portfolio",
  ],
  authors: [
    { name: "Mohammed Faisal", url: "https://faisal-faizypk.vercel.app/" },
  ],
  creator: "Mohammed Faisal",
  publisher: "Mohammed Faisal",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://faisal-faizypk.vercel.app/",
  },

  openGraph: {
    title: "Mohammed Faisal | MERN Stack Developer Portfolio",
    description:
      "Official portfolio of Mohammed Faisal. Explore cutting-edge MERN stack projects, React/Next.js excellence, and scalable backend solutions.",
    url: "https://faisal-faizypk.vercel.app/",
    siteName: "Mohammed Faisal Portfolio",
    images: [
      {
        url: "/Faisal.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Faisal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammed Faisal | Full Stack Developer",
    description:
      "Passionate MERN stack developer building high-performance web and mobile solutions.",
    creator: "@iamfaisalpk",
    images: ["/Faisal.png"],
  },

  icons: {
    icon: "/Faisal.png",
    shortcut: "/Faisal.png",
    apple: "/Faisal.png",
  },

  verification: {
    google: "google-site-verification-placeholder", // User can replace this with actual token
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Faisal",
  url: "https://faisal-faizypk.vercel.app/",
  image: "https://faisal-faizypk.vercel.app/Faisal.png",
  jobTitle: "Full Stack Developer",
  alumniOf: "Self-Taught / Professional Courses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  sameAs: [
    "https://github.com/iamfaisalpk",
    "https://www.linkedin.com/in/mohammed-faisal-a779bb2b6/",
    "https://www.instagram.com/iam._faisal",
  ],
  description:
    "Mohammed Faisal is a MERN stack developer from Kerala, India, specializing in building high-quality web and mobile applications using React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
