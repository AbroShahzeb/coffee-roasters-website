import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const SectionQuality = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
    },
  };
  return (
    <section className="mx-6 mb:[120px] md:mb-[144px] lg:mb-[168px] md:mx-10 lg:px-20 xl:max-w-[1280px] xl:mx-auto xl:px-0 bg-quality-mobile md:bg-quality-tablet lg:bg-quality-desktop bg-cover px-6 md:px-10 flex flex-col lg:flex-row-reverse lg:items-start lg:gap-[213px] items-center rounded-[10px] pb-[60px] md:pb-[67px] lg:pr-0 lg:pb-0 lg:pl-0">
      <motion.div
        initial="hidden"
        animate={inView ? "shown" : "hidden"}
        variants={imageVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        ref={ref}
        className="w-[279px] h-[156px] md:w-[573px] md:h-[320px] lg:w-[445px] lg:h-[474px] relative bg-quality-mobile-cover md:bg-quality-tablet-cover lg:bg-quality-desktop-cover bg-cover -translate-y-1/2 lg:translate-y-[-88px] lg:-translate-x-[85px] rounded-lg lg:flex-shrink-0"
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "shown" : "hidden"}
        variants={contentVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        ref={ref}
        className="flex flex-col items-center gap-6 lg:gap-8 text-center -translate-y-[156px] mt-[142px] -mb-[156px] md:-mb-[320px] md:-translate-y-[320px] md:mt-[224px] lg:-mb-[0px] lg:-translate-y-[0px]   text-surface lg:max-w-[540px] lg:items-start lg:text-left lg:ml-[85px] lg:mt-[88px]"
      >
        <h3 className="text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[48px] font-fraunces font-black">
          Uncompromising quality
        </h3>
        <p className="opacity-80 text-[15px] leading-[25px] lg:text-[16px] lg:leading-[26px] max-w-[279px] md:max-w-[540px]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </motion.div>
    </section>
  );
};
