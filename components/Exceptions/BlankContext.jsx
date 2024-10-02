import Image from "next/image";
import React from "react";
import Link from "next/link";

import crashed from "@/public/Exceptions/crashed.png";

const BlankContext = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="sm:text-[45px] xs:text-[35px] xxs:text-[30px]  xxxs:text-[24px] text-[22px] font-bold mb-5">
          Oops! that page is gone
        </div>

        <div className="sm:h-[300px] xs:h-[250px] xxs:h-[200px] h-[185px]  sm:w-[450px] xs:w-[375px] xxs:w-[300px] w-[280px] -translate-y-4">
          <Image src={crashed} alt="" className="h-full w-full" />
        </div>
        <div className="xs:w-[430px] xxs:w-[360px] xxxs:w-[300px] w-[250px] xs:text-[14px] text-[12px] text-center mb-5  -translate-y-4">
          It looks like the content you were viewing has been refreshed. Not to
          worry! Why not start a new booking session?
        </div>

        <Link
          className=" sm:text-[24px] xxs:text-[20px]  xxxs:text-[18px] text-[16px] bg-primary px-8 py-2 font-semibold rounded mb-5 -translate-y-2 cursor-pointer"
          href="/"
        >
          New Booking
        </Link>
      </div>
    </div>
  );
};

export default BlankContext;
