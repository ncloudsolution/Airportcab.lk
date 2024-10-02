"use client";
import React, { useState } from "react";

const DayTripsDescriptionSection = ({ DescriptionParagraph, PlacesArray }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-2  w-full">
      <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
        Description
      </div>
      <div
        className={`${
          isExpanded ? "h-fit" : "h-[170px] overflow-hidden"
        } my-2 `}
      >
        <div className="font-semibold">
          Below are the locations for your day trip
        </div>
        {PlacesArray && (
          <div className="my-2">
            {PlacesArray.map((place, index) => (
              <div key={index} className="flex gap-x-1 ">
                <div>{index + 1}.</div>
                <div className=" md:text-[15px] text-[14px]  w-full">
                  {place}
                </div>
              </div>
            ))}
          </div>
        )}
        {DescriptionParagraph.map((des, index) => (
          <div key={index}>
            <div className=" md:text-[15px] text-[14px]  w-full py-2">
              {des}
            </div>
          </div>
        ))}
      </div>
      <div
        className="-translate-y-3 font-semibold text-primary cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default DayTripsDescriptionSection;
