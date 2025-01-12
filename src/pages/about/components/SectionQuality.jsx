import imageQualityMobile from "../../../assets/about/mobile/image-quality.jpg";
import imageQualityTablet from "../../../assets/about/tablet/image-quality.jpg";
import imageQualityDesktop from "../../../assets/about/desktop/image-quality.jpg";

export const SectionQuality = () => {
  return (
    <section className="mx-6 mb:[120px] md:mb-[144px] lg:mb-[168px] md:mx-10 lg:px-20 xl:max-w-[1110px] xl:mx-auto xl:px-0 bg-quality-mobile md:bg-quality-tablet lg:bg-quality-desktop bg-cover px-6 md:px-10 flex flex-col items-center rounded-[10px] pb-[60px] md:pb-[67px]">
      <div className="w-[279px] h-[156px] md:w-[573px] md:h-[320px] relative bg-quality-mobile-cover md:bg-quality-tablet-cover bg-cover -translate-y-1/2 rounded-lg"></div>

      <div className="flex flex-col items-center gap-6 text-center -translate-y-[156px] mt-[142px] -mb-[156px] md:-mb-[320px] md:-translate-y-[320px] md:mt-[224px] text-surface">
        <h3 className="text-[28px] leading-[28px] font-fraunces font-black">
          Uncompromising quality
        </h3>
        <p className="opacity-80 text-[15px] leading-[25px] max-w-[279px] md:max-w-[540px]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
};
