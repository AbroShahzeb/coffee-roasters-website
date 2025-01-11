import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-8 pb-10 h-[18px] md:pt-10 md:px-10 md:pb-[53px] md:h-[26px] lg:px-20 lg:py-[43.5px] lg:h-auto">
      <Link>
        <img src={logo} alt="Coffee Roasters Logo" />
      </Link>

      <ul className="text-navigation-menu uppercase font-bold text-grey items-center gap-[33px] hidden md:flex">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Create your plan</NavLink>
      </ul>

      <button className="md:hidden">
        <img src={iconHamburger} alt="Hamburger Icon" />
      </button>
    </nav>
  );
};
