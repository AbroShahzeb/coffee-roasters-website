import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CollectionItem = ({ item }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0, y: 0, rotate: 0 }, // Start off-screen and slightly down
    shown: {
      opacity: [0, 0.5, 1],
      y: [50, -20, 0], // Keyframes for jump effect
      rotate: [0, 10, 0], // Keyframes for tilt
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 0 },
    shown: {
      opacity: [0, 0.5, 1],
      x: [70, -10, 0],
    },
  };

  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center text-dark-grey-blue md:flex-row md:justify-center md:gap-[36px] xl:gap-0  md:text-left xl:flex-col lg:text-center w-full"
    >
      <div
        className="flex items-center justify-center relative z-50"
        ref={ref} // Attach observer to track visibility
        initial="hidden" // Starting animation state
        animate={inView ? "shown" : "hidden"} // Trigger animation based on visibility
        variants={imageVariants} // Define animation keyframes
        transition={{
          duration: 1.2, // Total animation time
          ease: "easeInOut", // Smooth transitions
          times: [0, 0.3, 1],
        }}
      >
        <img
          src={item.image}
          className="w-[200px] h-[151px] md:w-[255px] md:h-[193px] xl:h-[183px] xl:w-auto xl:ml-2"
          alt={item.title}
        />
      </div>
      <div
        ref={ref}
        variants={contentVariants}
        initial="hidden" // Starting animation state
        animate={inView ? "shown" : "hidden"} // Trigger animation based on visibility
        transition={{
          duration: 1.2, // Total animation time
          ease: "easeInOut", // Smooth transitions
          times: [0, 0.3, 1],
          delay: 0.5,
        }}
        className="mt-6 md:mt-0 xl:mt-[72px]"
      >
        <h3 className="text-heading-4 font-fraunces font-black ">
          {item.title}
        </h3>
        <p className="mt-4 md:mt-6 text-body max-w-[282px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};
