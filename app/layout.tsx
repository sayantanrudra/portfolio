import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayantan Rudra | Senior SDE - Web (Frontend)",
  description: "Senior Software Engineer specializing in frontend development with 5.5+ years of experience in React.js, Next.js, and building high-performance web applications.",
  keywords: ["Senior SDE", "Frontend Developer", "React.js", "Next.js", "Web Developer", "Sayantan Rudra"],
  authors: [{ name: "Sayantan Rudra" }],
  creator: "Sayantan Rudra",
  metadataBase: new URL('https://linkedin.com/in/sayantanrudra'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sayantan Rudra | Senior SDE - Web (Frontend)",
    description: "Building fast, scalable, and accessible web experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Sayantan Rudra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayantan Rudra | Senior SDE - Web (Frontend)",
    description: "Building fast, scalable, and accessible web experiences.",
    creator: "@sayantanrudra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sayantan Rudra',
      jobTitle: 'Senior SDE - Web (Frontend)',
      email: 'sayantanrud@gmail.com',
      telephone: '+91 7003875098',
      url: 'https://linkedin.com/in/sayantanrudra',
      sameAs: [
        'https://linkedin.com/in/sayantanrudra',
        'https://github.com/sayantanrudra',
      ],
      description: 'Senior Software Engineer with 6.3+ years of experience in frontend development, React.js, Next.js, and building high-performance web applications.',
      knowsAbout: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Frontend Development',
        'Web Performance',
        'SEO',
        'WordPress',
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
