"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Logo & Icons
import newlogo from "@/public/Navbar/cablkmod.jpg";
import brandnewlogo from "@/public/Navbar/brand-new-logo2.png";
import { FaFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import useWindowSize from "@/hooks/useWindowSize";

const NewNavBar = () => {
  const [windowWidth] = useWindowSize();
  const [mobilenavbar, setMobileNavbar] = useState(false);
  const [isServicesActive, setIsServicesActive] = useState(false);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setMobileNavbar(false);
    }
  }, [windowWidth]);

  const NavFunction = () => {
    setMobileNavbar(false);
    setIsServicesActive(false);
  };

  return (
    <nav className="border-b-[4px] border-black py-2 lg:px-8 xs:px-5 px-3 flex justify-center items-center fixed z-50 bg-white h-[60px] w-full shadow-md">
      <div className="bigmd:w-[90%] w-full justify-between ">
        <div className="flex justify-between w-full">
          {/* Logo Section */}
          <div className="flex gap-1">
            <a href="/" className="h-full w-fit">
              <Image className="h-[44px] w-fit" src={brandnewlogo} alt="logo" />
            </a>
            <div className="flex flex-col justify-center">
              <div className="font-semibold xs:text-[16px] text-[14px]">
                AirportCab.lk
              </div>
              <div className="text-primary xs:text-[12px] text-[10px] max-w-[250px]">
                Best & trusted Airport transfers in Sri Lanka
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center  text-primary font-semibold gap-8">
              <li className="hover:text-secondary ">
                <Link href="/" onClick={NavFunction}>
                  Home
                </Link>
              </li>
              <li className="hover:text-secondary ">
                <Link href="/about" onClick={NavFunction}>
                  About
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li className="relative cursor-pointer">
                <div
                  className="flex items-center gap-1 hover:text-secondary"
                  onClick={() => setIsServicesActive(!isServicesActive)}
                >
                  <span>Services</span>
                  {isServicesActive ? (
                    <IoMdArrowDropup className="text-[20px]" />
                  ) : (
                    <IoMdArrowDropdown className="text-[20px]" />
                  )}
                </div>

                {isServicesActive && (
                  <div className="w-[200px] absolute top-[50px] left-0 bg-white border border-gray-200 shadow-md rounded-md py-2 px-2 text-primary">
                    <Link
                      href="/airport-pickup-and-drop"
                      className="block py-1 hover:bg-gray-100"
                      onClick={NavFunction}
                    >
                      Airport Transport
                    </Link>
                    <Link
                      href="/taxi-service"
                      className="block py-1 hover:bg-gray-100"
                      onClick={NavFunction}
                    >
                      Taxi Service
                    </Link>
                    <Link
                      href="/journey-on-rails"
                      className="block py-1 hover:bg-gray-100"
                      onClick={NavFunction}
                    >
                      Train Booking
                    </Link>
                    <Link
                      href="/custom-tour-package"
                      className="block py-1 hover:bg-gray-100"
                      onClick={NavFunction}
                    >
                      Custom Tour
                    </Link>
                  </div>
                )}
              </li>

              <li className="hover:text-secondary ">
                <Link href="/contact-us" onClick={NavFunction}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://facebook.com/airportcab.lk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[24px] hover:text-secondary" />
              </a>
              <a href="mailto:info@airportcab.lk">
                <IoMdMail className="text-[24px] hover:text-secondary" />
              </a>
            </div>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              className="rounded-md outline-none"
              onClick={() => setMobileNavbar(!mobilenavbar)}
            >
              {mobilenavbar ? (
                <CgCloseR className="text-[30px] text-primary" />
              ) : (
                <LuMenuSquare className="text-[30px] text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobilenavbar && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md p-4 flex flex-col gap-3 lg:hidden rounded-b-md">
            <Link href="/" className="py-2 border-b" onClick={NavFunction}>
              Home
            </Link>
            <Link href="/about" className="py-2 border-b" onClick={NavFunction}>
              About
            </Link>

            {/* Mobile Dropdown */}
            <div className="py-2 border-b w-full">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsServicesActive(!isServicesActive)}
              >
                <span>Services</span>
                {isServicesActive ? (
                  <IoMdArrowDropup className="text-[20px]" />
                ) : (
                  <IoMdArrowDropdown className="text-[20px]" />
                )}
              </div>

              {isServicesActive && (
                <div className="mt-2 pl-4 flex flex-col gap-2 w-full text-primary">
                  <Link href="/airport-pickup-and-drop" onClick={NavFunction}>
                    Airport Transport
                  </Link>
                  <Link href="/taxi-service" onClick={NavFunction}>
                    Taxi Service
                  </Link>
                  <Link href="/journey-on-rails" onClick={NavFunction}>
                    Train Booking
                  </Link>
                  <Link href="/custom-tour-package" onClick={NavFunction}>
                    Custom Tour
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="py-2 border-b"
              onClick={NavFunction}
            >
              Contact
            </Link>

            {/* Social Icons for Mobile */}
            <div className="flex justify-center gap-3 mt-2">
              <a
                href="https://facebook.com/airportcab.lk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[24px] hover:text-secondary" />
              </a>
              <a href="mailto:info@airportcab.lk">
                <IoMdMail className="text-[24px] hover:text-secondary" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavBar;
