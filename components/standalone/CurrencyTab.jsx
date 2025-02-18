import React from "react";
import CustomCurrencyDropDown from "./CustomCurrencyDropDown";
// import CustomCurrencyDropDownWrapper from "./CustomCurrencyDropDown";

const CurrencyTab = () => {
  return (
    <div className="w-full flex justify-center bg-white ">
      <div className=" bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] bigmd:px-20 px-10 bg-black/70 h-[100px] flex justify-center items-center rounded-lg bigmd:gap-x-12 gap-x-5 flex-col bxs:flex-row gap-y-1 py-10 bxs:py-0 border-[1px] border-white my-5">
        <div className="text-white bxs:text-[24px] text-[22px] font-semibold">
          Currency
        </div>
        <div className="bigmd:w-[350px]  w-[200px] relative mb-6">
          <CustomCurrencyDropDown />
        </div>
      </div>
    </div>
  );
};

export default CurrencyTab;
