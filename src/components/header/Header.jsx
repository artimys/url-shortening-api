import React, { useState } from "react";
import shortlyLogo from "../../assets/logo.svg";
import HamburgerMenu from "../menu/HamburgerIcon";
import CloseIcon from "../menu/CloseIcon";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="container relative flex items-center gap-10 py-8 bg-white">
        <a href="#">
          <img
            src={shortlyLogo}
            className="w-[7.8rem] md:w-34"
            alt="Shortly Logo"
          />
        </a>

        <button
          onClick={toggleMenuHandler}
          className="p-1 ml-auto md:hidden hover:bg-gray-100 hover:outline-2"
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? <CloseIcon /> : <HamburgerMenu />}
        </button>

        <nav
          role="navigation"
          aria-expanded={menuOpen}
          className="absolute z-10 py-10 text-center mobile__menu md:block bg-primary-dark-violet rounded-xl top-[6.1rem] left-8 inset-x-8 px-7 md:w-full md:static md:bg-transparent md:rounded-none md:top-auto md:left-auto md:inset-auto md:px-0 md:py-0 md:text-left "
        >
          <ul className="flex flex-col gap-8 text-xl md:text-sm md:items-center md:flex-row">
            <li>
              <a
                className="text-white transition-colors duration-150 hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-white transition-colors duration-150 hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-white transition-colors duration-150 hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Resources
              </a>
            </li>

            <li className="flex-1">
              <div className="w-full h-px bg-neutral-grayish-violet md:hidden"></div>
            </li>

            <li className="">
              <a
                className="text-white hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="md:float-right">
              <button className="w-full py-3 btn-primary-xl md:py-2 md:px-6 md:text-sm">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
