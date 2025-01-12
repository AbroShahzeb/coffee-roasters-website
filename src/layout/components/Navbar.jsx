import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-8 pb-10 h-[18px] md:pt-10 md:px-10 md:pb-[53px] md:h-[26px] lg:px-20 lg:py-[43.5px] lg:h-auto">
      <Link to="/">
        <img src={logo} alt="Coffee Roasters Logo" />
      </Link>

      <div className="text-navigation-menu uppercase font-bold text-grey items-center gap-8 hidden md:flex">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive && "underline text-dark-cyan underline-offset-4"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive && "underline text-dark-cyan underline-offset-4"
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/create-your-plan"
          className={({ isActive }) =>
            isActive && "underline text-dark-cyan underline-offset-4"
          }
        >
          Create your plan
        </NavLink>
      </div>

      <button className="md:hidden">
        <img src={iconHamburger} alt="Hamburger Icon" />
      </button>
    </nav>
  );
};
