import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Certifications from "@/components/sections/Certifications";

export const metadata = { title: "Certifications — Ashwika Bhatnagar" };

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
