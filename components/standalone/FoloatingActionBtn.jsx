"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import care from "@/public/contactUs/customercare.png";

const FoloatingActionBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className=" fixed bottom-[30px] right-[3%] z-50 group">
      <div className="flex items-center">
        <div className="flex flex-col gap-y-1">
          {/* <Link
            href="tel:+94719885885"
            target="_blank"
            className={` ${
              isClicked
                ? "scale-100 -translate-x-[20px] duration-300 transition-all"
                : "translate-x-20 scale-0 translate-y-10"
            }  duration-300 transition-all z-30 py-2 px-3 scale-0 bg-[#109c44] rounded-md text-white text-[12px] flex justify-center items-center`}
          >
            Call Us
          </Link> */}
          <Link
            href="mailto:info@airportcab.lk"
            target="_blank"
            className={` ${
              isClicked
                ? "scale-100 -translate-x-[20px] duration-300 transition-all"
                : "translate-x-20 scale-0 translate-y-5"
            }  duration-300 transition-all z-30 py-2 px-3 scale-0 bg-[#FF0000] rounded-md text-white text-[12px] flex justify-center items-center`}
          >
            Email Us
          </Link>
          <Link
            href="https://wa.me/+94703199556"
            target="_blank"
            className={` ${
              isClicked
                ? "scale-100 -translate-x-[20px] duration-300 transition-all"
                : "translate-x-20 scale-0 translate-y-0"
            }  duration-300 transition-all z-30 py-2 px-3 scale-0 bg-[#25D366] rounded-md text-white text-[12px] flex justify-center items-cente`}
          >
            WhatsApp Us
          </Link>
          <Link
            href="https://t.me/Tourbookingsrilanka"
            target="_blank"
            className={` ${
              isClicked
                ? "scale-100 -translate-x-[20px] duration-300 transition-all"
                : "translate-x-20 scale-0 -translate-y-5"
            } duration-300 transition-all z-30 py-2 px-3 scale-0 bg-[#24A1DE] rounded-md text-white text-[12px] flex justify-center items-cente`}
          >
            Telegram Us
          </Link>
        </div>
        <div
          className="p-2 flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white border-[3px] border-primary shadow-customercareshadow z-40 overflow-hidden"
          onClick={() => setIsClicked(!isClicked)}
        >
          <Image
            alt=""
            className="h-[40px] w-[40px]  object-contain "
            src={care}
          />
        </div>
      </div>
    </div>
  );
};

export default FoloatingActionBtn;
