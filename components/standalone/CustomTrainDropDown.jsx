"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTrain } from "react-icons/fa6";
import trains from "@/data/trains.json";
import { TourContext } from "@/context/TourContextProvider";

const CustomTrainDropDown = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [stations, setStations] = useState([...trains]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
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
    <div className="w-full absolute z-[1] left-0 right-0  h-[39px]">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white  w-full border-[1px] text-[12px] xs:text-[14px] border-black p-2 flex items-center justify-between rounded ${
          !selected && "text-[#8e8e8e]   h-[39px]"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Catch Your Train"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        ref={DropDownRef}
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60 border-[1px] border-black rounded  mb-2" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white shadow">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Your Starting Station"
            className="placeholder:text-gray-700 placeholder:text-[12px] xs:placeholder:text-[14px] p-2 outline-none w-full"
          />
        </div>
        {stations?.map((station) => (
          <li
            key={station?.travelPoints}
            className={`py-2 px-3 text-[12px] xs:text-[14px] hover:bg-black hover:text-white flex items-center m-1 rounded
            ${
              station?.travelPoints?.toLowerCase() ===
                selected?.toLowerCase() && "bg-primary text-black"
            }
            ${
              station?.travelPoints?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                station?.travelPoints?.toLowerCase() !== selected.toLowerCase()
              ) {
                setSelected(station?.travelPoints);
                {
                  /**to context**/
                }
                setTourDetails((prevTourDetails) => ({
                  ...prevTourDetails,
                  trainTourPoints: station?.travelPoints,
                }));

                setOpen(false);
                setInputValue("");
              }
            }}
          >
            <FaTrain size={15} className="mr-2" />
            {station?.travelPoints}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomTrainDropDown;
