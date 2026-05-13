import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Differentials from "@/components/Differentials";
import Products from "@/components/Products";
import PlantGallery from "@/components/PlantGallery";
import Clients from "@/components/Clients";
import LogisticsCoverage from "@/components/LogisticsCoverage";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Products />
        <PlantGallery />
        <Clients />
        <LogisticsCoverage />
        <Differentials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
