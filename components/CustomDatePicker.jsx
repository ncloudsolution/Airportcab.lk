"use client";
import { useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdOutlineDateRange } from "react-icons/md";

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const datePickerRef = useRef(null);

  const handleOuterDivClick = () => {
    // Programmatically trigger click event on the DatePicker (to set click the outer div)
    datePickerRef.current && datePickerRef.current.setOpen(true);
  };

  return (
    <div
      className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full  shadow-md rounded border-[1px] border-black bg-white flex justify-between"
      onClick={handleOuterDivClick}
    >
      <DatePicker
        ref={datePickerRef}
        className="outline-none"
        selected={selectedDate}
        onChange={onChange}
        showTimeSelect
        dateFormat="Pp"
        minDate={new Date()}
        calendarClassName="date-style"
      />

      <MdOutlineDateRange className="text-[20px]" />
    </div>
  );
};

export default CustomDatePicker;
