import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import EliteWelcome from "@/app/components/EliteWelcome";
import PillarsSection from "@/app/components/PillarsSection";
import InfrastructureSection from "@/app/components/InfrastructureSection";
import LegacySection from "@/app/components/LegacySection";
import DivisionsSection from "@/app/components/DivisionsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ background: "#09090b" }}>
      <Navbar />
      <HeroSection />
      <EliteWelcome />
      <PillarsSection />
      <InfrastructureSection />
      <LegacySection />
      <DivisionsSection />
      <Footer />
    </main>
  );
}
