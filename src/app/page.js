"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSwiper from "@/components/SkillsSwiper";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PageLoadingSpinner, useLoadingState } from "@/components/LoadingStates";
import Head from 'next/head';

export default function Home() {
  const isLoading = useLoadingState(1500);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Steven Lai",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-Stack Developer specializing in AI Integration & Modern Web Applications. Expert in Next.js, React, TypeScript, and AI-powered solutions.",
    "url": "https://stevenlai.dev",
    "email": "tinleaves.0@gmail.com",
    "knowsAbout": [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
      "Python", "AI Integration", "Full-Stack Development", "Web Development"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "British Columbia Institute of Technology",
      "department": "Computer Systems Technology"
    },
    "sameAs": [
      "https://github.com/TinLeaves",
      "https://www.linkedin.com/in/steven-lai-sl1/"
    ]
  };

  if (isLoading) {
    return <PageLoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <Head>
        <title>Steven Lai - Full-Stack Developer | AI Integration Specialist</title>
        <meta name="description" content="Steven Lai is a Full-Stack Developer from Vancouver specializing in AI integration and modern web applications. Expert in Next.js, React, TypeScript, and cutting-edge AI solutions." />
        <meta name="keywords" content="Steven Lai, Full-Stack Developer, AI Integration, Next.js, React, TypeScript, Vancouver Developer, Web Development, AI Solutions" />
        <meta name="author" content="Steven Lai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Steven Lai - Full-Stack Developer | AI Integration Specialist" />
        <meta property="og:description" content="Full-Stack Developer specializing in AI Integration & Modern Web Applications. Expert in Next.js, React, TypeScript." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stevenlai.dev" />
        <meta property="og:image" content="https://stevenlai.dev/og-image.jpg" />
        <meta property="og:site_name" content="Steven Lai Portfolio" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steven Lai - Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer specializing in AI Integration & Modern Web Applications" />
        <meta name="twitter:image" content="https://stevenlai.dev/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://stevenlai.dev" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 via-teal-50/20 to-white dark:from-zinc-950 dark:via-blue-950/20 dark:via-teal-950/10 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Subtle Section Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent dark:via-blue-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Projects Section - Showcase work immediately after hero */}
        <Projects />

        {/* Subtle Section Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent dark:via-teal-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Skills Swiper Carousel Section - Technical competence after they're engaged */}
        <SkillsSwiper />

        {/* Subtle Section Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent dark:via-blue-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Timeline Section - Experience & Education for credibility */}
        <Timeline />

        {/* Subtle Section Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent dark:via-teal-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};