"use client";
import { TourContext } from "@/context/TourContextProvider";
import { GetTimeSlot } from "@/libs/JsonDataCatching";
import React, { useContext, useState, useEffect } from "react";

const DayTripTimer = ({ title }) => {
  // const timeSlots = ["6.00 AM", "6.30 AM", "7.00 AM", "7.30 AM"];
  const [timeSlotsArray, settimeSlotsArray] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const [className, setClassName] = useState(0);

  function getWidthClass(length) {
    if (length === 1) {
      return "w-full text-center flex-1";
    } else if (length === 2) {
      return "w-1/2 text-center flex-1";
    } else if (length === 3) {
      return "w-1/3 text-center flex-1 ";
    } else {
      return " ";
    }
  }

  useEffect(() => {
    const timeSlotsValue = GetTimeSlot(title);
    settimeSlotsArray(timeSlotsValue);
    const size = getWidthClass(timeSlotsValue.length);
    setClassName(size);
  }, [title]);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      selectedTimeSlot: selectedTimeSlot,
    }));
  }, [selectedTimeSlot, setTourDetails]);

  const handleChange = (slot) => {
    setSelectedTimeSlot(slot);
  };
  return (
    <>
      <div className="w-full flex justify-between sm:text-[16px] xxs:text-[14px] text-[12px] items-center">
        {timeSlotsArray.map((slot) => (
          <div
            key={slot}
            className={`border-2 border-transparent ${className}`}
          >
            <div
              className={` ${
                selectedTimeSlot.includes(slot)
                  ? "bg-primary border-[1px] border-transparent"
                  : "border-[1px] border-primary bg-transparent"
              } sm:py-2 py-1 sm:px-3 px-2  rounded cursor-pointer  font-semibold `}
              onClick={() => handleChange(slot)}
            >
              {slot}
            </div>
          </div>
        ))}
      </div>

      {/* {tourDetails.selectedTimeSlot && tourDetails.selectedTimeSlot} */}
    </>
  );
};

export default DayTripTimer;
