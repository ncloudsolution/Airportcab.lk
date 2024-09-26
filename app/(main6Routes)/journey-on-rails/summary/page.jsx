"use client";
import CustomDayTourDatePicker from "@/components/CustomDayTourDatePicker";
import BlankContext from "@/components/Exceptions/BlankContext";
import FailedSubmission from "@/components/loaders&Responses/FailedSubmission";
import Processing from "@/components/loaders&Responses/Processing";
import SuccessSubmission from "@/components/loaders&Responses/SuccessSubmission";
import success from "@/public/Others/successImg.jpg";
import CurrencyTab from "@/components/standalone/CurrencyTab";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useState } from "react";
import { useRef } from "react";
import { TbTrain } from "react-icons/tb";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useWindowSize from "@/hooks/useWindowSize";

const TrainSummary = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const allowedDates = (date) => {
    const day = date.getDay();

    const weekindex = week
      .map((d, index) =>
        tourDetails.trainAvailableDays.includes(d) ? index : -1
      )
      .filter((index) => index !== -1);

    return weekindex.includes(day);
  };

  // switch (day) {
  //   case 0: // Sunday
  //   case 6: // Saturday
  //     return false;
  //   default: // Monday to Friday
  //     return true;
  // }

  const [noOfPassengers, setnoOfPassengers] = useState(
    tourDetails.noOfPassengers
  );

  const [submitError, setSubmitError] = useState();

  const [windowWidth, windowHeight] = useWindowSize();

  const cusName = useRef();
  const cusEmail = useRef();
  const cusMobile = useRef();
  const cusWhatsapp = useRef();
  const cusNicOrPassportNo = useRef();
  const loadingSectionRef = useRef();
  const [mobValue, setMobValue] = useState();
  const [whatsappMobValue, setWhatsappMobValue] = useState();

  // const scrollToLoading = () => {
  //   loadingSectionRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "start", // Add inline: "start"
  //   });
  // };
  const size = windowWidth >= 480 ? 80 : 60;

  const scrollToLoading = (loadingSectionRef) => {
    if (loadingSectionRef && loadingSectionRef.current) {
      const targetOffset = loadingSectionRef.current.offsetTop - size;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      date == undefined ||
      mobValue == "" ||
      whatsappMobValue == "" ||
      cusName.current.value === "" ||
      cusEmail.current.value === "" ||
      cusNicOrPassportNo.current.value === "" ||
      noOfPassengers === ""
    ) {
      return setSubmitError("Fill all the fields ");
    }

    setIsLoading(true);
    scrollToLoading(loadingSectionRef);

    // // setTimeout(() => {
    // document.body.style.overflow = "hidden";
    // // }, 500);

    // //lock the scrolling of the browser

    const trainBookingDetails = {
      trainName: tourDetails.trainName,
      trainPoints: tourDetails.trainPoints,
      trainTime: tourDetails.trainTime,

      travelPoints: tourDetails.travelPoints,
      travelTime: tourDetails.travelTime,

      trainClass: tourDetails.trainClass,

      availableDates: tourDetails.trainAvailableDays,
      selectedDate: date.toDateString(),

      cusName: cusName.current.value,
      cusEmail: cusEmail.current.value,
      cusNicPassport: cusNicOrPassportNo.current.value,
      cusMobileNo: mobValue,
      cusWhatsappNo: whatsappMobValue,

      pricePerPerson: tourDetails.trainPrice,
      noOfPassengers: noOfPassengers,
      totalPrice: tourDetails.trainPrice * noOfPassengers,

      selectedCurrencyType: tourDetails.currencyType,
      selectedCurrencySymbol: tourDetails.converedCurrencySymbol,
      conversionRate: tourDetails.conversionRate,
    };

    const formData = new FormData();
    formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL.split(",")); // Set the recipient's email here
    formData.append("clientmail", cusEmail.current.value); // Set the sender's email here
    formData.append("allDataBundle", JSON.stringify(trainBookingDetails));
    try {
      const response = await fetch("/api/trainEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      const result = await response.json();

      //alert(result.message);
      setIsLoading(false); // Stop loading
      setResponseMessage(result.message); // Set the message from the server
    } catch (error) {
      console.error("Error:", error);
      // alert("Failed to send the file.");
      setIsLoading(false); // Stop loading
      setResponseMessage("Failed to make the order. Please try again.");
    }
  }

  //const [file, setFile] = useState(null);

  return (
    <div className="mt-0 mb-4" ref={loadingSectionRef}>
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
          {!isLoading && responseMessage === "Order completed Successfully" && (
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

      {!isLoading && !responseMessage && tourDetails.trainName && (
        <div className="flex flex-col items-center">
          <CurrencyTab />

          <div className=" rounded  bg-primary text-black p-4 mt-10 mb-8 font-semibold gap-y-1 w-fit">
            <div className="text-center text-[30px] mt-5">Tour Summary</div>

            <div className="flex flex-col border-2 border-transparent  xs:text-[15px] xxs:text-[13px] text-[12px]">
              <div className="flex flex-col ">
                <form onSubmit={handleSubmit}>
                  <div className="bg-transparent xs:w-[400px] xxs:w-[300px] w-[260px] h-fit">
                    <div className="flex flex-col gap-y-1 xs:mt-10 mt-5 mb-3">
                      {/**TrainName**/}
                      <div className="flex w-full justify-between mb-2">
                        <div className="flex items-center mb-5">
                          <div className="flex flex-col items-center justify-center ">
                            <div> {tourDetails.trainPoints[0]}</div>
                            <div> {tourDetails.trainTime[0]}</div>
                          </div>

                          <TbTrain className="text-[30px] mx-5" />
                          <div className="border-dashed border-[1px] border-black  flex flex-col xs:w-[160px] xxs:w-[80px] w-[50px]" />
                        </div>

                        <div className="flex flex-col items-center mb-5">
                          <div> {tourDetails.trainPoints[1]}</div>
                          <div> {tourDetails.trainTime[1]}</div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" xs:w-[130px] w-[100px]">
                          Selected Train
                        </div>
                        <div>:</div>

                        <div className="ml-4 font-normal w-full flex-1">
                          {tourDetails.trainName}
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" xs:w-[130px] w-[100px]">
                          Tavel Points
                        </div>
                        <div>:</div>

                        <div className="ml-4 font-normal w-full flex-1">
                          {tourDetails.travelPoints}
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" xs:w-[130px] w-[100px]">
                          Arrival Time
                        </div>
                        <div>:</div>

                        <div className="ml-4 font-normal w-full flex-1">
                          {tourDetails.travelTime[0]}
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" xs:w-[130px] w-[100px]">
                          Depature Time
                        </div>
                        <div>:</div>

                        <div className="ml-4 font-normal w-full flex-1">
                          {tourDetails.travelTime[1]}
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" xs:w-[130px] w-[100px]">
                          Selected Class
                        </div>
                        <div>:</div>

                        <div className="ml-4 font-normal w-full flex-1">
                          {tourDetails.trainClass}
                        </div>
                      </div>

                      <div className="flex my-8">
                        <div className="flex flex-col gap-y-3">
                          <div className="flex">
                            <div className=" xs:w-[130px] w-[100px]">
                              Available Days
                            </div>
                            <div>:</div>

                            <div className="ml-4 font-normal w-full flex flex-1 gap-x-1 ">
                              {tourDetails.trainAvailableDays.map(
                                (day, index) => (
                                  <div
                                    key={index}
                                    className="px-[10px] py-[2px] bg-black text-white flex w-fit rounded"
                                  >
                                    {day}
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                            <div className=" xs:w-[130px] w-[100px]">
                              Select a Day
                            </div>
                            <div className="xs:flex hidden">:</div>

                            <div className="xs:ml-4 font-normal w-full flex flex-1 gap-x-1 ">
                              <CustomDayTourDatePicker
                                filterDate={allowedDates}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="xs:w-[250px] xxs:w-[300px] w-[260px] border-none shadow-md sm:text-[14px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                        <div className=" xs:w-[130px] w-[100px]">Name</div>
                        <div className="xs:flex hidden">:</div>

                        <div className="xs:ml-4 font-normal w-full flex-1">
                          <input
                            ref={cusName}
                            placeholder="John Doe"
                            type="text"
                            className="px-3 py-1 font-normal text-[14px] outline-none  w-full shadow-md rounded  "
                          />
                        </div>
                      </div>

                      <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                        <div className=" xs:w-[130px] w-[100px]">Email</div>
                        <div className="xs:flex hidden">:</div>

                        <div className="xs:ml-4 font-normal w-full flex-1">
                          <input
                            ref={cusEmail}
                            placeholder="johndoe12@gmail.com"
                            type="text"
                            className="px-3 py-1 font-normal text-[14px] outline-none  w-full shadow-md rounded  "
                          />
                        </div>
                      </div>

                      <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                        <div className=" xs:w-[130px] w-[100px]">
                          NIC / Passport
                        </div>
                        <div className="xs:flex hidden">:</div>

                        <div className="xs:ml-4 font-normal w-full flex-1">
                          <input
                            ref={cusNicOrPassportNo}
                            placeholder="N6590221"
                            type="text"
                            className="px-3 py-1 font-normal text-[14px] outline-none  w-full shadow-md rounded  "
                          />
                        </div>
                      </div>

                      <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                        <div className=" xs:w-[130px] w-[100px]">Mobile No</div>
                        <div className="xs:flex hidden">:</div>

                        <div className="xs:ml-4 px-3 py-1 font-normal text-[14px] shadow-md rounded w-full flex-1 bg-white">
                          <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="LK"
                            value={mobValue}
                            onChange={setMobValue}
                            className="PhoneInputInput"
                            ref={cusMobile}
                            error={
                              mobValue
                                ? isValidPhoneNumber(mobValue)
                                  ? undefined
                                  : "Invalid phone number"
                                : "Phone number required"
                            }
                          />
                        </div>
                      </div>

                      <div className="flex xs:flex-row flex-col xs:items-center justify-center">
                        <div className=" xs:w-[130px] w-[100px]">
                          Whatsapp No
                        </div>
                        <div className="xs:flex hidden">:</div>

                        <div className="xs:ml-4 px-3 py-1 font-normal text-[14px] shadow-md rounded w-full flex-1 bg-white">
                          <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="LK"
                            value={whatsappMobValue}
                            onChange={setWhatsappMobValue}
                            className="PhoneInputInput"
                            ref={cusWhatsapp}
                            error={
                              whatsappMobValue
                                ? isValidPhoneNumber(whatsappMobValue)
                                  ? undefined
                                  : "Invalid phone number"
                                : "Phone number required"
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-8 mb-0">
                        <div className="flex ">
                          <div className=" xs:w-[130px] w-[100px]">
                            Per Person
                          </div>
                          <div>:</div>

                          <div className="ml-4 font-normal w-full flex-1">
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.trainPrice *
                              tourDetails.conversionRate
                            ).toFixed(2)}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className=" xs:w-[130px] w-[100px]">
                            No of Persons
                          </div>
                          <div>:</div>

                          <div className="ml-4 font-normal w-full flex-1">
                            <input
                              onChange={(e) => {
                                let value = parseInt(e.target.value, 10);
                                if (value < 1) {
                                  setnoOfPassengers(1);
                                } else {
                                  setnoOfPassengers(value);
                                }
                              }} // Handle changes to the input field
                              value={noOfPassengers}
                              placeholder="Passenger Count"
                              type="number"
                              className="px-3 py-1 font-normal text-[14px] outline-none  w-full shadow-md rounded  "
                            />
                          </div>
                        </div>

                        <div className="flex mt-8">
                          <div className=" xs:w-[130px] w-[100px]">
                            Total Price
                          </div>
                          <div>:</div>

                          <div className="ml-4 font-normal w-full flex-1">
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.trainPrice *
                              tourDetails.conversionRate *
                              noOfPassengers
                            ).toFixed(2)}
                          </div>
                        </div>
                      </div>
                      {submitError && (
                        <div className="text-errorpink bg-white px-4 py-2 rounded mb-4 text-center mt-5">
                          {submitError}
                        </div>
                      )}
                      <div>
                        <input
                          type="submit"
                          className="w-full py-2 mt-2 bg-black text-white rounded-md "
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {!tourDetails.trainName && <BlankContext />}
    </div>
  );
};

export default TrainSummary;
