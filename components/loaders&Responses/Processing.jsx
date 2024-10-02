import Image from "next/image";
import React from "react";
import Link from "next/link";

import crashed from "@/public/Exceptions/crashed.png";

const Processing = ({ title, msg }) => {
  return (
    <div className="xs:h-[90vh] h-[85vh]  flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div className="sm:text-[45px] xs:text-[35px] xxs:text-[30px]  xxxs:text-[24px] text-[22px] font-bold mb-8">
          {title}
        </div>

        <div className="sm:h-[300px] h-[250px] sm:w-[450px] xs:w-[375px] xxs:w-[300px] w-[280px] -translate-y-5 flex justify-center items-center">
          <div className="border-4 py-5 px-3 border-black sm:w-[230px] sm:h-[280px] w-[180px] h-[230px] rounded">
            <div className="flex flex-col justify-between h-full">
              <div className="xs:h-[15px] h-[12px] w-full bg-black"></div>
              <div className="flex flex-col gap-2">
                <div className="xs:h-[10px] h-[8px] animate-line1 bg-black"></div>
                <div className="xs:h-[10px] h-[8px] animate-line2 bg-primary"></div>
                <div className="xs:h-[10px] h-[8px] animate-line3 bg-black"></div>
                <div className="xs:h-[10px] h-[8px]animate-line4 bg-black"></div>
                <div className="xs:h-[10px] h-[8px] animate-line3 bg-black"></div>
                <div className="xs:h-[10px] h-[8px] animate-line2 bg-primary"></div>
                <div className="xs:h-[10px] h-[8px] animate-line1 bg-black"></div>
              </div>

              <div className="xs:h-[15px] h-[12px] w-full bg-black"></div>
            </div>
          </div>
        </div>
        <div className="xs:w-[430px] xxs:w-[360px] xxxs:w-[300px] w-[250px] xs:text-[14px] text-[12px] text-center mt-1">
          Thank you for your {""}
          {msg}
          {""} within our system. Please wait for confirmation
        </div>

        {/* <Link
          className=" sm:text-[24px] xxs:text-[20px]  xxxs:text-[18px] text-[16px] bg-primary px-8 py-2 font-semibold rounded mb-5 -translate-y-2 cursor-pointer"
          href="/"
        >
          New Booking
        </Link> */}
      </div>
    </div>
  );
};

export default Processing;
