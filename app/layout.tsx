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
  metadataBase: new URL("https://faisal-faizypk.vercel.app"),

  title: "Mohammed Faisal | MERN Stack Developer",
  description:
    "Hi, I'm Mohammed Faisal — a MERN Stack Developer specialized in React, Next.js, Node.js, MongoDB and modern web app development. Explore my projects, skills, and experience.",
  keywords: [
    "Mohammed Faisal",
    "Faisal developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer Portfolio",
    "JavaScript Developer",
  ],
  authors: [{ name: "Mohammed Faisal" }],
  creator: "Mohammed Faisal",
  publisher: "Mohammed Faisal",

  openGraph: {
    title: "Mohammed Faisal | MERN Stack Developer Portfolio",
    description:
      "Explore the official portfolio of Mohammed Faisal — MERN Stack Developer with expertise in React, Next.js, Node.js, Express, MongoDB.",
    url: "https://faisal-faizypk.vercel.app",
    siteName: "Mohammed Faisal Portfolio",
    images: [
      {
        url: "/Faisal.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Faisal Portfolio Banner",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammed Faisal | MERN Stack Developer",
    description:
      "Official portfolio of Mohammed Faisal. MERN Stack Developer, React Developer, Node.js Developer.",
    images: ["/Faisal.png"],
  },

  icons: {
    icon: "/Faisal.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}