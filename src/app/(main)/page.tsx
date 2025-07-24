import { Navigation } from "@/components/home/Navigation"
import { HeroSection } from "@/components/home/HeroSection"
import { StatsSection } from "@/components/home/stats-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { PricingSection } from "@/components/home/pricing-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
      </main>
    </div>
  );
}
