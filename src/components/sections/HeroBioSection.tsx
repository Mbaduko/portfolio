import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HeroBioSection() {
  const stats = [
    { number: "3+", label: "Years Experience", icon: "⏱️" },
    { number: "25+", label: "Projects Completed", icon: "🚀" },
    { number: "15+", label: "Technologies Mastered", icon: "🛠️" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" }
  ];

  const achievements = [
    { title: "Backend Development", description: "Scalable APIs & Microservices", icon: "⚙️" },
    { title: "Database Management", description: "SQL & NoSQL Solutions", icon: "🗄️" },
    { title: "DevOps & Automation", description: "CI/CD & Infrastructure", icon: "🤖" },
    { title: "System Administration", description: "Linux & Cloud Platforms", icon: "☁️" }
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="home" padding="xl" showBackground>
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent">
            Let's Digitize Our World!!
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-button to-accent-text mx-auto rounded-full mb-12"></div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 rounded-2xl p-6 border border-secondary-bg/30 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-button mb-1">{stat.number}</div>
                <div className="text-accent-text text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bio Section */}
      <SectionWrapper id="bio" padding="lg">
        <SectionHeader
          title="Professional Summary"
          subtitle="Full Stack Developer & DevOps Engineer"
          icon="👨‍💻"
          variant="primary"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Bio */}
          <div className="bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10 rounded-2xl p-8 border border-secondary-bg/20">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              Core Expertise
            </h3>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              I'm a <strong className="text-primary-button">Full Stack Developer</strong> with over 3 years of experience, 
              specializing in backend development, database management, system administration, 
              and DevOps. I build and maintain scalable APIs, manage relational and NoSQL 
              databases, and automate infrastructure using modern DevOps practices.
            </p>
            <p className="text-accent-text leading-relaxed">
              My expertise spans designing backend architectures, configuring servers, deploying containerized 
              applications, and maintaining CI/CD pipelines — ensuring high performance, security, 
              and reliability across every layer of the stack.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10 rounded-xl p-6 border border-secondary-bg/20 hover:border-primary-button/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-button/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-accent-text text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 bg-gradient-to-r from-primary-button/10 to-accent-text/10 rounded-2xl p-8 border border-primary-button/20">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Quick Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-button mb-2">3+</div>
              <div className="text-accent-text text-sm">Years in Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-button mb-2">10+</div>
              <div className="text-accent-text text-sm">Technologies Stack</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-button mb-2">100%</div>
              <div className="text-accent-text text-sm">Project Success Rate</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
