import Image from "next/image";
import React from "react";

import cone from "@/public/Exceptions/cone.png";
import cone1 from "@/public/Exceptions/cone1.png";

const BlankFilter = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="size-[200px]">
          <Image src={cone1} alt="" className="h-full w-full" />
        </div>

        <div className=" bigmd:text-[40px] sm:text-[35px] xxs:text-[30px]  xxxs:text-[24px] text-[22px] font-bold px-4 mb-1">
          There is no any matching activities
        </div>
        <div className=" bxs:text-[20px] text-[14px] text-primary">
          Try out a different filter
        </div>
      </div>
    </div>
  );
};

export default BlankFilter;
