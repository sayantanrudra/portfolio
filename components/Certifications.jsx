'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Target, BookOpen } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const certifications = [
    {
      title: 'Learning GDPR',
      description:
        'Comprehensive understanding of GDPR compliance, data protection regulations, and privacy best practices for web applications.',
      icon: Shield,
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Agile with Atlassian Jira',
      description:
        'Proficient in Agile methodologies and Jira project management for efficient team collaboration and project delivery.',
      icon: Target,
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-500',
    },
    {
      title: 'Ethical Hacking & Penetration Testing',
      description:
        'Skilled in identifying security vulnerabilities, conducting penetration tests, and implementing security best practices.',
      icon: Award,
      color: 'from-red-500/20 to-red-600/20',
      iconColor: 'text-red-500',
    },
    {
      title: 'Bug Bounty Hunting',
      description:
        'Experience in participating in bug bounty programs and identifying security issues in web applications.',
      icon: Shield,
      color: 'from-orange-500/20 to-orange-600/20',
      iconColor: 'text-orange-500',
    },
    {
      title: 'Foundations of MITRE ATT&CK',
      description:
        'Understanding of the MITRE ATT&CK framework for adversary tactics, techniques, and procedures.',
      icon: Target,
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-500',
    },
    {
      title: 'Continuous Learning',
      description:
        'Committed to staying updated with the latest technologies, security practices, and industry trends.',
      icon: BookOpen,
      color: 'from-cyan-500/20 to-cyan-600/20',
      iconColor: 'text-cyan-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
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
              Certifications & Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning journey
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-linear-to-r ${cert.color} mb-4`}>
                  <cert.icon className={`h-6 w-6 ${cert.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 border border-border text-center"
          >
            <p className="text-muted-foreground">
              I believe in continuous learning and regularly update my skills to
              stay current with industry best practices, emerging technologies,
              and security standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}