import React from "react";

const Refund = () => {
  const listArray = [
    {
      heading: "Free Cancellation",
      text: "You may cancel your booking up to 48 hours before the scheduled start time (local time) to receive a full refund.",
    },
    {
      heading: "Late Cancellations",
      text: "Cancellations made less than 48 hours before the start time will not be eligible for a refund.",
    },
  ];
  return (
    <div className="pt-[60px] h-[90vh]">
      <div className="flex flex-col  items-center h-full w-full p-4">
        <div className="text-[30px] font-semibold py-5">Refund Policy</div>
        <div className="xl:w-[65%] md:w-[80%] w-[90%] flex flex-col gap-10">
          <div className="text-center">
            Welcome to airportcab.lk. By booking our services, you agree to the
            following terms and conditions. Please read them carefully.
          </div>
          <div className="text-[24px] font-semibold">
            Refund & Cancellation Policy
          </div>
          {listArray.map((it, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="text-[20px] font-semibold ">{it.heading}</div>

              <div className="flex flex-col gap-1">
                <ul className="list-disc">
                  <li>{it.text}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20">
          Thank you for choosing AirportCab.lk. We look forward to serving you!
        </div>
      </div>
    </div>
  );
};

export default Refund;
