import { Mail, Phone, Share2, MapPin } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

export const metadata = {
  title: 'Resume - Sayantan Rudra',
  description: 'Professional resume of Sayantan Rudra, Senior SDE - Web (Frontend)',
};

export default function ResumePage() {
  const experiences = [
    {
      title: 'Senior SDE – Web',
      company: 'SaaS Labs',
      location: 'Bengaluru',
      period: 'Apr 2024 – Present',
      highlights: [
        'Developed and maintained Next.js web apps with headless WordPress, boosting scalability and content flexibility',
        'Designed reusable CMS schemas and modular components for dynamic marketing pages',
        'Worked with HubSpot CMS integrations and migration patterns to headless architectures',
        'Collaborated with design and backend teams to build accessible, high‑UX UI components',
        'Optimized Core Web Vitals, SEO and responsiveness: 35% faster loads, 25% lower bounce rate',
        'Provided mentorship and technical leadership to junior developers, guiding best practices and code reviews',
      ],
    },
    {
      title: 'SDE 2 – Web',
      company: 'SaaS Labs',
      location: 'Bengaluru',
      period: 'Jun 2022 – Mar 2024',
      highlights: [
        'Built and maintained high‑performance marketing sites using WordPress and React.js/Next.js',
        'Implemented SEO best practices and structured data, lifting search rankings 40% and organic traffic 35% in 6 months',
        'Ensured cross‑browser compatibility and WCAG accessibility compliance',
        'Streamlined CI/CD pipelines for faster, reliable deployments',
        'Collaborated closely with design and backend teams to deliver accessible, performant UI components',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Social Beat',
      location: 'Bengaluru',
      period: 'Mar 2020 – May 2022',
      highlights: [
        'Developed and maintained high‑performance, scalable, user‑friendly websites and landing pages for multiple brands, following brand guidelines',
        'Translated designs and wireframes into high‑quality, responsive code for maximum speed and usability',
        'Collaborated with marketing and UI/UX teams to optimize sites and improve user experience',
        'Leveraged WordPress and UI/UX best practices to deliver consistent, accessible web solutions',
      ],
    },
  ];

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    frameworks: ['React.js', 'Next.js', 'Node.js'],
    styling: ['Tailwind CSS', 'SASS', 'CSS Modules'],
    tools: ['WordPress', 'Git', 'SEO Optimization', 'Penetration Testing'],
  };

  const certifications = [
    'Learning GDPR',
    'Agile with Atlassian Jira',
    'Ethical Hacking / Penetration Testing & Bug Bounty Hunting',
    'Foundations of Operationalizing MITRE ATT&CK',
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrintButton />

        {/* Resume Content */}
        <div className="bg-white dark:bg-card text-foreground p-8 rounded-lg shadow-lg print:shadow-none print:p-0">
          {/* Header */}
          <header className="text-center mb-8 border-b border-border pb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Sayantan Rudra
            </h1>
            <p className="text-xl text-primary font-medium mb-4">
              Senior SDE – Web (Frontend)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>sayantanrud@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>+91 7003875098</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                <span>linkedin.com/in/sayantanrudra</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Senior Software Engineer with over 5.5 years of experience in
              building high-performance, scalable web applications. Expertise
              in frontend development with React.js, Next.js, and modern
              JavaScript frameworks. Proven track record of delivering
              exceptional user experiences with 95+ Lighthouse scores and
              significant performance improvements. Experienced across diverse
              industries including SaaS, Real Estate, Healthcare, Ed-Tech, and
              E-Commerce.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                <p className="text-muted-foreground">
                  {skills.languages.join(', ')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frameworks</h3>
                <p className="text-muted-foreground">
                  {skills.frameworks.join(', ')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Styling</h3>
                <p className="text-muted-foreground">
                  {skills.styling.join(', ')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools & Others</h3>
                <p className="text-muted-foreground">{skills.tools.join(', ')}</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Certifications & Learning
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Education
            </h2>
            <div className="border-l-2 border-primary pl-4">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Technology
                  </h3>
                  <p className="text-primary font-medium">
                    Computer Science & Engineering
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>Graduated</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}