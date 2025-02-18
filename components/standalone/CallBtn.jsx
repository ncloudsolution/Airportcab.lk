import Link from "next/link";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const CallBtn = () => {
  return (
    <Link
      // href="tel:+94719885885"
      href="https://wa.me/+94703199556"
      target="_blank"
      className="fixed shadow-customercareshadow border-[3px] border-white bottom-[125px] right-[3%] z-50 p-2 size-[60px] bg-[#109c44] rounded-full  text-white text-[12px] flex justify-center items-center"
    >
      <FaWhatsapp className="text-[30px]" />
    </Link>
  );
};

export default CallBtn;
