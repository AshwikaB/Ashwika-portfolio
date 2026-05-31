import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "Contact — Ashwika Bhatnagar" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
