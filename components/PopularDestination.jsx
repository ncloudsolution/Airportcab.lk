"use client";
import React, { useEffect, useState } from "react";
import popular from "@/data/popular.json";
import useWindowSize from "@/hooks/useWindowSize";
const PopularDestination = () => {
  const [windowWidth] = useWindowSize();
  const [myindex, setMyIndex] = useState(62);

  useEffect(() => {
    if (windowWidth > 1536) {
      return setMyIndex(62);
    }
    if (windowWidth > 1024) {
      return setMyIndex(65);
    }
    if (windowWidth > 860) {
      return setMyIndex(67);
    }
    if (windowWidth > 480) {
      return setMyIndex(68);
    }

    return setMyIndex(69);
  }, [myindex, windowWidth]);

  return (
    <>
      {/**bg-gradient-to-b from-gray-300 to bg-slate-100**/}
      <div className="w-full flex flex-col justify-center items-center bg-slate-100 gap-10 py-10 xxs:px-5 px-3">
        <div className="2xl:text-[50px] bigmd:text-[40px] text-[30px] text-center font-semibold text-black">
          Popular Pickups
        </div>
        <div className="w-full bigmd:w-fit grid 2xl:grid-cols-9 lg:grid-cols-6 bigmd:grid-cols-4 xs:grid-cols-3 grid-cols-2 bigmd:gap-5 gap-3">
          {popular.map((town, index) => (
            <div
              key={index}
              className={` text-black px-2 py-1 bg-[white]/30 backdrop-blur-lg rounded-md shadow-sm text-center border-[1px] border-white`}
            >
              {/**${
                index > myindex ? "text-black" : "text-black"
              }**/}
              {town}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularDestination;
