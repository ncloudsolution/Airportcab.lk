import React from "react";

import girl from "@/public/contactUs/contactimg.png";

import Image from "next/image";

import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <>
      <div className="bigmd:text-[40px] bxs:text-[30px] text-[24px] font-semibold">
        Contact US
      </div>
      <div className="flex flex-col bigmd:gap-3 gap-2 bigmd:mt-10 bxs:mt-2 mt-1 mx-5">
        <div className="flex items-start gap-x-2 bxs:text-[18px] text-[14px]">
          <FaPhoneVolume className="bigmd:text-white text-black bxs:text-[18px] text-[14px] translate-y-1" />
          <div className="flex flex-col text-left bxs:w-[250px] w-[200px]">
            <div>+94 719 885 885</div>
            <div>+94 712 100 500</div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 bxs:text-[18px] text-[14px]">
          <MdAttachEmail className="bigmd:text-white text-black bxs:text-[20px] text-[16px]" />
          <div>easycabandtours@gmail.com</div>
        </div>
        <div className="flex items-start gap-x-2 bxs:text-[18px] text-[14px]">
          <IoLocation className="bigmd:text-white text-black bxs:text-[20px] text-[16px] " />
          <div className="text-left bxs:w-[250px] w-[200px]">
            <div>118/ 5 st Joseph street, Grandpass,</div>
            <div>Colombo 14, Sri Lanaka.</div>
          </div>
        </div>
      </div>
    </>
  );
};

const ConatactUsBanner = () => {
  return (
    <div className="border-2 border-transparent w-full flex justify-center items-center ">
      <div className="shadow-lg border-transparent bxs:h-[550px] h-[400px] w-[80%] bxs:mx-5 bxs:my-5 mx-3 mt-10 rounded-lg bg-gradient-to-r from-black via-40% to-primary md:to-90%  to-60%   flex justify-between overflow-hidden relative">
        <div className="bigmd:flex hidden flex-col items-center justify-center flex-1 mx-5 my-10 text-white">
          <ContactDetails />
        </div>

        <div className="midxl:w-[500px] bigmd:w-[400px] w-full bg-white flex justify-center">
          <Image src={girl} alt="" className="flex w-fit h-full" />
        </div>
        <div className="bigmd:hidden absolute bg-[#eab308d9] w-full text-center flex flex-col items-center  text-black xs:pt-5 xs:pb-5 pt-2  pb-2 bottom-0">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ConatactUsBanner;
