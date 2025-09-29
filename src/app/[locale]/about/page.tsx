import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Download, MapPin, Calendar, Award, Code, Heart, Coffee, Mountain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos - Portfolio Nayzex',
  description: 'Découvrez mon parcours, mes valeurs et ma passion pour le développement web et mobile',
};

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] }
];

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications and mobile solutions for Fortune 500 clients.',
    achievements: [
      'Increased application performance by 60% through optimization',
      'Led a team of 5 developers on multiple concurrent projects',
      'Implemented CI/CD pipelines reducing deployment time by 80%'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'StartupX',
    period: '2020 - 2022',
    description: 'Developed user-centric web applications and contributed to product strategy.',
    achievements: [
      'Built responsive applications serving 100k+ users',
      'Improved user engagement by 45% through UX enhancements',
      'Mentored junior developers and established coding standards'
    ]
  },
  {
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Started my career building websites and learning modern development practices.',
    achievements: [
      'Delivered 50+ client projects on time and within budget',
      'Gained expertise in multiple frameworks and technologies',
      'Received "Developer of the Year" award in 2019'
    ]
  }
];

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'I believe in writing maintainable, well-documented code that stands the test of time.'
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Every decision is made with the end user in mind, ensuring exceptional experiences.'
  },
  {
    icon: Coffee,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I stay current with the latest trends and best practices.'
  },
  {
    icon: Mountain,
    title: 'Problem Solving',
    description: 'I thrive on complex challenges and finding elegant solutions to difficult problems.'
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="mb-6">About Me</h1>
              <p className="text-lead mb-6" style={{ color: 'var(--color-ink-subtle)' }}>
                I'm Nathan, a passionate full-stack developer with over 6 years of experience creating 
                digital solutions that make a difference.
              </p>
              <p className="text-body mb-8" style={{ color: 'var(--color-ink-subtle)' }}>
                My journey in web development started with a simple curiosity about how websites work. 
                Today, I specialize in building scalable web applications and mobile apps that help 
                businesses grow and users achieve their goals.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">Paris, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">6+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5" style={{ color: 'var(--color-accent-a-base)' }} />
                  <span className="text-sm">Full-Stack Developer</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Let's Work Together
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-first lg:order-last">
              <div 
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-a-subtle)' }}
              >
                <div style={{ color: 'var(--color-accent-a-base)' }}>
                  <Code className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">My Values</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              The principles that guide my work and drive me to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Skills & Technologies</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-center">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Professional Experience</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              My journey through different roles and the impact I've made along the way.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-stroke)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-lg" style={{ color: 'var(--color-accent-a-base)' }}>
                      {job.company}
                    </p>
                  </div>
                  <span 
                    className="px-3 py-1 text-sm rounded-full mt-2 md:mt-0"
                    style={{ 
                      backgroundColor: 'var(--color-accent-b-subtle)',
                      color: 'var(--color-accent-b-base)'
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                
                <p className="text-body mb-4" style={{ color: 'var(--color-ink-subtle)' }}>
                  {job.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Achievements:</h4>
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-2">
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent-a-base)' }}
                      />
                      <span className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">Beyond Code</h2>
            <p className="text-lead content-width mx-auto" style={{ color: 'var(--color-ink-subtle)' }}>
              When I'm not coding, you'll find me exploring new technologies, hiking in the mountains, 
              or experimenting with photography. I believe that diverse experiences make me a better developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mountain className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Outdoor Adventures</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Hiking and mountain climbing help me clear my mind and approach problems with fresh perspective.
              </p>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Always learning new technologies and contributing to open-source projects in my spare time.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-a-base)' }} />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm" style={{ color: 'var(--color-ink-subtle)' }}>
                Mentoring aspiring developers and speaking at local tech meetups to share knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-accent-a-base)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              I'm always excited to work on new projects and help bring innovative ideas to life.
            </p>
            <Button 
              size="lg"
              className="bg-white text-[var(--color-accent-a-base)] hover:bg-gray-50"
              asChild
            >
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
