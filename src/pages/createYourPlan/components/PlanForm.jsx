import { useRef, useState } from "react";
import { AccordianMenu } from "../../../generalComponents/AccordianMenu";
import { Button } from "../../../generalComponents/Button";
import { BigSelectionOption } from "../../../generalComponents/BigSelectionOption";

export const PlanForm = ({
  selectedPreference,
  setSelectedPreference,
  selectedBeanType,
  setSelectedBeanType,
  selectedQuantity,
  setSelectedQuantity,
  selectedGrindOption,
  setSelectedGrindOption,
  selectedDelivery,
  setSelectedDelivery,
  setIsCheckoutModalOpen,
}) => {
  const [preferenceOpen, setPreferenceOpen] = useState(true);
  const [beanTypeOpen, setBeanTypeOpen] = useState(false);
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [grindOptionsOpen, setGrindOptionsOpen] = useState(false);
  const [deliveriesOpen, setDeliveriesOpen] = useState(false);

  const preferencesRef = useRef(null);
  const beanTypeRef = useRef(null);
  const quantityRef = useRef(null);
  const grindOptionsRef = useRef(null);
  const deliveriesRef = useRef(null);

  const formSteps = [
    {
      id: 0,
      title: "Preferences",
      onClick: () => {
        if (!preferenceOpen) preferencesRef.current.focus();
        setPreferenceOpen((prev) => !prev);
      },
      isLast: false,
      isSelected: selectedPreference,
    },
    {
      id: 1,
      title: "Bean Type",
      onClick: () => {
        if (!beanTypeOpen) beanTypeRef.current.focus();
        setBeanTypeOpen((prev) => !prev);
      },
      isLast: false,
      isSelected: selectedBeanType,
    },
    {
      id: 2,
      title: "Quantity",
      onClick: () => {
        if (!quantityOpen) quantityRef.current.focus();
        setQuantityOpen((prev) => !prev);
      },
      isLast: false,
      isSelected: selectedQuantity,
    },
    {
      id: 3,
      title: "Grind Option",
      onClick: () => {
        if (!grindOptionsOpen) grindOptionsRef.current.focus();
        setGrindOptionsOpen((prev) => !prev);
      },
      isLast: false,
      isSelected: selectedQuantity,
    },
    {
      id: 4,
      title: "Deliveries",
      onClick: () => {
        if (!deliveriesOpen) deliveriesRef.current.focus();
        setDeliveriesOpen((prev) => !prev);
      },
      isLast: true,
      isSelected: selectedDelivery,
    },
  ];

  const accordians = [
    {
      id: 0,
      title: "How do you drink you coffee?",
      isOpen: preferenceOpen,
      setIsOpen: setPreferenceOpen,
      ref: preferencesRef,
      options: [
        {
          id: 0,
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
          onClick: (title) => setSelectedPreference(title),
          isSelected: selectedPreference === "Capsule",
        },
        {
          id: 1,
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
          onClick: (title) => setSelectedPreference(title),
          isSelected: selectedPreference === "Filter",
        },
        {
          id: 2,
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
          onClick: (title) => setSelectedPreference(title),
          isSelected: selectedPreference === "Espresso",
        },
      ],
    },
    {
      id: 1,
      title: "What type of coffee?",
      isOpen: beanTypeOpen,
      setIsOpen: setBeanTypeOpen,
      ref: beanTypeRef,
      options: [
        {
          id: 0,
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
          onClick: (title) => setSelectedBeanType(title),
          isSelected: selectedBeanType === "Single Origin",
        },
        {
          id: 1,
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
          onClick: (title) => setSelectedBeanType(title),
          isSelected: selectedBeanType === "Decaf",
        },
        {
          id: 2,
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
          onClick: (title) => setSelectedBeanType(title),
          isSelected: selectedBeanType === "Blended",
        },
      ],
    },
    {
      id: 2,
      title: "How much would you like?",
      isOpen: quantityOpen,
      setIsOpen: setQuantityOpen,
      ref: quantityRef,
      options: [
        {
          id: 0,
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
          onClick: (title) => setSelectedQuantity(title),
          isSelected: selectedQuantity === "250g",
        },
        {
          id: 1,
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
          onClick: (title) => setSelectedQuantity(title),
          isSelected: selectedQuantity === "500g",
        },
        {
          id: 2,
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
          onClick: (title) => setSelectedQuantity(title),
          isSelected: selectedQuantity === "1000g",
        },
      ],
    },
    {
      id: 3,
      title: "Want us to grind them?",
      isOpen: grindOptionsOpen,
      setIsOpen: setGrindOptionsOpen,
      ref: grindOptionsRef,
      disabled: selectedPreference === "Capsule",
      options: [
        {
          id: 0,
          title: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
          onClick: (title) => setSelectedGrindOption(title),
          isSelected: selectedGrindOption === "Wholebean",
        },
        {
          id: 1,
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
          onClick: (title) => setSelectedGrindOption(title),
          isSelected: selectedGrindOption === "Filter",
        },
        {
          id: 2,
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
          onClick: (title) => setSelectedGrindOption(title),
          isSelected: selectedGrindOption === "Cafetiére",
        },
      ],
    },
    {
      id: 4,
      title: "How often should we deliver?",
      isOpen: deliveriesOpen,
      setIsOpen: setDeliveriesOpen,
      ref: deliveriesRef,
      options: [
        {
          id: 0,
          title: "Every week",
          description: `${
            selectedQuantity === "1000g"
              ? "$22.00"
              : selectedQuantity === "500g"
              ? "$13.00"
              : selectedQuantity === "250g"
              ? "$7.20"
              : "$7.20"
          } per shipment. Includes free first-class shipping.`,
          onClick: (title) => setSelectedDelivery(title),
          isSelected: selectedDelivery === "Every week",
        },
        {
          id: 1,
          title: "Every 2 weeks",
          description: `${
            selectedQuantity === "1000g"
              ? "$32.00"
              : selectedQuantity === "500g"
              ? "$17.50"
              : selectedQuantity === "250g"
              ? "$9.60"
              : "$9.60"
          } per shipment. Includes free priority shipping.`,
          onClick: (title) => setSelectedDelivery(title),
          isSelected: selectedDelivery === "Every 2 weeks",
        },
        {
          id: 2,
          title: "Every month",
          description: `${
            selectedQuantity === "1000g"
              ? "$42.00"
              : selectedQuantity === "500g"
              ? "$22.50"
              : selectedQuantity === "250g"
              ? "$12.00"
              : "$12.00"
          } per shipment. Includes free priority shipping.`,
          onClick: (title) => setSelectedDelivery(title),
          isSelected: selectedDelivery === "Every month",
        },
      ],
    },
  ];

  return (
    <section className="mt-[120px] md:mt-[144px] lg:mt-[168px] mb-0 lg:mx-20  mx-6 md:mx-10 ">
      <div className="grid grid-cols-1 grid-rows-[1fr_content] gap-0 lg:grid-rows-[1fr_content] lg:gap-[125px] gap-y-[120px]  md:gap-y-[140px] lg:gap-y-[85px] lg:grid-cols-[225px_1fr]">
        {/* Stepper */}
        <div className="hidden lg:flex flex-col items-start col-start-1 col-end-2 row-start-1 row-end-2 ">
          {formSteps.map((step) => (
            <>
              <button
                className={`text-[24px] leading-[32px] font-fraunces font-black text-dark-grey-blue ${
                  !step.isSelected && "opacity-40"
                } text-left whitespace-nowrap`}
                onClick={step.onClick}
              >
                <span
                  className={`${
                    step.isSelected ? "text-dark-cyan" : "text-grey"
                  } mr-6`}
                >
                  0{step.id + 1}
                </span>
                <span>{step.title}</span>
              </button>
              {!step.isLast && (
                <div className="w-full h-[1px] bg-grey/25 my-6"></div>
              )}
            </>
          ))}
        </div>

        <div className="flex flex-col gap-[96px] md:gap-[100px] lg:gap-[88px] row-start-1 row-end-2 lg:col-start-2 lg:col-end-3">
          {accordians.map((accordianData) => (
            <AccordianMenu
              key={accordianData.id}
              title={accordianData.title}
              isOpen={accordianData.isOpen}
              setIsOpen={accordianData.setIsOpen}
              ref={accordianData.ref}
              disabled={accordianData.disabled && accordianData.disabled}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8 md:mt-[40px] lg:mt-[56px]">
                {accordianData.options.map((option) => (
                  <BigSelectionOption
                    title={option.title}
                    description={option.description}
                    onClick={option.onClick}
                    isSelected={option.isSelected}
                  />
                ))}
              </div>
            </AccordianMenu>
          ))}
        </div>

        {/* Summary and Create Plan Action */}
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 flex flex-col items-center gap-[56px] md:gap-10 lg:items-end">
          <div className="bg-order-summary-mobile md:bg-order-summary-tablet lg:bg-order-summary-desktop bg-cover px-6 py-8 md:px-[27px] md:py-[44px] lg:py-[64px] rounded-[10px] flex flex-col gap-2 text-left bg-[#2C343E]">
            <p className="text-white/50 text-base leading-[26px] uppercase">
              Order summary
            </p>
            <h2 className="text-[24px] leading-[40px] font-fraunces font-black text-white">
              “I drink my coffee{" "}
              {selectedPreference === "Capsule" ? "using" : "as"}{" "}
              <span className="text-dark-cyan">
                {selectedPreference || "_____"}{" "}
              </span>
              , with a{" "}
              <span className="text-dark-cyan">
                {selectedBeanType || "_____"}{" "}
              </span>{" "}
              type of bean.{" "}
              <span className="text-dark-cyan">
                {selectedQuantity || "_____"}{" "}
              </span>{" "}
              {selectedPreference !== "Capsule" && (
                <>
                  ground ala{" "}
                  <span className="text-dark-cyan">
                    {selectedGrindOption || "_____"}{" "}
                  </span>
                </>
              )}
              , sent to me{" "}
              <span className="text-dark-cyan">
                {selectedDelivery || "_____"}
              </span>
              .”
            </h2>
          </div>

          <div>
            <Button
              label="Create my plan"
              disabled={
                !selectedBeanType ||
                !selectedPreference ||
                (selectedPreference !== "Capsule" && !selectedGrindOption) ||
                !selectedQuantity ||
                !selectedDelivery
              }
              onClick={() => setIsCheckoutModalOpen(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
