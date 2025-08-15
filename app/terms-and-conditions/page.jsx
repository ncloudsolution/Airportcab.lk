import React from "react";

const Conditions = () => {
  const infoArray = [
    {
      heading: "Payment Terms",
      points: [
        "All prices are provided in the applicable currency and will be confirmed at the time of booking.",
        "The remaining balance of booking can be settled using the available payment methods at the completion of the service.",
      ],
    },
    {
      heading: "Highway Tolls & Additional Charges",
      points: [
        "If the highway toll is not included in your final booking amount and you choose to use the expressway, you must pay the toll directly at the toll counter.",
        "Any travel to locations other than the starting and ending points mentioned in your booking will incur additional charges.",
        "The number of luggage items should be within the specified limit on booking otherwise, an additional charge will apply.",
      ],
    },
    {
      heading: "Changes & Cancellations",
      points: [
        "Changes to your booking must be made at least 48 hours before the scheduled pickup time.",
        "Cancellations made less than 48 hours before pickup may be subject to a cancellation fee.",
      ],
    },
    {
      heading: "Passenger Responsibilities",
      points: [
        "Please ensure that you provide accurate pickup and drop-off details.",
        "Passengers are responsible for their personal belongings. airportcab.lk will not be liable for any lost or misplaced items.",
      ],
    },
    {
      heading: "Liability",
      points: [
        "airportcab.lk is not responsible for delays caused by traffic, weather, road closures, or any events beyond our control.",
        "While we strive to ensure safe and comfortable travel, we are not liable for accidents or injuries unless directly caused by our negligence.",
      ],
    },
    {
      heading: "General",
      points: [
        "All bookings are subject to driver and vehicle availability.",
        "AirportCab.lk reserves the right to update these terms and conditions without prior notice.",
      ],
    },
  ];
  return (
    <div className="pt-[60px] h-full">
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="text-[30px] font-semibold py-5">
          Terms and Conditions
        </div>
        <div className="xl:w-[65%] md:w-[80%] w-[90%] flex flex-col gap-10">
          <div className="text-center">
            Welcome to airportcab.lk. By booking our services, you agree to the
            following terms and conditions. Please read them carefully.
          </div>
          {infoArray.map((it, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="text-[20px] font-semibold ">{it.heading}</div>

              <div className="flex flex-col gap-1">
                {it.points.map((item, index) => (
                  <ul key={index} className="list-disc">
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-10">
          Thank you for choosing AirportCab.lk. We look forward to serving you!
        </div>
      </div>
    </div>
  );
};

export default Conditions;
