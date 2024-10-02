import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const SliderBtn = ({ side }) => {
  return (
    <FaChevronLeft
      className={` ${
        side === "right" ? "rotate-180  -translate-x-3 " : "translate-x-3 "
      } xl:text-[35px] text-[24px] xxs:translate-x-0  xl:mx-1 mx-0 text-primary `}
    />
  );
};

export default SliderBtn;
