import { CollectionSection } from "./components/CollectionSection";
import { Hero } from "./components/Hero";
import { WhyUsSection } from "./components/WhyUsSection";

export const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <WhyUsSection />
    </div>
  );
};
