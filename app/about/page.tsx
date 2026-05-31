import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import About from "@/components/sections/About";

export const metadata = { title: "About — Ashwika Bhatnagar" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}
