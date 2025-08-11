"use client";
import React, { useContext, useState } from "react";
import { TourContext } from "../../../../context/TourContextProvider";
import Image from "next/image";
import logoonepay from "../../../../public/payments/logo-onepay.png";
import banneronepay from "../../../../public/payments/des-onepay.png";
import logoonride from "../../../../public/payments/logo-onridepay.png";
import PaymentDailogBox from "@/components/PaymentDialogBox";
import { handleOnePayPayment } from "@/libs/onepayTrigger";

const Payment = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const advancedPayPercentage = 30;
  const [selectedType, setSelectedType] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("0.00");
  const [submitError, setSubmitError] = useState("");
  const [gatewayUrl, setGatewayUrl] = useState("");
  // https://payment.onepay.lk/redirect/F6F6119094F15E5944DA8/6Y7T119095575816C0CCA/F6F6119094F15E5944DA8

  const handleOnTypeChange = (type) => {
    if (type === "onride") setPaymentPrice("0.00");
    if (type === "full") setPaymentPrice(tourDetails.totalLKRPrice);
    if (type === "advanced") {
      const price = Math.ceil(
        (tourDetails.totalLKRPrice * advancedPayPercentage) / 100
      );

      setPaymentPrice(price.toFixed(2));
    }
  };

  const paymentArray = [
    {
      label: "Full Pay",
      value: "full",
      logo: logoonepay,
      banner: banneronepay,
      text: "Pay by Visa, MasterCard, AMEX or Lanka QR via Onepay.",
    },
    {
      label: `Advanced Pay (${advancedPayPercentage}%)`,
      value: "advanced",
      logo: logoonepay,
      banner: banneronepay,
      text: "Pay by Visa, MasterCard, AMEX or Lanka QR via Onepay.",
    },
    {
      label: "On Ride Pay",
      value: "onride",
      logo: logoonride,
      banner: "",
      text: "Pay with cash upon ride.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedType === "") {
      return setSubmitError("Choose a payment option to proceed");
    }

    setTourDetails((prevDetails) => ({
      ...prevDetails,
      paymentType: selectedType,
      payementAmount: paymentPrice,
    }));

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

      paymentType: selectedType,
      payementAmount: paymentPrice,
    };

    const tourDetailsString = JSON.stringify(TourDetails);
    const encodedData = Buffer.from(tourDetailsString).toString("base64");

    const data = {
      customer_first_name: tourDetails.customerName.split(" ")[0],
      customer_last_name: tourDetails.customerName.split(" ")[1],
      customer_phone_number: tourDetails.customerMobileNo,
      customer_email: tourDetails.customerEmail,
      paymentType: selectedType,
      additionalData: encodedData,
    };

    const { gatewayUrl } = await handleOnePayPayment({
      orderReference: "xxx",
      amount: paymentPrice,
      currency: "LKR",
      customerData: data,
    });

    console.log(gatewayUrl, "url");

    setGatewayUrl(gatewayUrl);
  };

  return (
    <div className="w-full min-h-dvh flex justify-center items-center pt-[60px] relative">
      {/* <div className="flex mt-3">
        <div className="xs:w-[180px] xxs:w-[130px] w-[100px] ">Total Price</div>
        <div>:</div>
        <div className="ml-4 font-normal w-fit border-double border-y-4 border-black">
          {tourDetails.converedCurrencySymbol} {tourDetails.totalPrice}
        </div>
      </div> */}

      <form
        onSubmit={handleSubmit}
        className="flex gap-10 flex-col items-center w-[320px] xs:w-[450px] xs:p-6 p-4 rounded-md h-fit border border-input shadow-md"
      >
        <div className="flex flex-col gap-1 w-full">
          {tourDetails.currencyType !== "LKR" && (
            <div className="text-[18px] flex justify-between">
              Total Price in {tourDetails.currencyType}
              <span className="font-black text-slate-500">
                {tourDetails.converedCurrencySymbol} {tourDetails.totalPrice}
              </span>
            </div>
          )}

          <div className="text-[18px] flex justify-between">
            Total Price in LKR
            <span className="font-black text-slate-500">
              Rs. {tourDetails.totalLKRPrice}
            </span>
          </div>

          <div className="text-[18px] flex justify-between ">
            Payment in LKR
            <span className="font-black text-primary">Rs. {paymentPrice}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {paymentArray.map((item, index) => (
            <div
              key={index}
              className={`rounded-md flex flex-col border border-gray-300 w-full p-3 cursor-pointer
    ${
      selectedType === item.value
        ? "bg-gray-200"
        : "bg-gray-50 hover:bg-gray-100"
    }
  `}
            >
              <div className="flex justify-between">
                <span className="flex gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={item.value}
                    className="accent-black"
                    checked={selectedType === item.value}
                    onChange={() => {
                      setSelectedType(item.value);
                      handleOnTypeChange(item.value);
                      setSubmitError("");
                    }}
                  />
                  {item.label}
                </span>
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt="payment-logo-image"
                    className="h-7 w-fit"
                  />
                )}
              </div>

              {selectedType === item.value && (
                <div className="flex flex-col mt-2">
                  {item.banner && (
                    <Image
                      src={item.banner}
                      alt="payment-banner-image"
                      className="w-fit"
                    />
                  )}

                  {item.text && (
                    <div className="h-fit opacity-100 xs:text-[12px] text-[9px] px-[2px] transition-all duration-500 mt-1">
                      {item.text}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {submitError && (
            <div className="text-errorpink my-2 font-normal text-left">
              {submitError}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 text-center rounded-md bg-black text-white"
        >
          Place Order
        </button>
      </form>
      {gatewayUrl !== "" && <PaymentDailogBox gatewayLink={gatewayUrl} />}
    </div>
  );
};

export default Payment;
