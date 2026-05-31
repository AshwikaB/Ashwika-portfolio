import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsSnapshot from "@/components/home/SkillsSnapshot";
import AchievementsSnapshot from "@/components/home/AchievementsSnapshot";
import CertificationsSnapshot from "@/components/home/CertificationsSnapshot";
import ContactCTA from "@/components/home/ContactCTA";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <AboutTeaser />
        <SectionDivider />
        <div style={{ background: "#0b0b0b" }}>
          <FeaturedProjects />
        </div>
        <SectionDivider />
        <SkillsSnapshot />
        <SectionDivider />
        <div style={{ background: "#0b0b0b" }}>
          <AchievementsSnapshot />
        </div>
        <SectionDivider />
        <CertificationsSnapshot />
        <SectionDivider />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
