import { useState } from "react";
import { Hero } from "./components/Hero";
import { PlanForm } from "./components/PlanForm";
import { Steps } from "./components/Steps";

export const CreateYourPlan = () => {
  const [selectedPreference, setSelectedPreference] = useState("");
  const [selectedBeanType, setSelectedBeanType] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedGrindOption, setSelectedGrindOption] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  return (
    <div>
      <Hero />
      <Steps />
      <PlanForm
        selectedPreference={selectedPreference}
        setSelectedPreference={setSelectedPreference}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        selectedBeanType={selectedBeanType}
        setSelectedBeanType={setSelectedBeanType}
        selectedGrindOption={selectedGrindOption}
        setSelectedGrindOption={setSelectedGrindOption}
        selectedDelivery={selectedDelivery}
        setSelectedDelivery={setSelectedDelivery}
      />
    </div>
  );
};
