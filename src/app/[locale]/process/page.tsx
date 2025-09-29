import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Clock, Users, Lightbulb, Code, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mon Processus - Portfolio Nayzex',
  description: 'Découvrez ma méthodologie de développement en 5 étapes pour mener vos projets au succès',
};

const processSteps = [
  {
    number: 1,
    title: "Discovery & Planning",
    duration: "1-2 weeks",
    icon: Lightbulb,
    description: "Understanding your goals and requirements.",
    details: [
      "Stakeholder interviews and requirements gathering",
      "User research and competitive analysis", 
      "Technical architecture planning",
      "Project timeline and milestone definition",
      "Risk assessment and mitigation strategies"
    ],
    deliverables: [
      "Project brief and requirements document",
      "Technical specification",
      "Project timeline and milestones",
      "Budget estimate and proposal"
    ]
  },
  {
    number: 2,
    title: "Design & Prototyping",
    duration: "2-3 weeks",
    icon: Users,
    description: "Creating wireframes and prototypes to visualize the solution.",
    details: [
      "User experience (UX) design and user journey mapping",
      "User interface (UI) design with modern design principles",
      "Interactive prototypes for user testing",
      "Design system creation with consistent components",
      "Accessibility and usability considerations"
    ],
    deliverables: [
      "Wireframes and user flow diagrams",
      "High-fidelity design mockups",
      "Interactive prototype",
      "Design system and style guide"
    ]
  },
  {
    number: 3,
    title: "Development & Testing",
    duration: "4-8 weeks",
    icon: Code,
    description: "Building and rigorously testing the application.",
    details: [
      "Agile development with weekly sprints",
      "Clean, maintainable code following best practices",
      "Comprehensive testing (unit, integration, e2e)",
      "Performance optimization and security implementation",
      "Regular progress updates and demo sessions"
    ],
    deliverables: [
      "Fully functional application",
      "Test coverage reports",
      "Performance optimization reports",
      "Security audit results"
    ]
  },
  {
    number: 4,
    title: "Deployment & Launch",
    duration: "1 week",
    icon: Rocket,
    description: "Ensuring smooth launch with secure networks.",
    details: [
      "Production environment setup and configuration",
      "CI/CD pipeline implementation",
      "Monitoring and analytics setup",
      "SSL certificates and security configurations",
      "Backup and disaster recovery procedures"
    ],
    deliverables: [
      "Live application deployment",
      "Monitoring dashboard setup",
      "Security certificates and configurations",
      "Launch checklist and documentation"
    ]
  },
  {
    number: 5,
    title: "Maintenance & Support",
    duration: "Ongoing",
    icon: Clock,
    description: "Providing ongoing support and updates.",
    details: [
      "Regular maintenance and security updates",
      "Performance monitoring and optimization",
      "Feature enhancements based on user feedback",
      "Technical support and troubleshooting",
      "Analytics reporting and insights"
    ],
    deliverables: [
      "Monthly maintenance reports",
      "Performance analytics",
      "Security update notifications",
      "Feature enhancement recommendations"
    ]
  }
];

export default function ProcessPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">My 5-Step Process</h1>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              A proven methodology for success, refined through years of experience delivering high-quality digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.number} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center lg:flex-col lg:items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{ 
                          backgroundColor: 'var(--color-accent-a-base)',
                          color: 'white'
                        }}
                      >
                        {step.number}
                      </div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center lg:mt-4"
                        style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: 'var(--color-accent-a-base)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Main Info */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-semibold">{step.title}</h3>
                          <span 
                            className="px-3 py-1 text-sm rounded-full"
                            style={{ 
                              backgroundColor: 'var(--color-accent-b-subtle)',
                              color: 'var(--color-accent-b-base)'
                            }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-body mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <Check 
                                className="w-5 h-5 mt-0.5 flex-shrink-0" 
                                style={{ color: 'var(--color-accent-a-base)' }} 
                              />
                              <span className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Deliverables</h4>
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: 'var(--color-surface)' }}
                        >
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li 
                                key={deliverableIndex} 
                                className="text-sm flex items-start gap-2"
                                style={{ color: 'var(--color-ink-subtle)' }}
                              >
                                <span 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                                />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-px h-16"
                      style={{ backgroundColor: 'var(--color-stroke)' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Why This Process Works</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              This methodology ensures project success through clear communication, iterative feedback, and proven best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Regular check-ins and feedback sessions ensure we're always aligned with your vision and goals.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictable Timeline</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Clear milestones and deliverables keep your project on track and within budget.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-a-base)' }}
              >
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Rigorous testing and optimization ensure your final product exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-lead mb-8" style={{ color: 'var(--color-ink-subtle)' }}>
              Let's discuss your goals and how this proven process can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
