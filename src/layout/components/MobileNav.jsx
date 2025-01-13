import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

import { AnimatePresence, motion } from "framer-motion";

export const MobileNav = ({ isOpen = true, setIsOpen }) => {
  const variants = {
    close: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 }, // Animates height smoothly
        opacity: { duration: 0.2 },
      },
    },
    open: {
      height: "100vh",
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { delay: 0.1, duration: 0.2 },
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="close"
          animate="open"
          exit="close"
          variants={variants}
          className="fixed inset-0 w-full z-[500] overflow-hidden"
        >
          <div className="bg-white flex h-[90px] items-center justify-between px-6">
            <div>
              <img
                src={logo}
                alt="Coffee Roasters Logo"
                className="h-[18px] w-auto"
              />
            </div>

            <button onClick={() => setIsOpen(false)}>
              <img src={close} alt="Icon Cross" />
            </button>
          </div>
          <div className="h-full bg-mobile-nav-gradient flex flex-col items-center gap-8 text-[24px] leading-[32px] font-fraunces font-black text-dark-grey-blue ">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive && "underline text-dark-cyan underline-offset-4"
              }
              style={{
                marginTop: 40,
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive && "underline text-dark-cyan underline-offset-4"
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/create-your-plan"
              className={({ isActive }) =>
                isActive && "underline text-dark-cyan underline-offset-4"
              }
              onClick={() => setIsOpen(false)}
            >
              Create your plan
            </NavLink>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
