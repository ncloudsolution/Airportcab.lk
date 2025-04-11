"use client";
import React, { useContext, useRef, useState, useEffect } from "react";
import { TourContext } from "../context/TourContextProvider";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useRouter } from "next/navigation";

import otherPrices from "@/data/otherPrices.json";
import Hierarchy from "./standalone/Hierarchy";
import CustomHighwayDropDown from "./standalone/CustomHighwayDropDown";
import CurrencyTab from "./standalone/CurrencyTab";
import CustomMiniDatePicker from "./CustomMiniDatePicker";

import boardimg from "@/public/Others/boardshow.png";
import BlankContext from "./Exceptions/BlankContext";

const MidSummary = () => {
  const router = useRouter();

  const { tourDetails, setTourDetails } = useContext(TourContext);

  //const [file, setFile] = useState(null);

  const cusNameRef = useRef();
  const cusEmailRef = useRef();
  const cusMobileRef = useRef();
  const cusWhatsappMobileRef = useRef();
  const cusFlightNoRef = useRef();
  // const cusNicPassportRef = useRef();
  const cusDisplayNameRef = useRef();

  const cusLuggageCountRef = useRef();

  const [mobValue, setMobValue] = useState();
  const [whatsappMobValue, setWhatsappMobValue] = useState();
  const [submitError, setSubmitError] = useState();

  const [isAirport, setIsAirport] = useState(true);

  const [boardShow, setBoardShow] = useState(tourDetails.boardShow || false);

  const [highwayCharge, setHighwayCharge] = useState(
    tourDetails.highwayCharge * tourDetails.conversionRate || null
  );
  const [highwayExit, setHighwayExit] = useState(
    tourDetails.highwayExit || null
  );

  const [arrivalDate, setArrivalDate] = useState(tourDetails.arrivalDate || "");

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      cusNameRef.current.value === "" ||
      cusEmailRef.current.value === "" ||
      cusMobileRef.current.value === "" ||
      cusLuggageCountRef.current.value === "" ||
      // cusNicPassportRef.current.value === "" ||
      (tourDetails.tourType === "airport" &&
        (cusFlightNoRef.current.value === "" || arrivalDate === "")) /*|| 
      file === null*/ // Uncomment this if you need to check if a file is uploaded
    ) {
      return setSubmitError("Fill all the fields ");
      {
        /**& submit the reference document**/
      }
    }

    if (
      cusLuggageCountRef.current.value != 0 &&
      cusLuggageCountRef.current.value > tourDetails.luggages
    ) {
      return setSubmitError(
        "You Exceeded the luggage maximum count of this vehical please change the luggage count or change the vehical"
      );
    }

    if (boardShow) {
      if (cusDisplayNameRef.current.value === "") {
        return setSubmitError("Fill the display Name");
      }
    }

    setTourDetails((prevDetails) => ({
      ...prevDetails,
      customerName: cusNameRef.current.value,
      customerEmail: cusEmailRef.current.value,
      // customerNicPassport: cusNicPassportRef.current.value,
      cusDisplayName: boardShow ? cusDisplayNameRef.current.value : "",
      customerMobileNo: cusMobileRef.current.value,
      customerWhatsappMobileNo: cusWhatsappMobileRef.current.value,
      customerFlightNo: isAirport ? cusFlightNoRef.current.value : null,
      arrivalDate: arrivalDate,
      customerLuggageCount: cusLuggageCountRef.current.value,
      boardShow: boardShow ? otherPrices[0].boardShow : 0,
      highwayCharge: highwayCharge,
      // highwayCharge: parseFloat(
      //   (tourDetails.highwayCharge * tourDetails.conversionRate).toFixed(2)
      // ),

      totalPrice: (
        parseFloat(tourDetails.convertedPrice) + // Convert to float to handle potential string values
        (boardShow
          ? parseFloat(
              (otherPrices[0]?.boardShow * tourDetails.conversionRate).toFixed(
                2
              )
            ) // Apply toFixed to the product of boardShow and conversionRate
          : 0) +
        parseFloat(
          (tourDetails.highwayCharge * tourDetails.conversionRate).toFixed(2)
        )
      ) //issue here
        .toFixed(2),

      totalLKRPrice: (
        parseFloat(
          tourDetails.isReturntour ? tourDetails.price * 2 : tourDetails.price
        ) +
        (boardShow ? parseFloat((otherPrices[0]?.boardShow).toFixed(2)) : 0) +
        parseFloat(
          (tourDetails.highwayCharge * tourDetails.conversionRate).toFixed(2)
        )
      ).toFixed(2),

      pageThreeToken: true,
    }));
    // router.push("/newtesting");

    router.push("/tour-booking/summary");
  }

  // Function to handle changes in the input field for customer name
  const handleCustomerNameChange = (e) => {
    const newCustomerName = e.target.value; // Get input value
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerName: newCustomerName, // Update customerName in tourDetails
    }));
  };

  const handleCustomerEmailChange = (e) => {
    const newCustomerEmail = e.target.value; // Get input value
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerEmail: newCustomerEmail, // Update customerEmail in tourDetails
    }));
  };

  // const handleCustomerNicPassport = (e) => {
  //   const newCustomerNicPassport = e.target.value; // Get input value
  //   setTourDetails((prevTourDetails) => ({
  //     ...prevTourDetails,
  //     customerNicPassport: newCustomerNicPassport, // Update nic/passport in tourDetails
  //   }));
  // };

  const handleLuggageCountChange = (e) => {
    const newLuggageCount = parseInt(e.target.value); // Parse input value to integer
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerLuggageCount: newLuggageCount,
    }));
  };

  const handleFlightNoChange = (e) => {
    const newFlightNo = e.target.value; // Parse input value to integer
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerFlightNo: newFlightNo,
    }));
  };

  const handleCusDisplayNameChange = (e) => {
    const newDisplayName = e.target.value; // Parse input value to integer
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      cusDisplayName: newDisplayName,
    }));
  };

  useEffect(() => {
    if (tourDetails.tourType === "p2p") {
      setIsAirport(false);
    }
  }, [tourDetails.tourType, isAirport]);

  useEffect(() => {
    setHighwayCharge(tourDetails.highwayCharge);
    setHighwayExit(tourDetails.highwayExit);
  }, [tourDetails.highwayExit, tourDetails.highwayCharge]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: 0, // Scroll down by 200px
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, []);

  return (
    <>
      <div className="mt-0 mb-4 ">
        {tourDetails.vehicleType && (
          <div className="flex flex-col items-center ">
            <CurrencyTab />
            <div className="mb-10 w-full flex justify-center bg-white shadow-md">
              <Hierarchy />
            </div>
            <div className="bg-transparent rounded border-[2px] border-primary p-2 mb-14 font-semibold gap-y-1 bigmd:w-[820px] bxs:w-[450px] w-[330px]">
              <div className="text-center text-[30px]">
                Registration Details
              </div>

              <div className="flex flex-col border-2 border-transparent bxs:my-3 my-1 bxs:text-[16px] text-[14px]">
                <div className="flex gap-x-4 border-2 border-transparent bigmd:flex-row flex-col justify-center items-center">
                  <div className=" flex-1 bigmd:h-[400px] h-[200px]  flex items-center justify-center border-2 border-transparent ">
                    <Image
                      src={tourDetails.image}
                      alt=""
                      width={380}
                      height={380}
                      className="border-2 border-transparent object-cover"
                    />
                  </div>

                  {/**vehicle**/}
                  <div className="border-2 border-transparent bigmd:w-[360px] w-full py-4">
                    <div className="text-[16px]">Vehicle</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>

                    <div className=" w-full flex justify-between ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Selected Vehicle
                      </span>
                      <span className="font-normal">
                        {tourDetails.vehicleType}
                      </span>
                    </div>

                    <div className="w-full flex justify-between ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Seat Capacity
                      </span>
                      <span className="font-normal">
                        {tourDetails.vehicalSeatCapacityMax} Seats
                      </span>
                    </div>

                    <div className="w-full flex justify-between">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Price for Vehical
                      </span>
                      <span className="font-normal">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.convertedPrice}
                      </span>
                    </div>

                    {boardShow && (
                      <div className=" w-full flex justify-between">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          Board Show
                        </span>
                        <span className="font-normal">
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(
                            otherPrices[0].boardShow *
                            tourDetails.conversionRate
                          ).toFixed(2)}
                        </span>
                      </div>
                    )}

                    {/* 
highwayExit: station,
                    highwayCharge: highwayChargeValue, */}

                    {highwayExit &&
                      highwayExit !== "None" &&
                      highwayCharge !== "No any Charge" && (
                        <div className="w-full flex justify-between">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Highway Charges
                          </span>
                          <span className="font-normal">
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.highwayCharge *
                              tourDetails.conversionRate
                            ).toFixed(2)}
                          </span>
                        </div>
                      )}

                    <div className=" w-full flex justify-between mt-5">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Total Price
                      </span>
                      <span className="font-normal border-double border-y-4 border-black">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {(
                          parseFloat(tourDetails.convertedPrice) + // Convert to float to handle potential string values
                          (boardShow
                            ? parseFloat(
                                (
                                  otherPrices[0]?.boardShow *
                                  tourDetails.conversionRate
                                ).toFixed(2)
                              ) // Apply toFixed to the product of boardShow and conversionRate
                            : 0) +
                          parseFloat(
                            tourDetails.highwayCharge *
                              tourDetails.conversionRate
                          )
                        ).toFixed(2)}
                      </span>
                    </div>

                    {/**highway section**/}
                    {tourDetails.tourType === "airport" ? (
                      <div className="my-5  text-[12px] bg-black text-white shadow-md p-3 rounded">
                        Highway charges are optional. If selected, no extra fees
                        are needed during the tour. Otherwise, you can be paid
                        at the highway counter.
                      </div>
                    ) : (
                      <div className="my-5  text-[12px] bg-black text-white shadow-md p-3 rounded">
                        Highway charges are not included, you can be paid
                        highway fair at the highway counter if needed.
                      </div>
                    )}

                    {tourDetails.tourType === "airport" && (
                      <div className=" flex items-center w-full  bxs:mt-3 bxs:my-0 my-1 justify-between">
                        <span className="bigmd:w-[140px]   bxs:w-[180px] w-[140px] bg-transparent">
                          Highway {tourDetails.isPickup ? "Exit" : "Entrance"}
                        </span>
                        <div className=" bigmd:w-[220px]  bxs:w-[220px] w-full relative ">
                          <CustomHighwayDropDown />
                        </div>
                      </div>
                    )}
                  </div>
                  {/**vehicle end**/}
                </div>

                {/****/}

                <div className="flex gap-x-8 border-2 border-transparent bigmd:flex-row flex-col-reverse ">
                  {/**customer**/}
                  <div className="mt-4 border-2 border-transparent bxs:w-[402px] w-full">
                    <div>Customer</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>
                    <form onSubmit={handleSubmit}>
                      <div className="flex gap-y-1 flex-col">
                        <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 ">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Passengers Name
                          </span>
                          <input
                            onChange={handleCustomerNameChange} // Handle changes to the input field
                            ref={cusNameRef}
                            value={tourDetails.customerName}
                            placeholder="Passenger Name"
                            type="text"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Email
                          </span>
                          <input
                            onChange={handleCustomerEmailChange} // Handle changes to the input field
                            value={tourDetails.customerEmail}
                            ref={cusEmailRef}
                            placeholder="Passenger Email"
                            type="email"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        {/* <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            NIC/Passport No
                          </span>
                          <input
                            onChange={handleCustomerNicPassport} // Handle changes to the input field
                            value={tourDetails.customerNicPassport}
                            ref={cusNicPassportRef}
                            placeholder="NIC / Passport No"
                            type="text"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div> */}

                        {tourDetails.tourType === "airport" && (
                          <>
                            <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 font-normal">
                              <span className="bxs:w-[180px] w-[150px] bg-transparent font-semibold  ">
                                {tourDetails.isPickup
                                  ? " Arrival Date/time"
                                  : "Depart Date/time"}
                              </span>
                              <div className="">
                                <CustomMiniDatePicker
                                  selectedDate={arrivalDate}
                                  onChange={(date) => setArrivalDate(date)}
                                />
                              </div>
                            </div>
                            <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 ">
                              <span className="bxs:w-[180px] w-[150px] bg-transparent  ">
                                Flight No
                              </span>
                              <input
                                value={tourDetails.customerFlightNo}
                                onChange={handleFlightNoChange} // Handle changes to the input field
                                ref={cusFlightNoRef}
                                placeholder="UL-108"
                                type="text"
                                className="p-1  font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                              />
                            </div>
                          </>
                        )}

                        <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Mobile No
                          </span>
                          <div className="shadow-md rounded border-[1px] border-black bxs:w-[220px] w-full bg-white p-1 font-normal ">
                            <PhoneInput
                              international
                              countryCallingCodeEditable={false}
                              defaultCountry="LK"
                              value={tourDetails.customerMobileNo || mobValue}
                              onChange={setMobValue}
                              className="PhoneInputInput"
                              ref={cusMobileRef}
                              error={
                                mobValue
                                  ? isValidPhoneNumber(mobValue)
                                    ? undefined
                                    : "Invalid phone number"
                                  : "Phone number required"
                              }
                            />
                          </div>

                          {/**
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-black "
                    />**/}
                        </div>

                        <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Whatsapp No
                          </span>
                          <div className="shadow-md rounded border-[1px] border-black bxs:w-[220px] w-full bg-white p-1 font-normal ">
                            <PhoneInput
                              international
                              countryCallingCodeEditable={false}
                              defaultCountry="LK"
                              value={
                                tourDetails.customerWhatsappMobileNo ||
                                whatsappMobValue
                              }
                              onChange={setWhatsappMobValue}
                              className="PhoneInputInput"
                              ref={cusWhatsappMobileRef}
                              error={
                                whatsappMobValue
                                  ? isValidPhoneNumber(
                                      tourDetails.customerMobileNo ||
                                        whatsappMobValue
                                    )
                                    ? undefined
                                    : "Invalid phone number"
                                  : "Phone number required"
                              }
                            />
                          </div>

                          {/**
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-black "
                    />**/}
                        </div>

                        <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            No of Luggagues
                          </span>
                          <input
                            value={tourDetails.customerLuggageCount}
                            onChange={handleLuggageCountChange} // Handle changes to the input field
                            ref={cusLuggageCountRef}
                            placeholder="No.Luggages"
                            type="number"
                            min="0"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            No of Passengers
                          </span>
                          <span className="font-normal">
                            {tourDetails.noOfPassengers}{" "}
                            {tourDetails.noOfPassengers == 1
                              ? "Passenger"
                              : "Passengers"}
                          </span>
                        </div>

                        {tourDetails.tourType === "airport" &&
                          tourDetails.isPickup && (
                            <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-1 my-3">
                              <div className="bxs:w-[180px] w-full bg-transparent bxs:mb-0 mb-3 flex">
                                <div className="flex gap-x-3 mt-3 bxs:mt-0">
                                  <div className="flex flex-col justify-center items-center">
                                    <div> Board Show</div>
                                    <div className="text-gray-700 text-[12px] font-normal ">
                                      {tourDetails.converedCurrencySymbol}{" "}
                                      {(
                                        otherPrices[0].boardShow *
                                        tourDetails.conversionRate
                                      ).toFixed(2)}
                                    </div>
                                  </div>
                                  <div className="size-[50px]">
                                    <Image
                                      src={boardimg}
                                      alt=""
                                      className="size-[100%]"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-1 text-center gap-x-3 font-normal text-[14px] outline-none bxs:w-[220px] w-full  rounded  ">
                                <div
                                  onClick={() => {
                                    if (!boardShow) {
                                      setBoardShow(true);
                                    }
                                  }}
                                  className={` ${
                                    boardShow
                                      ? "bg-primary text-white shadow-md "
                                      : "border-[1px] border-black"
                                  } w-full p-1 rounded transition-all duration-500 hover:cursor-pointer`}
                                >
                                  Accept
                                </div>
                                <div
                                  onClick={() => {
                                    if (boardShow) {
                                      setBoardShow(false);
                                    }
                                  }}
                                  className={` ${
                                    !boardShow
                                      ? "bg-primary text-white shadow-md"
                                      : "border-[1px] border-black"
                                  } w-full p-1 rounded transition-all duration-500 hover:cursor-pointer`}
                                >
                                  Reject
                                </div>
                              </div>
                            </div>
                          )}

                        {boardShow && (
                          <div className="transition-all font-normal duration-1000 bxs:w-[400px] w-full bg-black rounded pt-3 pb-5  my-2 flex flex-col gap-y-2 items-center px-2">
                            <div className="text-primary text-[18px] mb-2">
                              Board Details
                            </div>
                            <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 ">
                              <span className="bxs:w-[180px] w-[150px] bg-transparent text-white ml-2">
                                Display Name
                              </span>
                              <input
                                value={tourDetails.cusDisplayName}
                                onChange={handleCusDisplayNameChange} // Handle changes to the input field
                                ref={cusDisplayNameRef}
                                placeholder="John"
                                type="text"
                                className="p-1 mr-2 font-normal text-[14px] outline-none bxs:w-[240px] w-full shadow-md rounded border-[1px] border-black "
                              />
                            </div>
                          </div>
                        )}

                        {/* 
                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 mb-4">
                        <span className="bxs:w-[180px] pr-3 w-full bg-transparent">
                          NIC / Passport / Driving Licience
                        </span>
                        <input
                          placeholder="No.Passengers"
                          type="file"
                          className="text-[14px] font-normal outline-none w-[220px] rounded border-[1px] border-transparent "
                          onChange={(e) => setFile(e.target.files?.[0])}
                        />
                      </div> */}

                        {submitError && (
                          <div className="text-errorpink my-2 font-normal">
                            {submitError}
                          </div>
                        )}

                        <input
                          type="submit"
                          className={` ${
                            boardShow ? "my-3" : "my-6"
                          } bxs:w-[402px] w-full py-2  bg-black text-white rounded-md`}
                          value="Next"
                        />
                      </div>
                    </form>
                  </div>
                  {/**customer over**/}

                  {/**Tour**/}
                  <div className="bigmd:w-[340px] w-full border-2 border-transparent">
                    <div className="mt-4">Tour</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>

                    <div className="bxs:w-[400px] w-full  flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Origin
                      </span>
                      <span className="font-normal  bxs:w-[170px] w-[150px]">
                        {tourDetails.origin}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent ">
                        Destination
                      </span>
                      <span className="font-normal bxs:w-[170px] w-[150px] ">
                        {tourDetails.destination}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Distance
                      </span>
                      <span className="font-normal">
                        {tourDetails.distance}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Duration
                      </span>
                      <span className="font-normal">
                        {tourDetails.duration}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Pickup Date
                      </span>
                      <span className="font-normal">
                        {tourDetails.startDate.toDateString()}
                      </span>
                    </div>
                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Pickup Time
                      </span>
                      <span className="bxs:w-[180px] w-[150px] font-normal">
                        {tourDetails.startDate.toTimeString()}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Return Date
                      </span>
                      <div className="bxs:w-[180px] w-[150px] font-normal">
                        {tourDetails.returnDate instanceof Date
                          ? tourDetails.returnDate.toDateString()
                          : tourDetails.returnDate}
                      </div>
                    </div>
                    <div className="bxs:w-[400px] w-full flex">
                      {tourDetails.returnDate instanceof Date && (
                        <div className="flex">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Return Time
                          </span>
                          <div className="bxs:w-[180px] w-[150px] font-normal">
                            {tourDetails.returnDate.toTimeString()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/**Tour end**/}
                </div>
              </div>
            </div>
          </div>
        )}

        {!tourDetails.vehicleType && <BlankContext />}
      </div>
    </>
  );
};

export default MidSummary;
