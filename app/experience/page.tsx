import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Experience from "@/components/sections/Experience";

export const metadata = { title: "Experience — Ashwika Bhatnagar" };

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
