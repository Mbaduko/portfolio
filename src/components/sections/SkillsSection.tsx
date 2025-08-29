import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function SkillsSection() {
  const skills = [
    {
      id: 1,
      title: "Web Development",
      description: "Experienced in building responsive, user-friendly web applications using modern technologies.",
      icon: (
        <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" },
        { name: "Angular", icon: "🅰️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Material-UI", icon: "🎨" },
        { name: "Bootstrap", icon: "🎨" }
      ]
    },
    {
      id: 2,
      title: "Database Management",
      description: "Designing and maintaining databases to ensure data integrity and accessibility.",
      icon: (
        <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "Firebase", icon: "🔥" },
        { name: "Supabase", icon: "🚀" },
        { name: "Prisma", icon: "🔮" },
        { name: "Sequelize", icon: "📊" }
      ]
    },
    {
      id: 3,
      title: "System Administration",
      description: "Experienced in Linux server setup, automation, and system maintenance.",
      icon: (
        <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      technologies: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "AWS", icon: "☁️" },
        { name: "Linux", icon: "🐧" },
        { name: "Jenkins", icon: "🤖" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Nginx", icon: "🟢" },
        { name: "Git", icon: "📝" }
      ]
    }
  ];

  return (
    <SectionWrapper id="skills" padding="lg" showBackground>
      <SectionHeader
        title="Skills & Expertise"
        subtitle="Technical competencies and specializations"
        icon="⚡"
        variant="secondary"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-button/20 rounded-lg mb-4">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
            <p className="text-accent-text text-sm mb-4">
              {skill.description}
            </p>
            
            {/* Technologies List */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary-button/10 text-primary-button px-2 py-1 rounded text-xs flex items-center gap-1">
                    <span className="text-sm">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
