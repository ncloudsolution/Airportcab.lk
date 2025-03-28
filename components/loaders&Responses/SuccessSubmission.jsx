import Image from "next/image";
import React from "react";
import Link from "next/link";

import success from "@/public/Others/successImg.jpg";

const SuccessSubmission = ({ title, msg, navpath, navtext, img }) => {
  const handleScrollActive = () => {
    document.body.style.overflow = "auto";
  };
  return (
    <div className="xs:h-[90vh] h-[85vh] flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div className="sm:text-[45px] xs:text-[35px] xxs:text-[30px]  xxxs:text-[24px] text-[22px] font-bold mb-5">
          {title}
        </div>

        <div className="mobile:h-[400px] sm:h-[300px] xs:h-[250px] xxs:h-[200px] h-[185px] mobile:w-[600px] sm:w-[450px] xs:w-[375px] xxs:w-[300px] w-[280px] -translate-y-4">
          <Image src={img} alt="" className="h-full w-full" />
        </div>
        <div className="xs:w-[430px] xxs:w-[360px] xxxs:w-[300px] w-[250px] xs:text-[14px] text-[12px] text-center mb-5  -translate-y-4">
          Congratulations! {""}
          {msg}
          {""}. Please check your mail box for the confirmation message. Thank
          you for choosing us!
        </div>

        <Link
          onClick={handleScrollActive}
          className=" sm:text-[24px] xxs:text-[20px]  xxxs:text-[18px] text-[16px] bg-primary text-white px-8 py-2 font-semibold rounded mb-5 -translate-y-2 cursor-pointer"
          href="/"
        >
          {navtext}
        </Link>
      </div>
    </div>
  );
};

export default SuccessSubmission;
