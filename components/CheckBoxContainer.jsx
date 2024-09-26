"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useState, useEffect } from "react";
import { IoIosDoneAll } from "react-icons/io";

const CheckBoxContainer = ({ contextName, identifier, Selectfunction }) => {
  const customArray = Selectfunction;

  const [activeArray, setActiveArray] = useState([]);
  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      [contextName]: activeArray,
    }));
  }, [activeArray, contextName, setTourDetails]);

  const handleClick = (identifierName) => {
    setActiveArray((prevActiveArray) => {
      if (prevActiveArray.includes(identifierName)) {
        return prevActiveArray.filter(
          (identifierx) => identifierx !== identifierName
        );
      } else {
        return [...prevActiveArray, identifierName];
      }
    });
  };

  return (
    <div className="w-full flex">
      <div className="grid grid-cols-1 bigmd:grid-cols-2 bigmd:gap-x-6 lg:gap-x-10 w-full">
        {customArray.map((list) => (
          <div key={list.id} className="flex flex-row w-full">
            <div className="lg:w-[350px] bigmd:w-[270px] w-full text-[16px]">
              {list[identifier]}
            </div>
            <div
              className={`${
                activeArray.includes(list[identifier])
                  ? "bg-primary border-none"
                  : "border-[1px] border-primary bg-transparent"
              } size-[20px] rounded cursor-pointer flex justify-center items-center`}
              onClick={() => handleClick(list[identifier])}
            >
              {activeArray.includes(list[identifier]) && (
                <IoIosDoneAll className="text-black text-[20px]" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-4">
        <strong>Selected Places:</strong> {activeArray.join(", ")}
      </div> */}

      {/* {tourDetails.checkedPlaces &&
        tourDetails.checkedPlaces.map((place, index) => (
          <div key={index}>{place}</div>
        ))} */}
    </div>
  );
};

export default CheckBoxContainer;
