"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCar } from "react-icons/fa";

import { TourContext } from "@/context/TourContextProvider";

const CustomVehicalDropDown = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [vehicals, setVehicals] = useState([
    "Sedan - (1-3 Passengers)",
    "Mini car - (1-2 Passengers)",
    "Micro vans - (1-3 Passengers)",
    "High roof - (1-7 Passengers)",
    "Mini coaches - (1-14 Passengers)",
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(vehicals[0]);
  const [open, setOpen] = useState(false);

  //outer click hidden function
  const DropDownRef = useRef();

  const handleClickOutside = (e) => {
    if (DropDownRef.current && !DropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {}, [tourDetails]);

  //function over
  return (
    <div className="w-full relative flex flex-1 h-[34px] ">
      <div className="w-full absolute z-[1] left-0 right-0  h-[40px]">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white  w-full border-[1px] text-[12px] xs:text-[14px] border-black p-2 flex items-center justify-between rounded ${
            !selected && "text-[#8e8e8e]   h-[34px] py-1 px-3"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Your Vehical"}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <ul
          ref={DropDownRef}
          className={`bg-white mt-2 overflow-y-auto ${
            open
              ? "max-h-64 border-[1px] border-black rounded  mb-2"
              : "max-h-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white shadow">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Enter Your Favourite Vehical"
              className="placeholder:text-gray-700 placeholder:text-[12px] xs:placeholder:text-[14px] p-2 outline-none w-full"
            />
          </div>
          {vehicals?.map((vehical, index) => (
            <li
              key={index}
              className={`py-2 px-3 text-[12px] xs:text-[14px] hover:bg-black hover:text-white flex items-center m-1 rounded
            ${
              vehical.toLowerCase() === selected?.toLowerCase() &&
              "bg-primary text-black"
            }
            ${
              vehical.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
            }`}
              onClick={() => {
                if (vehical.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(vehical);
                  {
                    /**to context**/
                  }
                  setTourDetails((prevDetails) => ({
                    ...prevDetails,
                    selectedVehical: vehical,
                  }));

                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              <FaCar size={20} className="mr-2" />
              {vehical}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomVehicalDropDown;
