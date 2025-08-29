import Layout from '@/components/Layout';
import HeroBioSection from '@/components/sections/HeroBioSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroBioSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </Layout>
  );
}
