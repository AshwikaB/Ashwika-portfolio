import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Skills from "@/components/sections/Skills";

export const metadata = { title: "Skills — Ashwika Bhatnagar" };

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
