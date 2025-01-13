import { Link } from "react-router-dom";
import { Button } from "../../../generalComponents/Button";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="px-6  md:px-10 lg:px-20 h-[500px] lg:h-[600px] w-full">
      <header className="bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop h-[500px] lg:h-[600px] w-full bg-left-bottom bg-no-repeat bg-cover rounded-[10px] flex items-center">
        <div className="px-6 text-center flex flex-col items-center md:text-left md:items-start md:max-w-[398px] lg:max-w-[520px] md:ml-[58px] lg:ml-[86px] md:px-0">
          <h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[40px] leading-[40px] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] text-surface font-fraunces font-black lg:tracking-[1px] "
          >
            Great coffee made simple.
          </h1>
          <p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            className="text-body text-surface/80 mt-6 lg:mt-8 lg:max-w-[440px]"
          >
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="mt-10  lg:mt-14"
          >
            <Link to="/create-your-plan">
              <Button label="Create your plan" className="w-full" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
