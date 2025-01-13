import { Button } from "../../../generalComponents/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedNumber, useIntl } from "react-intl";

export const ConfirmationModal = ({ data, isOpen, setIsOpen }) => {
  const { formatNumber } = useIntl();
  const {
    selectedPreference,
    selectedBeanType,
    selectedGrindOption,
    selectedQuantity,
    selectedDelivery,
  } = data;

  const variants = {
    closed: {
      opacity: 0,
      translateX: "-50%",
      translateY: "-50%",
      scale: 0.4,
    },
    opened: {
      translateX: "-50%",
      translateY: "-50%",
      scale: 1,
      opacity: 1,
    },
  };

  const calculateMonthlyPrice = (delivery, quantity) => {
    if (delivery === "Every week") {
      if (quantity === "250g") return 7.2 * 4;
      if (quantity === "500g") return 13 * 4;
      if (quantity === "1000g") return 12 * 4;
    }
    if (delivery === "Every 2 weeks") {
      if (quantity === "250g") return 9.6 * 2;
      if (quantity === "500g") return 17.5 * 2;
      if (quantity === "1000g") return 32 * 2;
    }
    if (delivery === "Every month") {
      if (quantity === "250g") return 22;
      if (quantity === "500g") return 32;
      if (quantity === "1000g") return 42;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="w-full h-screen fixed inset-0">
          <div
            className="fixed inset-0 bg-black/50  h-screen w-full z-[100]"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            variants={variants}
            initial={"closed"}
            animate={isOpen ? "opened" : "closed"}
            exit={"closed"}
            className="w-[327px] md:w-auto  bg-white rounded-lg  absolute top-1/2 left-1/2  z-[200] origin-center "
          >
            <div className="text-white text-[28px] leading-[32px] md:text-[40px] md:leading-[48px]  font-fraunces font-black py-7 px-6 md:pb-10 md:pt-12 md:pl-[56px] bg-bg-steps rounded-t-lg">
              Order Summary
            </div>
            <div className="p-6 pt-10 md:p-[56px]">
              <h2 className="text-[24px] leading-[40px] font-fraunces font-black text-grey">
                “I drink my coffee{" "}
                {selectedPreference === "Capsule" ? "using" : "as"}{" "}
                <span className="text-dark-cyan">
                  {selectedPreference || "_____"}{" "}
                </span>
                , with a{" "}
                <span className="text-dark-cyan">
                  {selectedBeanType || "_____"}{" "}
                </span>{" "}
                type of bean.{" "}
                <span className="text-dark-cyan">
                  {selectedQuantity || "_____"}{" "}
                </span>{" "}
                {selectedPreference !== "Capsule" && (
                  <>
                    ground ala{" "}
                    <span className="text-dark-cyan">
                      {selectedGrindOption || "_____"}{" "}
                    </span>
                  </>
                )}
                , sent to me{" "}
                <span className="text-dark-cyan">
                  {selectedDelivery || "_____"}
                </span>
                .”
              </h2>
              <p className="text-[15px] leading-[25px] md:text-[16px] md:leading-[26px] md:mt-[7px] text-dark-grey-blue">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
              <div className="mt-6 md:mt-12 md:flex md:items-center md:gap-3">
                <Button
                  label={`Checkout - ${formatNumber(
                    calculateMonthlyPrice(selectedDelivery, selectedQuantity),
                    {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}/mo`}
                  className="md:hidden"
                  onClick={() => setIsOpen(false)}
                />
                <p className="hidden md:block md:flex-1 text-[32px] leading-[36px] font-fraunces font-black text-dark-grey-blue">
                  <FormattedNumber
                    value={calculateMonthlyPrice(
                      selectedDelivery,
                      selectedQuantity
                    )}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits={2}
                    minimumFractionDigits={2}
                  />
                  /mo
                </p>
                <Button
                  label="Checkout"
                  className="hidden md:flex md:flex-1 md:justify-center"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
