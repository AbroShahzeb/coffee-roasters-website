import { Banner } from "./components/Banner";
import { CommitmentSection } from "./components/CommitmentSection";
import { HeaderQuartersSection } from "./components/HeadquartersSection";
import { SectionQuality } from "./components/SectionQuality";

export const About = () => {
  return (
    <div>
      <Banner />
      <CommitmentSection />
      <SectionQuality />
      <HeaderQuartersSection />
    </div>
  );
};
