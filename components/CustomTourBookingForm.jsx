"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useRef, useState } from "react";
import Processing from "./loaders&Responses/Processing";
import SuccessSubmission from "./loaders&Responses/SuccessSubmission";
import FailedSubmission from "./loaders&Responses/FailedSubmission";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomTourDatePicker from "./CustomTourDatePicker";
import CustomHotelDropDown from "./standalone/CustomHotelDropDown";
import CheckBoxContainer from "./CheckBoxContainer";
import RadioBtnContainer from "./RadioBtnContainer";
import success from "@/public/Others/successImgEmail.jpg";
import { GetCustomTourCheckedItems } from "@/libs/JsonDataCatching";
import customTourPlaces from "@/data/customTourPlaces.json";
import customTourTransport from "@/data/customTourTransport.json";
import customTourPreferences from "@/data/customTourPreferences.json";

const CustomTourBookingForm = ({ children }) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [mobValue, setMobValue] = useState();
  const [whatsappMobValue, setWhatsappMobValue] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [depatureDate, setDepatureDate] = useState();

  const [noOfAdults, setNoOfAdults] = useState(1);
  const [noOfKids, setNoOfKids] = useState(0);

  const [submitError, setSubmitError] = useState();

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const NicPassportRef = useRef(null);
  const cusMobileRef = useRef();
  const cusWhatsappRef = useRef();
  const SpecialRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      arrivalDate === "" ||
      depatureDate === "" ||
      NameRef.current.value === "" ||
      EmailRef.current.value === "" ||
      NicPassportRef.current.value === "" ||
      mobValue == "" ||
      whatsappMobValue == "" ||
      noOfAdults === "" ||
      noOfKids === "" ||
      tourDetails.selectedHotel === undefined ||
      tourDetails.selectedMealOption === "" ||
      tourDetails.tourPreferences.length === 0 ||
      tourDetails.checkedPlaces.length === 0 ||
      tourDetails.transportationRequirement.length === 0
    ) {
      return setSubmitError("Fill all the fields ");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsLoading(true);

    setSubmitError("");

    const customTourDetails = {
      ownerEmail: process.env.NEXT_PUBLIC_MY_EMAIL.split(","),
      arrivalDate: arrivalDate.toDateString(),
      arrivalTime: arrivalDate.toTimeString(),
      depatureDate: depatureDate.toDateString(),
      depatureTime: depatureDate.toTimeString(),
      customerName: NameRef.current.value,
      customerEmail: EmailRef.current.value,
      customerNicPassportNo: NicPassportRef.current.value,
      customerMobileNo: mobValue,
      customerWhatsappNo: whatsappMobValue,
      noOfAdults: noOfAdults,
      noOfKids: noOfKids,
      selectedHotelType: tourDetails.selectedHotel,
      selectedMealType: tourDetails.selectedMealOption,
      checkedPlaces: tourDetails.checkedPlaces,
      transportationRequirement: tourDetails.transportationRequirement,
      tourPreferences: tourDetails.tourPreferences,
      specialRequest: SpecialRef.current.value,
    };

    const formData = new FormData();
    formData.append("allDataBundle", JSON.stringify(customTourDetails));

    try {
      const response = await fetch("/api/customTourBookingEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      const result = await response.json();

      setIsLoading(false); // Stop loading
      setResponseMessage(result.message); // Set the message from the server
    } catch (error) {
      console.error("Error:", error);

      setIsLoading(false); // Stop loading
      setResponseMessage("Failed to send the Message. Please try again.");
    }

    if (NameRef.current) NameRef.current.value = "";
    if (EmailRef.current) EmailRef.current.value = "";
    if (NicPassportRef.current) NicPassportRef.current.value = "";
    if (arrivalDate) setArrivalDate("");
    if (depatureDate) setDepatureDate("");
    if (mobValue) setMobValue("");
    if (whatsappMobValue) setWhatsappMobValue("");
    if (noOfKids) setNoOfKids("");
    if (noOfAdults) setNoOfAdults("");

    setTourDetails({
      converedCurrencySymbol: "Rs",
      currencyType: "LKR",
      conversionRate: 1,
      pageTwoToken: false,
      pageThreeToken: false,
    });
  };
  return (
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

      {/**normal flow**/}
      {!isLoading && !responseMessage && (
        <>
          {/* <CurrencyFullBar />  */}
          <div className="flex flex-col items-center">
            {children}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:gap-3 gap-2 lg:w-[800px] sm:w-[600px] bxs:w-[450px] w-full  px-[30px] sm:my-[30px] my-[15px]"
            >
              <div className="bxs:text-[40px] text-[28px] text-center pb-3 mb-8 font-semibold border-b-[4px] border-primary border-dashed ">
                Trip Planning Details
              </div>
              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Arrival Date / Time
                </div>
                <div className="flex-row flex-1 w-full rounded outline-none ">
                  <CustomTourDatePicker
                    selectedDate={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    placeholder="Arrival Date"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Depature Date / Time
                </div>
                <div className="flex-row flex-1 w-full rounded outline-none ">
                  <CustomTourDatePicker
                    selectedDate={depatureDate}
                    onChange={(date) => setDepatureDate(date)}
                    placeholder="Arrival Date"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-full">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px] sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px] sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Kids Count{" "}
                  <span className="text-[14px] text-slate-400 font-normal">
                    (under 11y)
                  </span>
                </div>
                <input
                  onChange={(e) => {
                    let value = parseInt(e.target.value, 10);
                    if (value < 1) {
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
              <div className="flex sm:flex-row flex-col w-full justify-center sm:items-center items-start">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Accomodation
                  {/* <span className="text-[14px] text-slate-400 font-normal">
                    (under 11y)
                  </span> */}
                </div>
                <CustomHotelDropDown />
              </div>

              <div className="flex sm:flex-row flex-col w-full sm:items-center items-start">
                <div className="w-[200px] mt-10 sm:mt-0 sm:text-[18px] text-[16px] font-semibold">
                  Meal Type
                </div>
                <div className="sm:mt-0 mt-[2px]">
                  <RadioBtnContainer />
                </div>
              </div>

              <div className="w-full text-center  sm:text-[18px] text-[16px] font-semibold xs:mt-[40px] mt-[20px]">
                Tour Preferences
              </div>
              <div className="my-5">
                <CheckBoxContainer
                  contextName="tourPreferences"
                  identifier="place"
                  Selectfunction={GetCustomTourCheckedItems([
                    ...customTourPreferences,
                  ])}
                />
              </div>

              <div className="w-full text-center  sm:text-[18px] text-[16px] font-semibold xs:mt-[40px] mt-[20px]">
                Places You Would Like To Visit
              </div>
              <div className="my-5">
                <CheckBoxContainer
                  contextName="checkedPlaces"
                  identifier="place"
                  Selectfunction={GetCustomTourCheckedItems([
                    ...customTourPlaces,
                  ])}
                />
              </div>

              <div className="w-full text-center  sm:text-[18px] text-[16px] font-semibold xs:mt-[40px] mt-[20px]">
                Transportation Requirement
              </div>
              <div className="my-5">
                <CheckBoxContainer
                  contextName="transportationRequirement"
                  identifier="type"
                  Selectfunction={GetCustomTourCheckedItems([
                    ...customTourTransport,
                  ])}
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full xs:mt-[40px] mt-[20px]">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Special Request (if any)
                </div>
                <textarea
                  rows={5}
                  ref={SpecialRef}
                  placeholder="Your Requests and Ideas ..................."
                  type="text"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none w-full sm:text-[16px] text-[14px]"
                />
              </div>

              {submitError && (
                <div className="w-full bg-errorpink p-2 mt-4  text-white rounded text-center">
                  {submitError}
                </div>
              )}

              <input
                value="Submit"
                type="submit"
                className="flex-1 px-3 py-2 rounded bg-black font-semibold text-white outline-none sm:text-[18px] text-[16px] my-3"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomTourBookingForm;
