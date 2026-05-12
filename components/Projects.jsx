'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code2, ArrowRight } from 'lucide-react';

export default function Projects() {
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
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      title: 'Cloud‑based Phone System',
      description: 'Cloud‑native business phone platform that enables sales and support teams to make, receive, and manage calls, texts, and emails directly from their CRM or help‑desk tools, improving outreach efficiency and customer engagement.',
      tech: ['React.js', 'WordPress', 'Next.js', 'SEO', 'Tailwind CSS', 'TypeScript'],
      metrics: ['95+ Lighthouse Score', '35% Faster Load Time', '25% Lower Bounce Rate'],
      featured: true,
      github: '',
      demo: 'https://justcall.io/',
    },
    {
      title: 'Digital Marketing Agency',
      description: 'End‑to‑end digital marketing services—SEO, paid media, content, and performance optimization—to help brands grow online. Their team leverages data‑driven strategies and creative campaigns to boost visibility, traffic, and conversions.',
      tech: ['WordPress', 'Bootstrap', 'jQuery', 'PHP', 'MySQL', 'JavaScript'],
      metrics: ['High ROI Campaigns', 'Improved Search Rankings', 'Scalable Marketing Automation'],
      featured: false,
      github: '',
      demo: 'https://www.socialbeat.in/',
    },
    {
      title: 'Income Tax Calculator & Tax Optimiser',
      description: 'A Next.js web app that estimates Indian FY 2024‑25 personal income tax across old and new regimes, covering Chapter VI‑A deductions, flexi‑benefits, HRA exemptions, and detailed cash‑flow projections.',
      tech: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Vitest'],
      metrics: ['Regime comparison', 'Flexible benefit modeling', 'Monthly cash‑flow view'],
      featured: false,
      github: 'https://github.com/sayantanrudra/incometax-calculator',
      demo: 'https://sayantan-tax-calculator.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
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
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo} target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github} target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Code2 className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://github.com/sayantanrudra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              View More on GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}