'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Building, TrendingUp, Award } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const experiences = [
    {
      title: 'Senior SDE – Web',
      company: 'SaaS Labs',
      period: 'Apr 2024 – Present',
      icon: Award,
      highlights: [
        'Led development of Next.js + headless WordPress architecture',
        'Achieved 95+ Lighthouse score across all pages',
        'Improved page load speed by 35%',
        'Reduced bounce rate by 25% through performance optimization',
        'Implemented Core Web Vitals optimization',
      ],
    },
    {
      title: 'SDE 2 – Web',
      company: 'SaaS Labs',
      period: 'Jun 2022 – Mar 2024',
      icon: TrendingUp,
      highlights: [
        'Built React.js + WordPress solutions for multiple clients',
        'Improved search rankings by 40%',
        'Increased organic traffic by 35% in 6 months',
        'Developed responsive, accessible web applications',
        'Collaborated with design team on UI/UX improvements',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Social Beat',
      period: 'Mar 2020 – May 2022',
      icon: Building,
      highlights: [
        'Developed multi-brand responsive websites',
        'Converted designs to pixel-perfect code',
        'Collaborated closely with UI/UX designers',
        'Implemented modern frontend best practices',
        'Optimized websites for performance and SEO',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <experience.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {experience.title}
                            </h3>
                            <p className="text-primary font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}