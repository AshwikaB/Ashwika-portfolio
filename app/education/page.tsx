import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Education from "@/components/sections/Education";

export const metadata = { title: "Education — Ashwika Bhatnagar" };

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Education />
      </main>
      <Footer />
    </>
  );
}
