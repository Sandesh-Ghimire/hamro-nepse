/**
 * External dependencies.
 */
import React, { useState } from "react";

/**
 * Internal dependencies.
 */
import { navItems } from "../../constant";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

interface NavbarProp {
  logo: string;
}

const Navbar = ({ logo }: NavbarProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-6 lg:pt-8">
      <div className="flex items-center dark:bg-gray-900 justify-between flex-wrap dark:border-gray-600">
        {/* Logo, Title, and Menu */}
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 mr-2" />
            <span className="text-black font-semibold text-2xl mr-5 md:mr-5 dark:text-white">
              HamroNepse
            </span>
          </div>

          {/* Desktop Menu (Home, Contacts, Features, Chart) */}
          <ul className="hidden relative lg:flex items-center lg:space-x-6 md:space-x-2">
            {navItems.map((navItem, index): React.ReactNode => {
              return (
                <li key={index}>
                  <NavItem
                    label={navItem.label}
                    href={navItem.href}
                    hasSubMenu={navItem.hasSubMenu}
                    openInNewTab={navItem.openInNewTab}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Search Bar and Login Button*/}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative h-12">
            <SearchBar />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:focus:ring-blue-300 dark:hover:bg-blue-100 h-12 w-12"
          >
            <svg
              className="w-9 h-9 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="dark"
              viewBox="0 0 32 32"
            >
              <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
            </svg>
          </button>
        </div>

        {/* Toggle for Mobile Menu  */}
        <div className="lg:hidden flex items-center">
          {/* Mobile Menu Toggle Icon */}
          <button
            className="text-black focus:outline-none dark:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu, Search Bar, and Login Button*/}
        <div
          className={`lg:hidden w-full mt-2 ${isMenuOpen ? "block" : "hidden"}`}
        >
          {/* Mobile Menu (Home, Contacts, Features, Chart) */}
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />

          <ul className="flex flex-col items-start space-y-2 ">
            {navItems.map(
              (navItem, index): React.ReactNode => (
                <li key={index}>
                  <a
                    href={navItem.href}
                    className="text-black hover:text-blue-500 dark:text-white"
                  >
                    {navItem.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Search Bar */}
          <div className="relative w-full mt-3 h-12">
            <SearchBar />
          </div>

          {/* Login Button */}
          <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring focus:border-sky-400">
            Login / Signup
          </button>
        </div>
      </div>
      <hr className="my-6 lg:my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />
    </div>
  );
};

export default Navbar;
