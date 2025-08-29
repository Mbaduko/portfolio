import Layout from '@/components/Layout';
import HeroBioSection from '@/components/sections/HeroBioSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroBioSection />
      <SkillsSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </Layout>
  );
}
