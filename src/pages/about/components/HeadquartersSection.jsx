import illustrationUK from "../../../assets/about/desktop/illustration-uk.svg";
import illustrationCanada from "../../../assets/about/desktop/illustration-canada.svg";
import illustrationAustralia from "../../../assets/about/desktop/illustration-australia.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const headQuartersData = [
  {
    id: 0,
    illustration: illustrationUK,
    country: "United Kingdom",
    street: "68 Asfordby Rd",
    city: "Alcaston",
    postalCode: "SY6 1YA",
    phone: "+44 1241 918425",
  },
  {
    id: 1,
    illustration: illustrationCanada,
    country: "Canada",
    street: "1528  Eglinton Avenue",
    city: "Toronto",
    postalCode: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    id: 2,
    illustration: illustrationAustralia,
    country: "Australia",
    street: "36 Swanston Street",
    city: "Kewell",
    postalCode: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

export const HeaderQuartersSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    shown: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="px-6 md:px-10 xl:max-w-[1045px] xl:ml-[165px] xl:px-0">
      <div className="mb-[72px] mt-[120px] md:mt-[144px] lg:mt-[168px]">
        <h2 className="text-heading-4 text-grey font-fraunces font-black text-center md:text-left">
          Our headquarters
        </h2>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "shown" : "hidden"}
        ref={ref}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center gap-20 md:flex-row md:justify-start md:gap-[10px]"
      >
        {headQuartersData.map((headquarter) => (
          <div className="flex flex-col items-center text-center  text-dark-grey-blue md:items-start md:text-left md:flex-1">
            <div>
              <img src={headquarter.illustration} />
            </div>
            <h3 className="mt-12 mb-[22px] text-[28px] lg:text-[32px] leading-[36px] font-black font-fraunces">
              {headquarter.country}
            </h3>
            <div className="flex flex-col items-center text-[16px] leading-[26px] md:items-start md:text-left">
              <p>{headquarter.street}</p>
              <p>{headquarter.city}</p>
              <p>{headquarter.postalCode}</p>
              <p>{headquarter.phone}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
