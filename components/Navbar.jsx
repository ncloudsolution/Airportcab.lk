"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import newlogo from "@/public/Navbar/cablk.jpg";
import menu from "@/public/Navbar/menu.svg";
import close from "@/public/Navbar/close.svg";

import { FaFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

import useWindowSize from "@/hooks/useWindowSize";

import Link from "next/link";

// Import SVG icons
import FacebookIcon from "@/public/Navbar/facebook.svg";
import EmailIcon from "@/public/Navbar/email.svg";

function NavBar() {
  const [windowWidth, windowHeight] = useWindowSize();

  const [mobilenavbar, setMobileNavbar] = useState(false);
  const [isServicesActive, setIsServicesActive] = useState(false);

  useEffect(() => {
    if (windowWidth >= 768) {
      setMobileNavbar(false);
    }
  }, [windowWidth]);

  const NavFunction = () => {
    if (windowWidth >= 768) {
      setMobileNavbar(false);
      setIsServicesActive(false);
      return;
    }
    setMobileNavbar(false);
    setIsServicesActive(false);
    return;
  };

  return (
    <div>
      {/* <nav class="w-full bg-gradient-to-r from-white from-40% to-primary bg-opacity-100 fixed top-0 left-0 right-0 z-10 "> */}
      <nav class="  bg-gradient-to-r from-primary to-newprimary xs:h-[80px] h-[60px] bg-opacity-100 fixed top-0 left-0 right-0 z-30 w-[100vw]">
        <div className="bg-white midxl:w-[35%] md:w-[30%] xs:w-[45%] xxs:w-[50%] w-[60%] -translate-x-10 skew-x-[-30deg] absolute xs:h-[80px] h-[60px] z-20 shadow-navshadow">
          <a href="/" className="h-full">
            <Image
              className=" xs:size-[85px] size-[60px] py-2  z-30 skew-x-[30deg] midxl:translate-x-20 translate-x-16"
              src={newlogo}
              alt="logo"
            />
          </a>
        </div>
        <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:block">
              {/* LOGO */}

              {/* <a href="/">
                <Image
                  className="xs:w-[80px] w-[60px] py-1 h-auto z-30 "
                  src={logo}
                  alt="logo"
                />
              </a> */}
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden absolute z-50 right-10 xs:top-7 top-4">
                <button
                  className="p-2rounded-md outline-none  "
                  onClick={() => setMobileNavbar(!mobilenavbar)}
                >
                  {mobilenavbar ? (
                    <CgCloseR
                      src={close}
                      alt="close"
                      className="text-[30px] text-primary"
                    />
                  ) : (
                    <LuMenuSquare
                      src={menu}
                      alt="menu"
                      className="focus:border-none active:border-none text-[30px] text-primary"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={` pb-3 xs:mt-[80px] mt-[60px] md:block md:pb-0 md:mt-0 ${
                mobilenavbar ? "h-[100vh] bg-[#000000CC] relative" : "hidden"
              }`}
            >
              <ul
                className={`  ${
                  mobilenavbar
                    ? "bg-white text-newprimary absolute left-10 right-10 rounded-md top-1/2 -translate-y-[150px]  md:hidden"
                    : "h-fit md:h-[80px] items-center justify-center  md:flex md:bg-transparent w-full text-primary"
                } `}
              >
                <li className="  text-lg font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/" onClick={NavFunction}>
                    Home
                  </Link>
                </li>
                <li className=" text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/about" onClick={NavFunction}>
                    About
                  </Link>
                </li>
                {/**dropdown**/}
                <li className="flex flex-col items-center gap-2  cursor-pointer  text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <div
                    className="flex items-center"
                    onClick={() => setIsServicesActive(!isServicesActive)}
                  >
                    <div>Services</div>
                    {isServicesActive ? (
                      <IoMdArrowDropup className="text-[25px]" />
                    ) : (
                      <IoMdArrowDropdown className=" text-[25px]" />
                    )}
                  </div>
                  {isServicesActive && (
                    <div className="absolute md:top-[80px] top-[138px]  bg-newprimary md:border-t-2  md:border-t-black py-2 px-3 rounded-b-md">
                      <div className="flex flex-col gap-1 items-start font-normal text-left">
                        <Link
                          href={"/airport-pickup-and-drop"}
                          className="border-b-2 border-b-white w-full"
                          onClick={NavFunction}
                        >
                          Airport Transport
                        </Link>
                        <Link
                          href={"/point-to-point"}
                          className="border-b-2 border-b-white  w-full"
                          onClick={NavFunction}
                        >
                          Point to Point
                        </Link>
                        <Link
                          href={"/journey-on-rails"}
                          className="border-b-2 border-b-white  w-full"
                          onClick={NavFunction}
                        >
                          Train Booking
                        </Link>
                        {/* <Link
                          href={"/day-trips"}
                          className="border-b-2 border-b-white  w-full"
                          onClick={NavFunction}
                        >
                          Day Trips
                        </Link>
                        <Link
                          href={"/tour-packages"}
                          className="border-b-2 border-b-white  w-full"
                          onClick={NavFunction}
                        >
                          Tour Packages
                        </Link>
                        <Link
                          href={"/custom-tour-package"}
                          className="border-b-2 border-b-white  w-full"
                          onClick={NavFunction}
                        >
                          Custom Tour
                        </Link> */}
                      </div>
                    </div>
                  )}
                </li>

                <li className="text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/contact-us" onClick={NavFunction}>
                    Contact
                  </Link>
                </li>
                <div className=" flex justify-center py-2">
                  <li className="px-1 md:border-b-0 md:hover:text-secondary md:hover:bg-transparent">
                    <a
                      href="https://web.facebook.com/easycabandtours?mibextid=ZbWKwL&_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={NavFunction}
                    >
                      <FaFacebook
                        className=" md:hover:text-secondary text-[28px] "
                        src={FacebookIcon}
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li className="px-1 md:border-b-0 md:hover:text-secondary md:hover:bg-transparent">
                    <a
                      href="mailto:easycabandtours@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={NavFunction}
                    >
                      <IoMdMail
                        className=" md:hover:text-secondary text-[28px] "
                        src={EmailIcon}
                        alt="Facebook"
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
