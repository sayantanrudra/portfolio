'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, Zap, Users } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: Briefcase,
      title: '6+ Years Experience',
      description: 'Senior Frontend Engineer with a focus on performance and scalability',
    },
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'React, Next.js, WordPress, and modern web technologies',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: '95+ Lighthouse scores and optimized Core Web Vitals',
    },
    {
      icon: Users,
      title: 'Cross-Industry',
      description: 'SaaS, Real Estate, Healthcare, Ed-Tech, E-Commerce',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="/images/sayantan_rudra_dp.jpeg" alt="Sayantan Rudra" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Frontend-focused Senior Software Development Engineer with 6+ years of experience building high-performance, scalable web applications using TypeScript, React/Next.js, and headless WordPress. I have a proven track record delivering measurable impact—35% faster page loads, 25% reduction in bounce rate, and 35–40% growth in organic traffic and search rankings—across SaaS, real estate, healthcare, ed‑tech, and e‑commerce products. I collaborate closely on accessibility, SEO, and Core Web Vitals optimization to boost user engagement and conversion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                I&apos;ve worked across diverse industries including SaaS, Real Estate,
                Healthcare, Ed-Tech, and E-Commerce, delivering solutions that
                prioritize performance, accessibility, and user experience.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <highlight.icon className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}