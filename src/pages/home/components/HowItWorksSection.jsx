import { StepCircle } from "../../../assets/svgAssetComponents/StepCircle";
import { Button } from "../../../generalComponents/Button";

const workProcessSteps = [
  {
    id: 0,
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 1,
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 2,
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="px-6 md:px-20 xl:max-w-[1045px] xl:ml-[165px] xl:pl-0">
      <div className="mb-20 md:mb-10 xl:mb-20">
        <h2 className="text-heading-4 text-grey font-fraunces font-black text-center md:text-left">
          How it works
        </h2>
      </div>

      <div className="md:grid grid-rows-[auto,1fr] grid-cols-3 gap-y-[62px] md:gap-y-[67px]">
        <div className="hidden md:grid row-start-1 row-end-2 col-start-1 col-end-4 grid-rows-1 grid-cols-3 xl:gap-x-[95px]">
          <div className="col-span-2 col-start-1 row-start-1 md:translate-x-[15px] flex items-center">
            <div className="w-full h-[2px] bg-pale-orange col-span-2 col-start-1 row-start-1 md:translate-x-[15px] flex items-end relative z-10 xl:w-[760px]"></div>
          </div>

          <div className="col-start-1 row-start-1 row-end-2 relative z-20">
            <StepCircle />
          </div>

          <div className="col-start-2 row-start-1 row-end-2 relative z-20">
            <StepCircle />
          </div>

          <div className="col-start-3 row-start-1 row-end-2 relative z-20">
            <StepCircle />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-[56px] md:gap-[10px] xl:gap-[95px] md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-4 md:grid-cols-3 md:grid-rows-1">
          {workProcessSteps.map((step, index) => (
            <div
              key={step.id}
              className={`col-start-${1} col-end-${2} row-start-${
                index + 1
              } row-end-${
                index + 2
              } md:col-start-auto md:col-end-auto md:row-start-auto md:row-end-auto flex flex-col gap-6 md:gap-[42px] items-center text-center md:items-start md:text-left`}
            >
              <div className="text-[72px] leading-[72px] text-pale-orange font-fraunces font-black">
                {"0"}
                {step.id + 1}
              </div>
              <div className="flex flex-col gap-6 md:gap-[38px]">
                <h2 className="text-dark-grey-blue text-[28px] leading-[32px] xl:text-[32px] xl:leading-[36px] font-fraunces font-black md:max-w-[225px]">
                  {step.title}
                </h2>
                <p className="text-body text-dark-grey-blue">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-[44px] xl:mt-[64px] w-full flex justify-center md:justify-start">
        <Button label="Create your plan" />
      </div>
    </section>
  );
};
