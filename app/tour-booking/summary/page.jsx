import TourSummary from "@/components/TourSummary";
import React from "react";

export const metadata = {
  title: "Booking Summary",
  description:
    "Before finalizing your journey with us, take a moment to review all your selected details in our comprehensive booking summary. This preview includes all the essential information such as your chosen destinations, vehicle type, travel dates, and any special requests. Ensure every detail is accurate and meets your expectations. Our clear and concise summary allows you to make any necessary adjustments before submitting your booking, guaranteeing a seamless and tailored travel experience. Confirm your perfect trip with confidence and embark on an unforgettable adventure in Sri Lanka.",
};

const TourBooking = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center">
        <TourSummary />
      </div>
    </>
  );
};

export default TourBooking;
