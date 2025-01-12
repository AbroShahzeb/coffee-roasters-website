export const WhyUsCard = ({ card }) => {
  return (
    <div className="bg-dark-cyan px-3 pb-12 md:py-[41px] md:pr-[48px] md:pl-[70px] flex flex-col md:flex-row items-center  text-surface justify-end md:justify-start rounded-lg h-[382px] md:h-auto w-full max-w-[500px] md:max-w-[573px] gap-[55px] xl:flex-col xl:px-12 xl:gap-[56px] xl:max-w-full xl:pt-[72px] xl:h-[388px]">
      <div className=" flex-shrink-0 flex items-center justify-center xl:h-[72px]">
        <img
          src={card.icon}
          alt={`${card.title} Icon`}
          className="w-[72px] md:w-[56px] xl:w-[72px]"
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-4 xl:gap-6 items-center text-center md:text-left md:items-start xl:items-center xl:text-center">
        <h3 className="text-[24px] leading-[32px] font-fraunces font-black">
          {card.title}
        </h3>
        <p className="max-w-[212px] text-body md:text-[15px] md:leading-[25px] md:max-w-full">
          {card.description}
        </p>
      </div>
    </div>
  );
};
