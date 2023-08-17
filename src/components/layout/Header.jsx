import React from "react";
import shortlyLogo from "../../assets/logo.svg";
import HamburgerMenu from "./HamburgerIcon";

function Header() {
  return (
    <>
      <header className="container relative flex items-center gap-10 py-10 bg-white">
        <a href="#" target="_blank">
          <img src={shortlyLogo} className="md:w-34" alt="Shortly Logo" />
        </a>

        <input type="checkbox" className="hidden peer" name="menu" id="menu" />
        <label htmlFor="menu" className="ml-auto cursor-pointer md:hidden">
          <HamburgerMenu />
        </label>

        <nav
          role="navigation"
          className="absolute hidden py-10 text-center peer-checked:block md:block bg-primary-dark-violet rounded-xl top-24 left-8 inset-x-8 px-7 md:w-full md:static md:bg-transparent md:rounded-none md:top-auto md:left-auto md:inset-auto md:px-0 md:py-0 md:text-left "
        >
          <ul className="flex flex-col gap-8 text-xl md:text-sm md:items-center md:flex-row">
            <li>
              <a
                className="text-white hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary md:text-neutral-grayish-violet md:hover:text-primary-dark-violet"
                href="#"
              >
                Resources
              </a>
            </li>

            <li className="flex-1">
              <div className="w-full h-px bg-neutral-grayish-violet md:hidden"></div>
            </li>

            <li className="md:self-en">
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
