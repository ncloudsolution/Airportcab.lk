"use client";
import { useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdOutlineDateRange } from "react-icons/md";

const CustomMiniDatePicker = ({ selectedDate, onChange }) => {
  const datePickerRef = useRef(null);

  const handleOuterDivClick = () => {
    // Programmatically trigger click event on the DatePicker (to set click the outer div)
    datePickerRef.current && datePickerRef.current.setOpen(true);
  };

  return (
    <div
      className="px-2 font-normal py-1.5 text-[14px] outline-none bigmd:w-[220px]  w-full  shadow-md rounded border-[1px] border-black bg-white flex justify-between"
      onClick={handleOuterDivClick}
    >
      <div className="w-[180px]">
        <DatePicker
          ref={datePickerRef}
          className="outline-none"
          selected={selectedDate}
          onChange={onChange}
          showTimeSelect
          dateFormat="Pp"
          minDate={new Date()}
          calendarClassName="date-style"
          placeholderText="Enter Arrival Date"
        />
      </div>

      <MdOutlineDateRange className="text-[20px]  z-10" />
    </div>
  );
};

export default CustomMiniDatePicker;
