import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HeroBioSection() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="home" padding="xl" showBackground>
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent">
            Let's Digitize Our World!!
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-button to-accent-text mx-auto rounded-full"></div>
        </div>
      </SectionWrapper>

      {/* Bio Section */}
      <SectionWrapper id="bio" padding="lg">
        <SectionHeader
          title="About Me"
          subtitle="Full Stack Developer & DevOps Engineer"
          icon="👨‍💻"
          variant="primary"
        />
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10 rounded-2xl p-8 border border-secondary-bg/20">
            <p className="text-foreground leading-relaxed text-lg">
              I'm a <strong className="text-primary-button">Full Stack Developer</strong> with over 3 years of experience, 
              specializing in backend development, database management, system administration, 
              and DevOps. I build and maintain scalable APIs, manage relational and NoSQL 
              databases, and automate infrastructure using modern DevOps practices. My expertise 
              spans designing backend architectures, configuring servers, deploying containerized 
              applications, and maintaining CI/CD pipelines — ensuring high performance, security, 
              and reliability across every layer of the stack.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
