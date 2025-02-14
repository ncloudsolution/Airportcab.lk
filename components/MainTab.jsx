"use client";
import React, { useContext, useEffect, useState } from "react";
import PointToPointMap from "./Map/PointToPointMap";
import AirportMap from "./Map/AirportMap";
import TrainMap from "./Map/TrainMap";
import CarSkeleton from "./skeletonUI/compoundElements/CarSkeleton";
import { useJsApiLoader } from "@react-google-maps/api";
// import Link from "next/link";

import { RiPinDistanceFill } from "react-icons/ri";
import { MdLocalAirport } from "react-icons/md";
import { FaTrain } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import Hierarchy from "./standalone/Hierarchy";
import { BsCoin } from "react-icons/bs";

import CurrencyTab from "./standalone/CurrencyTab";
import { TourContext } from "@/context/TourContextProvider";

const MainTab = () => {
  const [isPointToPointClicked, setIsPointToPointClicked] = useState(false);
  const [isAirportClicked, setIsAirportClicked] = useState(true);
  const [isTrainClicked, setIsTrainClicked] = useState(false);
  const [isDayTourClick, setDayTourClick] = useState(false);
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);

  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      converedCurrencySymbol: "Rs",
      currencyType: "LKR",
      conversionRate: 1,
    }));
  }, [setTourDetails]);

  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // 3 seconds delay - 1s for google api load and 2 second timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const libraries = ["places"];
  setTimeout(() => {}, 1000);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    region: "lk",
    libraries: libraries,
  });

  if (!isLoaded || showSkeleton) {
    return (
      <>
        <CarSkeleton />
      </>
    );
  }

  const handlePointToPoint = () => {
    setIsPointToPointClicked(true);
    setIsTrainClicked(false);
    setIsAirportClicked(false);
    setDayTourClick(false);
  };

  const handleAirport = () => {
    setIsAirportClicked(true);
    setIsPointToPointClicked(false);
    setIsTrainClicked(false);
    setDayTourClick(false);
  };

  const handleTrain = () => {
    setIsTrainClicked(true);
    setIsAirportClicked(false);
    setIsPointToPointClicked(false);
    setDayTourClick(false);
  };

  // const handleDayTour = () => {
  //   setDayTourClick(true);
  //   setIsTrainClicked(false);
  //   setIsAirportClicked(false);
  //   setIsPointToPointClicked(false);
  // };

  // const hi = SetHighwayCharge("A", "Athurugiriya");
  //

  return (
    <div>
      <BsCoin
        className={` ${
          isCurrencyActive ? "text-primary" : "text-newprimary"
        } rounded-full  border-[4px] shadow-currencyshadow border-black absolute size-[40px]  lg:size-[45px]  lg:text-[40px] lg:right-10 bigmd:right-2 sm:right-10 xxs:right-5 right-3 bxs:translate-y-12 xs:translate-y-32 translate-y-12 z-10`}
        onClick={() => setIsCurrencyActive(!isCurrencyActive)}
      />
      <div className={`${isCurrencyActive ? "block" : "hidden"}`}>
        <CurrencyTab />
      </div>
      <div className="flex justify-center w-full bg-transparent px-0 ">
        {/**bg-gradient-to-b from-primary  to-newprimary **/}
        <div className="flex z-10 justify-center items-center flex-col bg-gradient-to-b from-white  to-gray-200  w-full bg-[length:100%_850px] bigmd:bg-[length:100%_600px]">
          <div className="w-[80%] flex justify-center">
            <div
              className={` ${
                isCurrencyActive ? "mt-0" : "mt-0"
              } w-full flex justify-center bg-[white]/50 shadow-lg rounded-md backdrop-blur-lg mt-[40px]`}
            >
              <Hierarchy />
            </div>
          </div>

          <div className="flex flex-col bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] items-start mt-5">
            <div className="bigmd:flex  hidden gap-3 mt-3 mb-5 bxs:text-[16px] text-[12px] w-full justify-center">
              <div
                className={`${
                  isAirportClicked
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                } p-1 px-2   rounded cursor-pointer transition-all duration-500`}
                onClick={handleAirport}
              >
                Airport Transport
              </div>

              <div
                className={`${
                  isPointToPointClicked
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                } p-1 px-2   rounded cursor-pointer transition-all duration-500`}
                onClick={handlePointToPoint}
              >
                Taxi Service
              </div>

              <div
                className={`${
                  isTrainClicked
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                } p-1 px-2   rounded cursor-pointer transition-all duration-500`}
                onClick={handleTrain}
              >
                Train booking
              </div>
              {/* <Link
                className="p-1 px-2 bg-white text-black rounded cursor-pointer"
                href={"/day-trips"}
              >
                Day trips
              </Link> */}
            </div>

            {/**mobile area**/}
            <div className="bigmd:hidden  flex flex-col gap-3 text-[30px] text-white my-4 bxs:justify-start justify-center w-full ">
              <div
                className="flex items-center gap-x-4 "
                onClick={handleAirport}
              >
                <MdLocalAirport
                  className={` ${
                    isAirportClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  } bxs:size-[40px] text-black size-[35px]  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isAirportClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }  text-[16px] flex-1   rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Airport Transport
                </div>
              </div>

              <div
                className="flex items-center gap-x-4 "
                onClick={handlePointToPoint}
              >
                <RiPinDistanceFill
                  className={` ${
                    isPointToPointClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  } bxs:size-[40px] size-[35px]   rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isPointToPointClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }  text-[16px] flex-1 text-blacke  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Taxi Service
                </div>
              </div>

              <div className="flex items-center gap-x-4 " onClick={handleTrain}>
                <FaTrain
                  className={` ${
                    isTrainClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  } bxs:size-[40px] size-[35px]   rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isTrainClicked
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }  text-[16px] flex-1 text-blacke  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Train Booking
                </div>
              </div>

              {/* <Link
                className="flex items-center gap-x-4 "
                href={"/day-trips"}
                onClick={handleDayTour}
              >
                <IoCarSportSharp
                  className={` ${
                    isDayTourClick ? "bg-primary" : "bg-white"
                  } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isDayTourClick ? "bg-primary" : "bg-white"
                  }  text-[16px] flex-1 text-black  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Day Trips
                </div>
              </Link> */}
            </div>
          </div>
          <div>
            {isAirportClicked && <AirportMap isLoaded={isLoaded} />}
            {isPointToPointClicked && <PointToPointMap />}

            {isTrainClicked && <TrainMap />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTab;
