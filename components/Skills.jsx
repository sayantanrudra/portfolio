'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Next.js', 'Node.js'],
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      title: 'Styling',
      skills: ['Tailwind CSS', 'SASS', 'CSS Modules'],
      color: 'from-pink-500/20 to-pink-600/20',
    },
    {
      title: 'Tools & Others',
      skills: ['WordPress', 'Git', 'SEO Optimization', 'Penetration Testing'],
      color: 'from-green-500/20 to-green-600/20',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
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
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional web experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r ${category.color} text-foreground border border-border`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 border border-border text-center"
          >
            <p className="text-muted-foreground">
              Constantly learning and adapting to new technologies. Currently
              focused on building performant, accessible, and scalable web
              applications with modern JavaScript frameworks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}