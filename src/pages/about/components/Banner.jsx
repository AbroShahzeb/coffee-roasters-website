import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Banner = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="px-6  md:px-10 lg:px-20 h-[400px] lg:h-[450px] w-full">
      <header className="bg-about-mobile md:bg-about-tablet lg:bg-about-desktop h-[400px] lg:h-[450px] w-full bg-left-bottom bg-no-repeat bg-cover rounded-[10px] flex items-center">
        <div className="px-6 text-center flex flex-col items-center md:text-left md:items-start md:max-w-[398px] lg:max-w-[520px] md:ml-[58px] lg:ml-[86px] md:px-0">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[28px] leading-[28px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] text-surface font-fraunces font-black lg:tracking-[1px] "
          >
            About Us
          </motion.h1>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            className="text-[15px] leading-[25px] text-surface/80 mt-6 lg:mt-8 lg:max-w-[440px]"
          >
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </motion.p>
        </div>
      </header>
    </div>
  );
};
