import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const SliderBtn = ({ side }) => {
  return (
    <FaChevronLeft
      className={` ${
        side === "right"
          ? "rotate-180 right-0 xs:-translate-x-5"
          : "left-0 xs:translate-x-5"
      } xl:text-[35px] text-[24px] xl:mx-1 mx-0 text-primary absolute z-10 top-1/2 -translate-y-1/2 `}
      // className={` ${
      //   side === "right" ? "rotate-180  -translate-x-3 " : "translate-x-3 "
      // } xl:text-[35px] text-[24px] xxs:translate-x-0  xl:mx-1 mx-0 text-primary`}
    />
  );
};

export default SliderBtn;
