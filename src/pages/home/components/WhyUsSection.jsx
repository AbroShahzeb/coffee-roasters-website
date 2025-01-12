import iconCoffeeBean from "../../../assets/home/desktop/icon-coffee-bean.svg";
import iconGift from "../../../assets/home/desktop/icon-gift.svg";
import iconTruck from "../../../assets/home/desktop/icon-truck.svg";
import { WhyUsCard } from "./WhyUsCard";

const whyUsCards = [
  {
    id: 0,
    icon: iconCoffeeBean,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 1,
    icon: iconGift,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 2,
    icon: iconTruck,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="px-6 pb-[120px] md:pb-[144px] lg:pb-[200px] md:px-10 lg:px-20 ">
      <div className="bg-[#2C343E] md:bg-bg-steps px-6 pt-16 pb-[64px] md:px-[74px] md:pt-[56px] md:pb-[70px]  rounded-t-[10px] lg:pt-[100px] lg:pb-[86px]">
        <div className="flex flex-col items-center text-center gap-6 lg:gap-8 text-surface md:max-w-[495px] lg:max-w-[540px] md:mx-auto">
          <h2 className="text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] lg:text-[40px]  font-fraunces font-black">
            Why choose us?
          </h2>
          <p className="text-[15px] leading-[25px] font-normal text-surface/80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 xl:h-[calc(50%+36px)] w-full rounded-b-[10px] z-10 bg-bg-steps bg-contain"></div>
        <div className=" flex flex-col items-center gap-8 relative  z-20 px-6 md:px-0 xl:flex-row xl:px-[85px] xl:gap-[30px] xl:items-stretch xl:h-[388px]">
          {whyUsCards.map((card) => (
            <WhyUsCard card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
