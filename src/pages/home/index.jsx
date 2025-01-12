import { CollectionSection } from "./components/CollectionSection";
import { Hero } from "./components/Hero";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhyUsSection } from "./components/WhyUsSection";

export const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <WhyUsSection />
      <HowItWorksSection />
    </div>
  );
};
