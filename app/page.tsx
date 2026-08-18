import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { AskAI } from "@/components/AskAI";
import { FAQ } from "@/components/FAQ";
import { PricingCTA } from "@/components/PricingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <ComparisonTable />
        <HowItWorks />
        <UseCases />
        <Portfolio />
        <Testimonials />
        <AskAI />
        <FAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
