"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import Title from "./standalone/Title";
import Link from "next/link";
import Image from "next/image";
import daytrips from "@/data/daytrips.json";
import {
  PriceLowToHigh,
  PriceHighToLow,
  PriceRange,
} from "@/libs/PriceSortings";
import { SelectiveMinMaxDuration } from "@/libs/TimeDurationSorting";

import BlankFilter from "./Exceptions/BlankFilter";
import CurrencyFullBar from "./CurrencyFullBar";
import { TourContext } from "@/context/TourContextProvider";

const DayTrips = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      converedCurrencySymbol: "$",
      currencyType: "USD",
      conversionRate: 1,
    }));
  }, [setTourDetails]);

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);

  const [durationMinVal, setDurationMinVal] = useState(0);
  const [durationMaxVal, setDurationMaxVal] = useState(100);

  const [finalFilterdArray, setFinalFilterdArray] = useState([...daytrips]);

  const [isClickedPrice, setIsClickedPrice] = useState(false);
  const PriceRef = useRef();

  const selectOptions = [
    { lable: "Duration", minvalue: 0, maxvalue: 30000 },
    { lable: "0-3", minvalue: 0, maxvalue: 3 },
    { lable: "3-5", minvalue: 3, maxvalue: 5 },
    { lable: "5-7", minvalue: 5, maxvalue: 7 },
    { lable: "Full day (7+ hours)", minvalue: 7, maxvalue: 24 },
    { lable: "2 days", minvalue: 25, maxvalue: 48 },
  ];

  const handleChangeDuration = (e) => {
    const selectedOption = selectOptions[e.target.value];
    setDurationMinVal(selectedOption.minvalue);
    setDurationMaxVal(selectedOption.maxvalue);
  };

  const handleClickOutside = (e) => {
    if (PriceRef.current && !PriceRef.current.contains(e.target)) {
      setIsClickedPrice(false);
    }
  };

  //use for selctive hour range instant ui update and initial rendering
  useEffect(() => {
    const SelectiveMinMaxDurationValue = SelectiveMinMaxDuration(
      durationMinVal,
      durationMaxVal
    );
    setFinalFilterdArray(SelectiveMinMaxDurationValue);
  }, [durationMinVal, durationMaxVal]);

  //for click outside events
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClickedPrice]);

  const handlePriceLowToHigh = () => {
    const lowToHighValue = PriceLowToHigh("daytrips");
    setFinalFilterdArray(lowToHighValue);
    setTimeout(() => {
      setIsClickedPrice(false);
    }, 100);
  };

  const handlePriceHighToLow = () => {
    const highToLowValue = PriceHighToLow("daytrips");
    setFinalFilterdArray(highToLowValue);
    setTimeout(() => {
      setIsClickedPrice(false);
    }, 100);
  };

  const handleSubmitRange = (e) => {
    e.preventDefault();
    const priceRangeValue = PriceRange(
      minVal,
      maxVal,
      tourDetails.conversionRate,
      "daytrips"
    );
    setFinalFilterdArray(priceRangeValue);
    setIsClickedPrice(false);
  };

  return (
    <div className="w-full flex flex-col text-center items-center mt-10 mb-5">
      <CurrencyFullBar />
      <div className="mt-2">
        <Title title={"Day Trips"} />
      </div>

      <div className="flex gap-2 flex-col midxl:w-[1330px] mobile:w-[1000px] bigmd:w-[666px] sm:w-[300px] xs:w-[350px] xxs:w-[310px] xxxs:w-[285px] w-[240px] px-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-3">
            <div
              className="font-semibold px-4 h-[40px] text-primary flex items-center border-[1px] border-primary rounded "
              onClick={() => setIsClickedPrice(true)}
            >
              Price
            </div>

            {/** duration drop down**/}
            <div className="flex gap-2 w-[300px] h-[40px]  border-primary border-[1px] outline-none my-2 rounded overflow-hidden ">
              <select
                className="w-full outline-none font-semibold text-primary bg-white "
                onChange={handleChangeDuration}
              >
                {selectOptions.map((option, index) => (
                  <option key={index} value={index} className="text-black ">
                    {option.lable}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-start relative">
            {isClickedPrice && (
              <div className="flex absolute z-50 ">
                <div
                  className="flex flex-col gap-1  p-3 rounded bg-white shadow-popshadow"
                  ref={PriceRef}
                >
                  <div className="flex gap-x-3 sm:justify-start   justify-between mb-2">
                    <button
                      className="active:bg-primary active:text-white transition-all duration-200 border-black border-[1px] p-2 rounded text-[14px] xxxs:text-[16px]"
                      onClick={handlePriceLowToHigh}
                    >
                      Low to high
                    </button>
                    <button
                      className="active:bg-primary active:text-white border-black transition-all duration-200 border-[1px] p-2 rounded text-[14px] xxxs:text-[16px]"
                      onClick={handlePriceHighToLow}
                    >
                      High to low
                    </button>
                  </div>

                  <form onSubmit={handleSubmitRange} className="flex flex-col">
                    <div className="flex bigmd:flex-row flex-col gap-x-2">
                      <div>
                        <div className="text-left mb-1">Min. price</div>
                        <div className="flex border-[1px] border-slate-600 p-2 bigmd:w-[200px] w-full">
                          <div className="px-2">
                            {tourDetails.converedCurrencySymbol}
                          </div>
                          <input
                            type="number"
                            onChange={(e) => setMinVal(e.target.value)}
                            value={minVal}
                            min={0}
                            className="outline-none w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="text-left mb-1">Max. price</div>
                        <div className="flex border-[1px] border-slate-600 p-2 bigmd:w-[200px] w-full ">
                          <div className="px-2">
                            {tourDetails.converedCurrencySymbol}
                          </div>
                          <input
                            type="number"
                            onChange={(e) => setMaxVal(e.target.value)}
                            value={maxVal}
                            className="outline-none w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                      className="bg-primary text-white p-2 my-2 rounded"
                    />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/** when there is no search on filter**/}
      {finalFilterdArray.length == 0 && <BlankFilter />}

      <div className="flex items-center">
        <div className="py-4 w-full grid midxl:grid-cols-4 mobile:grid-cols-3 bigmd:grid-cols-2 grid-cols-1">
          {finalFilterdArray.map((place, index) => {
            const encodedExperience = encodeURIComponent(
              JSON.stringify(place.experience)
            );
            return (
              //{placearray.map((place, index) => (
              <Link
                href={`/day-trips/${place.description}?type=${place.type}&minduration=${place.minduration}&maxduration=${place.maxduration}&initialPrice=${place.initialPrice}&discountedPrice=${place.discountedPrice}&tags=${place.tags}&img=${place.img}&experience=${encodedExperience}`}
                key={index}
                className="flex flex-col text-left  overflow-hidden   bigmd:w-[300px] sm:w-[500px] xs:w-[315px] xxs:w-[275px] xxxs:w-[250px] w-[220px] h-[450px]  rounded-xl shadow-lg xxxs:m-4 m-2 transition-all duration-3000 "
              >
                <div className="h-[550px] rounded-t-lg relative overflow-hidden">
                  <Image
                    src={place.img}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="px-3 py-2 flex flex-col border-2 border-transparent h-full justify-between">
                  <div className="flex flex-col border-2 border-transparent">
                    <div className="uppercase text-[#63687a] font-semibold text-[14px] my-1">
                      {place.type}
                    </div>
                    <div className="font-semibold flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 ">
                      {place.description}
                    </div>

                    <div className="flex flex-wrap text-[14px] my-2 ">
                      <span className="font-semibold mr-2">
                        {place.minduration}
                        {place.maxduration &&
                        place.maxduration !== place.minduration
                          ? ` - ${place.maxduration}`
                          : ""}{" "}
                        hours
                      </span>
                      {place.tags.map((tag, index) => (
                        <div key={index} className="flex items-center mx-1">
                          <div className="size-[5px] rounded-full bg-black mr-[6px]" />
                          <div>{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col border-2 border-transparent">
                    {place.initialPrice && (
                      <div className="font-semibold line-through text-[15px]">
                        From {tourDetails.converedCurrencySymbol}{" "}
                        {(
                          place.initialPrice * tourDetails.conversionRate
                        ).toFixed(2)}
                      </div>
                    )}
                    <div className="text-primary font-semibold text-[15px]">
                      From {tourDetails.converedCurrencySymbol}{" "}
                      {(
                        place.discountedPrice * tourDetails.conversionRate
                      ).toFixed(2)}
                      <span className="text-black ml-1 text-[15px]">
                        Per Person
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayTrips;
