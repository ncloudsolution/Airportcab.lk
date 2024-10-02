import Image from "next/image";
import React from "react";
import ellaodyssey from "@/public/Vehicles/ellaodyssey.jpg";
import dunhindaodyssey from "@/public/Vehicles/dunhindaodyssey.jpg";

const TrainStopPlacesCard = () => {
  const trainCardDetails = [
    {
      trainName: "Ella Odyssey",
      img: ellaodyssey,
      stops: [
        "Horsetail Waterfall view point - (2 minutes)",
        "Sri Pada (Adam's Peak) view point - (2 minutes)",
        "St Clair Waterfall view point - (2 minutes)",
        "Elgin Waterfall view point - (2 minutes)",
        "Sumit Level - (2 minutes)",
        "No 18 Tunnel - (3 minutes)",
        "Kithal Ella Waterfall view point - (3 minutes)",
        "Nine Arches Bridge - (10 minutes)",
      ],
    },
    {
      trainName: "Dunhinda Odyssey",
      img: dunhindaodyssey,
      stops: [
        "Horsetail Waterfall view point - (2 minutes)",
        "Sri Pada (Adam's Peak) view point - (2 minutes)",
        "St Clair Waterfall view point - (2 minutes)",
        "Elgin Waterfall view point - (2 minutes)",
        "Sumit Level - (2 minutes)",
        "No 18 Tunnel - (3 minutes)",
        "Kithal Ella Waterfall view point - (3 minutes)",
        "Nine Arches Bridge - (10 minutes)",
        "Windbreak",
        "Demodara Tunnel & Bridge",
      ],
    },
  ];
  return (
    <div className="flex w-full bigmd:px-0 bxs:px-8 xxs:px-0 xxxs:px-3 px-6 items-center">
      <div className="py-5 w-full h-full grid bigmd:grid-cols-2 grid-cols-1 gap-5">
        {trainCardDetails.map((train, index) => {
          return (
            <div key={index} className="flex flex-col w-full">
              <div className=" bxs:h-[320px] h-[270px]  rounded-t-lg relative overflow-hidden ">
                <Image
                  src={train.img}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute z-50 bg-primary font-semibold text-black w-full py-2 bottom-0 text-center bxs:text-[22px] text-[18px]">
                  {train.trainName}
                </div>
              </div>

              <div className="px-5 py-3 bg-white flex flex-col flex-1  shadow-md border-[3px] border-t-0 rounded-t-none border-primary rounded-xl">
                <div className="flex  flex-col border-2 border-transparent">
                  <div className="text-black font-semibold text-[15px]">
                    {train.stops.map((place, index) => (
                      <div key={index}>
                        <div className="text-[12px] bxs:text-[16px]">
                          {place}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainStopPlacesCard;
