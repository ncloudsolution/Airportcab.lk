"use client";
import React, { useContext, useEffect, useState } from "react";
import { TourContext } from "../context/TourContextProvider";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Hierarchy from "./standalone/Hierarchy";
import CurrencyTab from "./standalone/CurrencyTab";
import BlankContext from "./Exceptions/BlankContext";
import Processing from "./loaders&Responses/Processing";
import SuccessSubmission from "./loaders&Responses/SuccessSubmission";
import FailedSubmission from "./loaders&Responses/FailedSubmission";

import success from "@/public/Others/successImg.jpg";
import CustomCurrencyDropDown from "./standalone/CustomCurrencyDropDown";

const TourSummary = () => {
  const router = useRouter();

  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //const [file, setFile] = useState(null);

  const [submitError, setSubmitError] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);

    const highwayChargesText = `${
      tourDetails.highwayExit
        ? `Highway Charges : ${tourDetails.highwayExit} - ${
            tourDetails.converedCurrencySymbol
          }${(tourDetails.highwayCharge * tourDetails.conversionRate).toFixed(
            2
          )}`
        : `Highway Charges :  ${tourDetails.converedCurrencySymbol}{" "}${(
            tourDetails.highwayCharge * tourDetails.conversionRate
          ).toFixed(2)}`
    }`;

    const flightDetails = `${
      tourDetails.customerFlightNo != 0 &&
      `-------------------------------------------------
       Flight No : ${tourDetails.customerFlightNo}
          }${(tourDetails.highwayCharge * tourDetails.conversionRate).toFixed(
            2
          )}`
    }`;

    const emailText = `New Customer Details:
Name: ${tourDetails.customerName}
Email: ${tourDetails.customerEmail}
Mobile No: ${tourDetails.customerMobileNo}


${flightDetails}

-------------------------------------------------
selected Vehicle: ${tourDetails.vehicleType}
No.of Passengers: ${tourDetails.noOfPassengers}
Requested Luggage Count: ${tourDetails.customerLuggageCount}
Vehical Price:  ${tourDetails.converedCurrencySymbol}${(
      tourDetails.price * tourDetails.conversionRate
    ).toFixed(2)}
Boardshow: ${tourDetails.converedCurrencySymbol}${(
      tourDetails.boardShow * tourDetails.conversionRate
    ).toFixed(2)}
${highwayChargesText}

Total Price with selected currency:${tourDetails.converedCurrencySymbol}${
      tourDetails.totalPrice
    }
Total Price in LKR: Rs.${tourDetails.totalLKRPrice}
-------------------------------------------------
Origin: ${tourDetails.origin}
Destination: ${tourDetails.destination}
Start Date : ${tourDetails.startDate}
Return: ${tourDetails.returnDate}
Distance : ${tourDetails.distance}
Duration: ${tourDetails.duration}`;

    const TourDetails = {
      tourType: tourDetails.tourType,
      customerName: tourDetails.customerName,
      customerEmail: tourDetails.customerEmail,
      customerMobileNo: tourDetails.customerMobileNo,
      customerWhatsappMobileNo: tourDetails.customerWhatsappMobileNo,
      customerNicPassport: tourDetails.customerNicPassport,
      customerFlightNo: tourDetails.customerFlightNo,
      arrivalDate:
        tourDetails.tourType === "airport"
          ? tourDetails.arrivalDate.toDateString()
          : null,
      arrivalTime:
        tourDetails.tourType === "airport"
          ? tourDetails.arrivalDate.toTimeString()
          : null,

      cusDisplayName: tourDetails.cusDisplayName,
      origin: tourDetails.origin,
      destination: tourDetails.destination,
      startDate: tourDetails.startDate.toDateString(),
      startTime: tourDetails.startDate.toTimeString(),

      returnDate:
        tourDetails.returnDate instanceof Date
          ? tourDetails.returnDate.toDateString()
          : tourDetails.returnDate,
      returnTime:
        tourDetails.returnDate instanceof Date
          ? tourDetails.returnDate.toTimeString()
          : null,
      distance: tourDetails.distance,
      duration: tourDetails.duration,
      vehicleType: tourDetails.vehicleType,
      noOfPassengers: tourDetails.noOfPassengers,
      customerLuggageCount: tourDetails.customerLuggageCount,
      converedCurrencySymbol: tourDetails.converedCurrencySymbol,
      currencyType: tourDetails.currencyType,
      convertedPrice: tourDetails.convertedPrice,
      conversionRate: tourDetails.conversionRate,

      boardShow: tourDetails.boardShow,
      highwayExit: tourDetails.highwayExit,
      highwayCharge: tourDetails.highwayCharge,
      totalPrice: tourDetails.totalPrice,
      totalPriceInLkr: tourDetails.totalLKRPrice,
    };

    // Start loading
    setResponseMessage("");

    const formData = new FormData();
    //formData.append("file", file);
    formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL.split(",")); // Set the recipient's email here
    //formData.append("subject", "Sending you a file!");
    formData.append("text", emailText);
    formData.append("clientmail", tourDetails.customerEmail); // Set the sender's email here
    formData.append("allDataBundle", JSON.stringify(TourDetails));
    try {
      const response = await fetch("/api/bookingEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      const result = await response.json();

      //alert(result.message);
      setIsLoading(false); // Stop loading
      setResponseMessage(result.message); // Set the message from the server

      // setTimeout(() => {
      //   router.push("/"); // Redirect to the homepage after 2 seconds
      // }, 2000);
    } catch (error) {
      console.error("Error:", error);
      // alert("Failed to send the file.");
      setIsLoading(false); // Stop loading
      setResponseMessage("Failed to make the order. Please try again.");

      // setTimeout(() => {
      //   router.push("/"); // Redirect to the homepage after 2 seconds
      // }, 2000);
    }

    setSubmitError("");
  }

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
      <div className="mt-0 mb-4">
        {(isLoading || responseMessage) && (
          <div className="w-full h-[90vh] flex items-center justify-center">
            {/* Your form or component elements go here */}
            {isLoading && (
              <Processing
                title={"Booking Processing"}
                msg={"order! Your request is now being processed"}
              />
            )}{" "}
            {/* Display a loading message */}
            {!isLoading &&
              responseMessage === "Order completed Successfully" && (
                <SuccessSubmission
                  title={"Booking Success"}
                  msg={"Your booking has been successfully completed"}
                  navtext={"New Booking"}
                  img={success}
                />
              )}
            {!isLoading && responseMessage === "Failed to Send Email" && (
              <FailedSubmission
                navtext={"New Booking"}
                msg={"booking was not completed"}
              />
            )}
            {/* Display the response message */}
          </div>
        )}

        {!isLoading && !responseMessage && tourDetails.vehicleType && (
          <div className="flex flex-col items-center">
            <CurrencyTab />
            <div className="mb-10 w-full flex justify-center bg-white shadow-md">
              <Hierarchy />
            </div>
            <div className=" rounded border-[2px] border-primary  bg-white shadow-md text-black p-4 mb-14 font-semibold gap-y-1 w-fit">
              <div className="text-center text-[30px]">Tour Summary</div>

              <div className="flex flex-col border-2 border-transparent  xs:text-[15px] xxs:text-[13px] text-[12px]">
                <div className="flex flex-col ">
                  <div className=" flex-1  flex items-center justify-center border-2 border-transparent ">
                    <Image
                      src={tourDetails.image}
                      alt=""
                      width={200}
                      height={200}
                      className="border-2 border-transparent object-cover xxs:w-[300px]"
                    />
                  </div>

                  <div className="bg-transparent xs:w-[400px] xxs:w-[300px] w-[260px] -translate-y-2">
                    {/**Name**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Customer Name
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.customerName}
                      </div>
                    </div>
                    {/**Email**/}
                    <div className="flex ">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px] ">
                        Customer Email
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px] break-words">
                        {tourDetails.customerEmail}
                      </div>
                    </div>
                    {/**Mobile**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Mobile No
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.customerMobileNo}
                      </div>
                    </div>

                    <div className="border-b-[1px] border-white border-dashed my-4"></div>

                    {/**flight no**/}
                    {tourDetails.tourType === "airport" && (
                      <>
                        <div className="flex">
                          <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                            Flight No
                          </div>
                          <div>:</div>
                          <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                            {tourDetails.customerFlightNo}
                          </div>
                        </div>

                        <div className="flex">
                          <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                            {tourDetails.isPickup
                              ? "Arrival Date"
                              : "Depart Date"}
                          </div>
                          <div>:</div>
                          <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                            {tourDetails.arrivalDate.toDateString()}
                          </div>
                        </div>

                        <div className="flex">
                          <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                            {tourDetails.isPickup
                              ? "Arrival Time"
                              : "Depart Time"}
                          </div>
                          <div>:</div>
                          <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                            {tourDetails.arrivalDate.toTimeString()}
                          </div>
                        </div>

                        {/**Board Name**/}
                        {tourDetails.cusDisplayName != "" && (
                          <div className="flex">
                            <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                              Board Name
                            </div>
                            <div>:</div>
                            <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                              {tourDetails.cusDisplayName}
                            </div>
                          </div>
                        )}

                        <div className="border-b-[1px] border-white border-dashed my-4"></div>
                      </>
                    )}

                    {/**vehical**/}

                    <div className="w-full flex h-[30px] mb-4">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px] flex items-center">
                        Selected Currency
                      </div>
                      <div>:</div>
                      <div className="relative xs:w-[170px] xxs:w-[150px] w-[140px] h-fit  ml-4">
                        <CustomCurrencyDropDown />
                      </div>
                    </div>

                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Selected Vehicle
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.vehicleType}
                      </div>
                    </div>

                    {/**no fo passengers**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        No.of Passengers
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.noOfPassengers}
                      </div>
                    </div>
                    {/**luggages**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Luggage Count
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.customerLuggageCount}
                      </div>
                    </div>
                    {/**price**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Vehical Price
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.convertedPrice}
                      </div>
                    </div>
                    {tourDetails.boardShow != 0 && (
                      <div className="flex">
                        <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                          Board Show
                        </div>
                        <div>:</div>
                        <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(
                            tourDetails.boardShow * tourDetails.conversionRate
                          ).toFixed(2)}
                        </div>
                      </div>
                    )}
                    {tourDetails.highwayExit &&
                      tourDetails.highwayExit !== "None" &&
                      tourDetails.highwayCharge !== "No any Charge" && (
                        <div className="flex">
                          <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                            Highway Charges
                          </div>
                          <div>:</div>
                          <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.highwayCharge *
                              tourDetails.conversionRate
                            ).toFixed(2)}
                          </div>
                        </div>
                      )}

                    <div className="flex mt-3">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px] ">
                        Total Price
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal w-fit border-double border-y-4 border-black">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.totalPrice}
                      </div>
                    </div>

                    <div className="border-b-[1px] border-white border-dashed my-4"></div>

                    {/**origin**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Origin
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.origin}
                      </div>
                    </div>
                    {/**no fo passengers**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Destination
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.destination}
                      </div>
                    </div>
                    {/**start date**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Start Date
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.startDate.toDateString()}
                      </div>
                    </div>
                    {/**start time**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Start Time
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.startDate.toTimeString()}
                      </div>
                    </div>
                    {/**return date**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Return Date
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.returnDate instanceof Date
                          ? tourDetails.returnDate.toDateString()
                          : tourDetails.returnDate}
                      </div>
                    </div>
                    {/**return time**/}
                    {tourDetails.returnDate instanceof Date && (
                      <div className="flex">
                        <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                          Return Time
                        </div>
                        <div>:</div>
                        <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                          {tourDetails.returnDate.toTimeString()}
                        </div>
                      </div>
                    )}

                    {/* 
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px]">Return</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.returnDate}
                    </div>
                  </div> */}

                    {/**distance**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Distance
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.distance}
                      </div>
                    </div>
                    {/**duration**/}
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Duration
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.duration}
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="submit"
                        className="w-full py-2 bg-black text-white rounded-md mt-10"
                        value="Submit"
                      />
                    </form>
                  </div>
                  {/* 
                //vehical
                <div className="border-2 border-transparent bigmd:w-[360px] w-full py-4">
                  <div className="text-[16px]">Vehicle</div>
                  <div className="w-full bg-primary h-[2px] mb-4"></div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Selected Vehicle
                    </span>
                    <span className="font-normal">
                      {tourDetails.vehicleType}
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Seat Capacity
                    </span>
                    <span className="font-normal">
                      {tourDetails.vehicalSeatCapacity} Seats
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Price
                    </span>
                    <span className="font-normal">
                      Rs.{tourDetails.price}.00
                    </span>
                  </div>
                </div>
              //vehicalend
                 */}
                </div>

                {/****/}

                {/* <div className="flex gap-x-4 border-2 border-transparent bigmd:flex-row flex-col-reverse ">
                //customer
                <div className="mt-4 flex-1 border-2 border-transparent">
                  <div>Customer</div>
                  <div className="w-full bg-primary h-[2px] mb-4"></div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-y-1 flex-col">
                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          Passengers Name
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded  ">
                          {tourDetails.customerName}
                        </div>
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          Email
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded ">
                          {tourDetails.customerEmail}
                        </div>
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          Mobile No
                        </span>
                        <div className="shadow-md rounded  bxs:w-[220px] w-full bg-white p-1 font-normal ">
                          <div>{tourDetails.customerMobileNo}</div>
                        </div>

                        //
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-white "
                   //
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          No of Luggagues
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded ">
                          {tourDetails.customerLuggageCount}
                        </div>
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          No of Passengers
                        </span>
                        <span className="font-normal">
                          {tourDetails.noOfPassengers}{" "}
                          {tourDetails.noOfPassengers == 1
                            ? "Passenger"
                            : "Passengers"}
                        </span>
                      </div>
                      // 
                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 mb-4">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] pr-3 w-full bg-transparent">
                          NIC / Passport / Driving Licience
                        </span>
                        <input
                          placeholder="No.Passengers"
                          type="file"
                          className="text-[14px] font-normal outline-none w-[220px] rounded border-[1px] border-transparent "
                          onChange={(e) => setFile(e.target.files?.[0])}
                        />
                      </div> //

                      {submitError && (
                        <div className="text-errorpink my-2 font-normal">
                          {submitError}
                        </div>
                      )}

                      <input
                        type="submit"
                        className="w-full py-2 bg-primary text-white rounded-md"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              //cusover

              //tour
                <div className="bigmd:w-[380px] w-full border-2 border-transparent">
                  <div className="mt-4">Tour</div>
                  <div className="w-full bg-primary h-[2px] mb-4"></div>

                  <div className="bxs:w-[400px] w-full  flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Origin
                    </span>
                    <span className="font-normal  bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px]">
                      {tourDetails.origin}
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent ">
                      Destination
                    </span>
                    <span className="font-normal bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] ">
                      {tourDetails.destination}
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Distance
                    </span>
                    <span className="font-normal">{tourDetails.distance}</span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Duration
                    </span>
                    <span className="font-normal">{tourDetails.duration}</span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Pickup Date
                    </span>
                    <span className="font-normal">
                      {tourDetails.startDate.toDateString()}
                    </span>
                  </div>
                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Pickup Time
                    </span>
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] font-normal">
                      {tourDetails.startDate.toTimeString()}
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                    <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                      Return Date
                    </span>
                    <div className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] font-normal">
                      {tourDetails.returnDate instanceof Date
                        ? tourDetails.returnDate.toDateString()
                        : tourDetails.returnDate}
                    </div>
                  </div>
                  <div className="bxs:w-[400px] w-full flex">
                    {tourDetails.returnDate instanceof Date && (
                      <div className="flex">
                        <span className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] bg-transparent">
                          Return Time
                        </span>
                        <div className="bxs:xs:w-[180px] xxs:w-[130px] xs:w-[180px] xxs:w-[130px] font-normal">
                          {tourDetails.returnDate.toTimeString()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
               //tour end
              </div> */}
              </div>
            </div>
          </div>
        )}
        {!tourDetails.vehicleType && <BlankContext />}
      </div>
    </>
  );
};

export default TourSummary;
