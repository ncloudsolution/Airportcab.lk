import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const SliderBtn = ({ side }) => {
  return (
    <FaChevronLeft
      className={` ${
        side === "right" ? "rotate-180  -translate-x-3 " : "translate-x-3 "
      } bigmd:text-[35px] xxs:text-[32px] text-[24px] xxs:translate-x-0  xxs:mx-1 mx-0 text-primary `}
    />
  );
};

export default SliderBtn;
