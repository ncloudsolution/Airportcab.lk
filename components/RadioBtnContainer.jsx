"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useState, useEffect } from "react";
import { IoIosDoneAll } from "react-icons/io";

const RadioBtnContainer = ({ fullboardDisable = false }) => {
  const mealOptions = ["BB", "HB"];
  if (!fullboardDisable) {
    mealOptions.push("FB");
  }
  const [selectedMealOption, setSelectedMealOption] = useState("BB");
  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      selectedMealOption,
    }));
  }, [selectedMealOption, setTourDetails]);

  const handleChange = (option) => {
    setSelectedMealOption(option);
  };
  return (
    <>
      <div className="w-full flex flex-1 items-center">
        <div className="flex gap-x-6">
          {mealOptions.map((option) => (
            <div key={option} className="flex flex-row w-full items-center">
              <div className=" w-[40px] text-[16px] ">{option}</div>
              <div
                className={` ${
                  selectedMealOption.includes(option)
                    ? "bg-primary border-none"
                    : "border-[1px] border-primary bg-transparent"
                } size-[20px] rounded cursor-pointer flex justify-center items-center`}
                onClick={() => handleChange(option)}
              >
                {selectedMealOption.includes(option) && (
                  <IoIosDoneAll className="text-black text-[20px]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {tourDetails.selectedMealOption && tourDetails.selectedMealOption} */}
    </>
  );
};

export default RadioBtnContainer;
