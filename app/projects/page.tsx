import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Projects from "@/components/sections/Projects";

export const metadata = { title: "Projects — Ashwika Bhatnagar" };

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
