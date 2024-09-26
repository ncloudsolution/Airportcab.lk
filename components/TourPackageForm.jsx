"use client";
import React, { useState, useRef, useContext, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CustomDayTourDatePicker from "./CustomDayTourDatePicker";
import { TourContext } from "@/context/TourContextProvider";
import Processing from "./loaders&Responses/Processing";
import SuccessSubmission from "./loaders&Responses/SuccessSubmission";
import FailedSubmission from "./loaders&Responses/FailedSubmission";
import success from "@/public/Others/successImg.jpg";
import DayTripPricingAlgorithm from "@/libs/DayTripsPricingAlgorithm";
import DayTripTimer from "./DayTripTimer";
import TourPackagePricingAlgorithm from "@/libs/TourPackagePricingAlgorithm";
import RadioBtnContainer from "./RadioBtnContainer";
import CustomVehicalDropDown from "./CustomVehicalDropDown";

const TourPackageForm = ({ planPrice, trip }) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [mobValue, setMobValue] = useState();
  const [whatsappMobValue, setWhatsappMobValue] = useState();
  const [date, setDate] = useState();

  const [noOfAdults, setNoOfAdults] = useState(1);
  const [noOfKids, setNoOfKids] = useState(0);

  const [mealType, setMealType] = useState("BB");
  const [vehical, setVehical] = useState("Sedan");

  const [submitError, setSubmitError] = useState();

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [perAdult, setPerAdult] = useState(planPrice * 2);
  const [totalForAdult, setTotalForAdult] = useState(planPrice * 2);

  const [perchildren, setPerChildren] = useState(planPrice * 0.35);
  const [totalForChildren, setTotalForChildren] = useState(planPrice * 0.35);

  const [noOfAdultsFunc, setNoOfAdultsFunc] = useState(1);
  const [noOfChildrensFunc, setNoOfChildrensFunc] = useState(0);

  const [totalPrice, setTotalPrice] = useState(planPrice);

  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const NicPassportRef = useRef(null);
  const cusMobileRef = useRef();
  const cusWhatsappRef = useRef();

  const loadingSectionRef = useRef(null);

  const scrollToLoading = () => {
    loadingSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start", // Add inline: "start"
    });
  };

  useEffect(() => {}, [noOfAdults]);

  useEffect(() => {
    const tourpackageObject = TourPackagePricingAlgorithm(
      planPrice,
      noOfAdults,
      noOfKids,
      mealType,
      vehical
    );

    setPerAdult(tourpackageObject.pricePerAdult);
    setPerChildren(tourpackageObject.pricePerChildren);

    setTotalForAdult(tourpackageObject.totalPriceforAdult);
    setTotalForChildren(tourpackageObject.totalPriceforChildren);

    setNoOfAdultsFunc(tourpackageObject.noOfAdults);
    setNoOfChildrensFunc(tourpackageObject.noOfChildren);

    setMealType(tourDetails.selectedMealOption);
    setVehical(tourDetails.selectedVehical);

    // setTotalPrice(tourpackageObject.totalPrice);
    setTotalPrice(totalPrice);
  }, [
    noOfAdults,
    noOfKids,
    planPrice,
    mealType,
    vehical,
    tourDetails,
    totalPrice,
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      date == undefined ||
      mobValue == "" ||
      whatsappMobValue == "" ||
      NameRef.current.value === "" ||
      EmailRef.current.value === "" ||
      NicPassportRef.current.value === "" ||
      // tourDetails.selectedTimeSlot == "" ||
      isNaN(noOfAdults) ||
      noOfAdults <= 0 ||
      isNaN(noOfKids) ||
      noOfKids < 0
    ) {
      return setSubmitError("Fill all the fields ");
    }

    setIsLoading(true);
    scrollToLoading();

    // // setTimeout(() => {
    document.body.style.overflow = "hidden";
    // // }, 500);

    // //lock the scrolling of the browser

    const tourPackage = {
      pickUpDate: date.toDateString(),
      //   timeSlot: tourDetails.selectedTimeSlot,
      selectedTrip: trip,
      cusName: NameRef.current.value,
      cusEmail: EmailRef.current.value,
      cusNicPassport: NicPassportRef.current.value,
      cusMobileNo: mobValue,
      cusWhatsappNo: whatsappMobValue,
      noOfAdults: noOfAdults,
      noOfKids: noOfKids,
      // selectedCurrencyType: tourDetails.currencyType,
      // selectedCurrencySymbol: tourDetails.converedCurrencySymbol,
      selectedMealOption: tourDetails.selectedMealOption,
      selectedVehical: tourDetails.selectedVehical,
      // totalPriceInSelectedCurrency: (
      //   tourDetails.conversionRate * totalPrice
      // ).toFixed(2),
      // totalPriceInLKR: (tourDetails.slRate * totalPrice).toFixed(2),
    };

    const formData = new FormData();
    formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL.split(",")); // Set the recipient's email here
    formData.append("clientmail", EmailRef.current.value); // Set the sender's email here
    formData.append("allDataBundle", JSON.stringify(tourPackage));
    try {
      const response = await fetch("/api/tourPackageEmail", {
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

  return (
    <>
      {(isLoading || responseMessage) && (
        <div className="flex w-full pt-[50px] md:pt-[130px] 2xl:pt-[20px] h-[100vh] justify-center items-center xs:mt-[5vh] mt-[10vh]">
          <div className="w-full h-[90vh] flex items-center justify-center ">
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
                  navtext={"Back To Home"}
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
        </div>
      )}

      {!isLoading && !responseMessage && (
        <div className="bxs:mt-5 mt-0 w-full bg-white " ref={loadingSectionRef}>
          <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold mb-7">
            Booking
          </div>
          <form
            className=" flex mobile:flex-row flex-col w-full mobile:gap-0 gap-5 "
            onSubmit={handleSubmit}
          >
            <div className="midxl:w-[700px] mobile:w-[500px] w-full gap-3 items-center mb-6 mobile:mb-0">
              <div className="flex flex-col sm:gap-3 gap-2 w-full">
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Tour Date
                  </div>
                  <div className="flex-row flex-1 w-full rounded outline-none ">
                    <CustomDayTourDatePicker
                      selectedDate={date}
                      onChange={(date) => setDate(date)}
                    />
                  </div>
                </div>
                {/* <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Pickup Time
                  </div>
                  <div className="flex-row flex-1  ">
                    <DayTripTimer title={trip} />
                  </div>
                </div> */}
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Passenger Name
                  </div>
                  <input
                    ref={NameRef}
                    placeholder="Passenger Name"
                    type="text"
                    className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none w-full sm:text-[16px] text-[14px]"
                  />
                </div>
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px] sm:text-[18px] text-[14px] font-semibold">
                    Email
                  </div>
                  <input
                    ref={EmailRef}
                    placeholder="Passenger Email"
                    type="email"
                    className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                  />
                </div>
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px] sm:text-[18px] text-[14px] font-semibold">
                    NIC/Passport No
                  </div>
                  <input
                    ref={NicPassportRef}
                    placeholder="NIC/Passport No"
                    type="text"
                    className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                  />
                </div>

                <div className="flex sm:flex-row flex-col w-full ">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Mobile No
                  </div>

                  <div className="flex-row flex-1 px-3 py-1 rounded border-[1px] border-black outline-none bg-white">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      placeholder="77 123 4568"
                      defaultCountry="LK"
                      value={mobValue}
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
                </div>
                <div className="flex sm:flex-row flex-col w-full ">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Whatsapp No
                  </div>

                  <div className="flex-row flex-1 px-3 py-1 rounded border-[1px] border-black outline-none bg-white">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      placeholder="77 123 4568"
                      defaultCountry="LK"
                      value={whatsappMobValue}
                      onChange={setWhatsappMobValue}
                      className="PhoneInputInput"
                      ref={cusWhatsappRef}
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

                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Adult Count
                  </div>
                  <input
                    onChange={(e) => {
                      let value = parseInt(e.target.value, 10);
                      if (value < 1) {
                        setNoOfAdults(1);
                      } else {
                        setNoOfAdults(value);
                      }
                    }}
                    defaultValue={1}
                    value={noOfAdults}
                    min="1"
                    type="number"
                    className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                    placeholder="Pssenger Count"
                  />
                </div>
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Kids Count{" "}
                    <span className="text-[14px] text-slate-400 font-normal">
                      (under 11y)
                    </span>
                  </div>
                  <input
                    onChange={(e) => {
                      let value = parseInt(e.target.value, 10);
                      if (value == "" || value < 1) {
                        setNoOfKids(0);
                      } else {
                        setNoOfKids(value);
                      }
                    }}
                    defaultValue={0}
                    value={noOfKids}
                    min="0"
                    type="number"
                    className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                    placeholder="Pssenger Count"
                  />
                </div>

                <div className="flex sm:flex-row flex-col w-full ">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Meal Type
                  </div>

                  <div className="flex-row flex-1 py-1 rounded  bg-white">
                    <RadioBtnContainer fullboardDisable={true} />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full ">
                  <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                    Vehical
                  </div>

                  <div className="flex-row flex-1  outline-none bg-white">
                    <CustomVehicalDropDown />
                  </div>
                </div>
              </div>
            </div>
            {/**YELLOW COLOR PRICE CARD**/}
            <div className="flex flex-col gap-5 flex-1 justify-center items-center">
              <div className="flex flex-col w-full mobile:w-[450px] bg-primary gap-3 px-5 bxs:px-20 mobile:px-10  mobile:py-5 py-10 rounded-lg">
                <div>
                  <div className="text-[20px] font-semibold mb-2">
                    Per Adult Approximately{" "}
                  </div>
                  <div className="text-[25px] xxxs:text-[30px] xxs:text-[35px] xs:text-[40px] leading-[35px] font-semibold ">
                    {tourDetails.converedCurrencySymbol}{" "}
                    {(tourDetails.conversionRate * totalPrice).toFixed(2)}
                  </div>
                  {/* <div className="xs:text-[20px] text-[18px] mt-[20px] font-semibold">
                    Price Breakdown{" "}
                  </div> */}
                  {/* <div className="flex flex-col w-full mt-[10px]">
                    <div className="flex justify-between ">
                      <div className="mobile:text-[16px] xs:text-[20px] xxs:text-[16px] text-[14px]">
                        <span className="font-semibold">Adult</span>{" "}
                        {noOfAdultsFunc} x {tourDetails.converedCurrencySymbol}{" "}
                        {(tourDetails.conversionRate * perAdult).toFixed(2)}
                      </div>
                      <div className="mobile:text-[16px] xs:text-[20px] xxs:text-[16px] text-[14px]">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {(tourDetails.conversionRate * totalForAdult).toFixed(
                          2
                        )}
                      </div>
                    </div>

                    {noOfChildrensFunc > 0 && (
                      <div className="flex justify-between">
                        <div className="mobile:text-[16px] xs:text-[20px] xxs:text-[16px] text-[14px]">
                          <span className="font-semibold">Kid</span>{" "}
                          {noOfChildrensFunc} x{" "}
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(tourDetails.conversionRate * perchildren).toFixed(
                            2
                          )}
                        </div>
                        <div className="mobile:text-[16px] xs:text-[20px] xxs:text-[16px] text-[14px]">
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(
                            tourDetails.conversionRate * totalForChildren
                          ).toFixed(2)}
                        </div>
                      </div>
                    )}
                  </div> */}
                  <div className=" mt-[15px] text-[14px]">
                    Dear Valued Customer, The approximate price per adult is
                    mentioned above. The total tour package price varies based
                    on factors like the number of adults, children, meal types,
                    and vehicle choice, which we can manage.
                  </div>
                  <div className=" mt-[20px] text-[14px]">
                    However,{" "}
                    <b>accommodation fares are set by third-party providers</b>{" "}
                    and can fluctuate moment by moment based on demand.
                    Therefore, we cannot provide a final price within this
                    system.
                  </div>
                  <div className=" mt-[20px] text-[14px]">
                    <b> If you are interested in our tour,</b> please fill out
                    and submit the form. We will contact you immediately with a
                    full quotation, Thank you.
                  </div>
                </div>

                <input
                  type="submit"
                  value="Confirm Tour"
                  className="p-2 bg-black text-white w-full mt-3 rounded-md"
                />
              </div>
              <div>
                {submitError && (
                  <div className="text-errorpink  font-normal px-10 py-3 shadow-xl border-[1px] border-errorpink rounded">
                    {submitError}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TourPackageForm;
