'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const resumeUrl = `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/Sayantan_Rudra_Resume.pdf`;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const PROJECTS_SECTION_ID = 'projects';

  function scrollToProjects() {
    document
      .getElementById(PROJECTS_SECTION_ID)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground"
          >
            Sayantan Rudra
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
          >
            Senior Frontend Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Building fast, scalable, and accessible web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={resumeUrl}
              download="Sayantan_Rudra_Resume.pdf"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-card border border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/15"
            >
              <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
