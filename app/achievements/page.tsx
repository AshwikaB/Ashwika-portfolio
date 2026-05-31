import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Achievements from "@/components/sections/Achievements";

export const metadata = { title: "Achievements — Ashwika Bhatnagar" };

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen">
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
