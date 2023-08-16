import React from "react";
import shortlyLogo from "../../assets/logo.svg";
import facebookIcon from "/icon-facebook.svg";
import twitterIcon from "/icon-twitter.svg";
import pinterestIcon from "/icon-pinterest.svg";
import instagramIcon from "/icon-instagram.svg";

function Footer() {
  return (
    <>
      {/* items-center md:items-start */}

      {/* md:justify-end md:gap-16 */}
      <footer className="bg-neutral-very-dark-violet py-14">
        <div
          className="container flex flex-col lg:flex-row
                      items-center lg:items-start
                      lg:justify-end lg:gap-32
                      text-center lg:text-left "
        >
          <div className="xbg-pink-50 lg:mr-auto">
            <img
              src={shortlyLogo}
              className="mx-auto mb-10 lg:mx-0"
              alt="Shortly Logo"
            />
          </div>

          <nav className="flex flex-col lg:flex-row gap-10 lg:gap-16 xbg-pink-200">
            <div>
              <h4 className="text-base text-white mb-5">Features</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Link Shortening
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Branded Links
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base text-white mb-5">Resources</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Developers
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base text-white mb-5">Resources</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Careers
                  </a>
                </li>

                <li>
                  <a className="font-normal hover:text-primary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex gap-6 mt-12 lg:mt-0 items-center xbg-pink-500">
            <a href="#" className="text-white hover:text-primary">
              <img src={facebookIcon} className="" alt="" />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <img src={twitterIcon} className="" alt="" />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <img src={pinterestIcon} className="" alt="" />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <img src={instagramIcon} className="" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
