import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Step = ({ step, index, textColor = "text-dark-grey-blue" }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    shown: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "shown" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      ref={ref}
      className={`col-start-${1} col-end-${2} row-start-${index + 1} row-end-${
        index + 2
      } md:col-start-auto md:col-end-auto md:row-start-auto md:row-end-auto flex flex-col gap-6 md:gap-[42px] items-center text-center md:items-start md:text-left`}
    >
      <div className="text-[72px] leading-[72px] text-pale-orange font-fraunces font-black">
        {"0"}
        {step.id + 1}
      </div>
      <div className={`flex flex-col gap-6 md:gap-[38px] ${textColor}`}>
        <h2 className=" text-[28px] leading-[32px] xl:text-[32px] xl:leading-[36px] font-fraunces font-black md:max-w-[225px]">
          {step.title}
        </h2>
        <p className="text-body  xl:max-w-[285px]">{step.description}</p>
      </div>
    </motion.div>
  );
};
