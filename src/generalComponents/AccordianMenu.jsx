import { IconArrow } from "../assets/svgAssetComponents/IconArrow";
import { motion } from "framer-motion";
import React from "react";

export const AccordianMenu = React.forwardRef(
  (
    { isOpen, setIsOpen, title = "Sample Menu", children, disabled = false },
    ref
  ) => {
    return (
      <button ref={ref} disabled={disabled}>
        <div
          className="flex items-center text-left gap-[45.59px] justify-between w-full group cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3
            className={`text-[24px] leading-[28px] md:text-[32px] md:leading-[48px] lg:text-heading-2 font-fraunces text-grey font-black ${
              disabled && "text-grey/70"
            }`}
          >
            {title}
          </h3>
          <div
            className={`${
              disabled ? "text-[#66D2CF]" : "text-dark-cyan"
            } group-hover:text-[#66D2CF]  ${isOpen && "rotate-180"}`}
          >
            <IconArrow />
          </div>
        </div>

        {!disabled && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            style={{ overflowX: "hidden" }} // Fix horizontal scrollbar
          >
            {/* Wrapper for padding and content */}
            <div>{children}</div>
          </motion.div>
        )}
      </button>
    );
  }
);
