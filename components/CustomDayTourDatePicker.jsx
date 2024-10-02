"use client";
import { useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdOutlineDateRange } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const CustomDayTourDatePicker = ({
  selected,
  filterDate,
  onChange,
  className = "",
}) => {
  const datePickerRef = useRef(null);

  const handleOuterDivClick = () => {
    // Programmatically trigger click event on the DatePicker (to set click the outer div)
    datePickerRef.current && datePickerRef.current.setOpen(true);
  };

  return (
    <div
      className={twMerge(
        `px-3 py-1 sm:text-[16px] text-[14px] outline-none w-full rounded border-[1px] border-black bg-white flex justify-between`,
        className
      )}
      onClick={handleOuterDivClick}
    >
      <DatePicker
        ref={datePickerRef}
        className="outline-none"
        selected={selected}
        filterDate={filterDate}
        onChange={onChange}
        minDate={new Date()}
        calendarClassName="date-style"
        placeholderText="Select a Date"
      />

      <MdOutlineDateRange className="text-[20px]" />
    </div>
  );
};

export default CustomDayTourDatePicker;
