import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-white.svg";
import { IconFacebook } from "../../assets/svgAssetComponents/IconFacebook";
import { IconTwitter } from "../../assets/svgAssetComponents/IconTwitter";
import { IconInstagram } from "../../assets/svgAssetComponents/IconInstagram";

export const Footer = () => {
  return (
    <footer className="px-6 pb-[72px] pt-[120px] md:px-10 lg:px-20 lg:pb-[88px] lg:pt-[200px] md:pt-[144px]">
      <div className="flex flex-col gap-12 px-6 py-14 md:py-[54px] lg:px-[85px] lg:py-12 lg:flex-row lg:justify-between md:gap-8 xl:justify-start items-center bg-[#2C343E] lg:h-[120px] xl:gap-0">
        <Link to="/" className="xl:mr-[100px] ">
          <img src={logo} alt="Coffee Roasters Logo" />
        </Link>

        <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-[33px] lg:text-center xl:mr-auto xl:text-left">
          <li>
            <Link
              to="/"
              className="text-navigation-menu leading-[0.923px] text-grey uppercase font-bold hover:text-surface transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-navigation-menu leading-[0.923px] text-grey uppercase font-bold hover:text-surface transition-all"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/create-your-plan"
              className="text-navigation-menu leading-[0.923px] text-grey uppercase font-bold hover:text-surface transition-all"
            >
              Create Your Plan
            </Link>
          </li>
        </ul>

        <div className="flex items-center w-[120px] justify-between text-surface md:mt-[33px] lg:mt-0">
          <div className="hover:text-pale-orange transition-all cursor-pointer">
            <IconFacebook />
          </div>
          <div className="hover:text-pale-orange transition-all cursor-pointer">
            <IconTwitter />
          </div>
          <div className="hover:text-pale-orange transition-all cursor-pointer">
            <IconInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};
