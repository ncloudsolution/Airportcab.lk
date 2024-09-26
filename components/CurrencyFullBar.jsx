"use client";
import React, { useState } from "react";
import { BsCoin } from "react-icons/bs";
import CurrencyTab from "./standalone/CurrencyTab";

const CurrencyFullBar = () => {
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);
  return (
    <>
      <BsCoin
        className={` ${
          isCurrencyActive ? "translate-y-12" : "translate-y-3 "
        } text-primary bg-black border-[4px] shadow-currencyshadow border-white rounded-full p-1 absolute size-[40px]  lg:size-[45px] lg:right-10 bigmd:right-2 sm:right-10 xxs:right-4 xxxs:right-3 right-1 z-10`}
        onClick={() => setIsCurrencyActive(!isCurrencyActive)}
      />
      <div className={`${isCurrencyActive ? "block" : "hidden"} w-full`}>
        <CurrencyTab />
      </div>
    </>
  );
};

export default CurrencyFullBar;
