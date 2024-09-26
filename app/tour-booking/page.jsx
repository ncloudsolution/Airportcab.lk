import MidSummary from "@/components/MidSummary";
import React from "react";

export const metadata = {
  title: "Booking Registration",
  description:
    "Embark on a personalized journey through Sri Lanka with our comprehensive tour booking services. Our easy registration process collects all the necessary details to tailor your perfect trip. Simply provide us with your travel preferences, desired destinations, and vehicle requirements, and we'll handle the rest. Whether you're planning a cultural tour, a scenic journey through the countryside, or an adventurous excursion, we ensure every detail is taken care of. Our professional team organizes everything from distance calculations to vehicle arrangements, ensuring a seamless and enjoyable travel experience. Register now to start your unforgettable adventure in Sri Lanka.",
};

const TourBooking = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center">
        <MidSummary />
      </div>
    </>
  );
};

export default TourBooking;
