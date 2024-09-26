"use client";
import React, { useContext, useEffect } from "react";
import { TourContext } from "@/context/TourContextProvider";

const DayTripsPriceCrad = ({ initialPrice, discountedPrice }) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  return (
    <div className="border-2 border-transparent xs:px-8 px-4 xs:pt-8 pt-5  rounded-lg">
      <div className="flex gap-3 ">
        <div className="midxl:text-[24px] xxs:text-[22px] text-[20px] font-serif ">
          Per Person Approximately
        </div>
        {initialPrice != "null" && (
          <div className="line-through midxl:text-[24px] xxs:text-[20px] text-[18px] font-semibold">
            {tourDetails.converedCurrencySymbol}{" "}
            {(initialPrice * tourDetails.conversionRate).toFixed(2)}
          </div>
        )}
      </div>

      <div className="text-primary text-[35px] xxxs:text-[40px] xxs:text-[45px] xs:text-[50px] font-semibold leading-[80px] xxs:translate-y-0 -translate-y-3 ">
        {tourDetails.converedCurrencySymbol}{" "}
        {(discountedPrice * tourDetails.conversionRate).toFixed(2)}
      </div>
    </div>
  );
};

export default DayTripsPriceCrad;
