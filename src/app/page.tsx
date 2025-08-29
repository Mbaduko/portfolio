import Layout from '@/components/Layout';
import HeroBioSection from '@/components/sections/HeroBioSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <Layout>
      <HeroBioSection />
      <SkillsSection />
    </Layout>
  );
}
