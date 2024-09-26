import Image from "next/image";
import React from "react";

import cog from "@/public/Others/cog.gif";

const LoadingComponent = () => {
  return (
    <div className="xs:h-[90vh] h-[85vh] flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div className="sm:text-[45px] xs:text-[35px] xxs:text-[30px]  xxxs:text-[24px] text-[22px] font-bold mb-8">
          Page Loading ...
        </div>

        <div className=" p-2 xs:size-[375px] xxs:size-[300px] size-[280px]  -translate-y-5 flex justify-center items-center">
          <Image
            unoptimized
            src={cog}
            alt="Example GIF"
            className="size-[100%] rounded-full shadow-xl xs:border-[10px] border-[7px] border-black "
          />
        </div>

        <div className="xs:w-[430px] xxs:w-[360px] xxxs:w-[300px] w-[250px] xs:text-[14px] text-[12px] text-center mt-1">
          Thank you for your patience! Your page is loading, please wait a
          moment while we get things ready for you.
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

export default LoadingComponent;
