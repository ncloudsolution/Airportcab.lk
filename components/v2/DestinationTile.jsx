"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FaRoad } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { RxLapTimer } from "react-icons/rx";
import { GiReceiveMoney } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";

const DestinationTile = ({ item }) => {
  const router = useRouter();

  const { tourDetails, setTourDetails } = useContext(TourContext);
  const taxiHandleClick = (org, dest) => {
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      destinationpage: true,
      destination: dest,
      origin: org,
    }));

    router.push("/taxi-service");
  };
  return (
    <div className="flex flex-col  shadow-md rounded-lg overflow-hidden bg-gray-100">
      <div className="relative h-[280px] w-full">
        <Image
          src={item.img}
          alt=""
          className="size-[100%] object-cover"
          fill
        />
      </div>
      <div className="mt-5 text-center font-semibold bxs:px-4 ">
        {item.origin} to {item.destination}
      </div>

      <div className="flex flex-col items-center gap-2 p-4 pb-6">
        <div className="flex gap-2 text-[14px] ">
          <IoLocation size={20} className="text-primary" />
          {item.distance}
        </div>
        <div className="flex gap-2 text-[14px]">
          <FaRoad size={20} className="text-primary" />
          {item.road}
        </div>

        <div className="flex gap-2 text-[14px] ">
          <RxLapTimer size={20} className="text-primary" />
          {item.time}
        </div>

        <div className="flex gap-2 text-[14px] ">
          <GiReceiveMoney size={20} className="text-primary" />
          {item.price}
        </div>

        <button
          className="w-full text-center bg-primary text-white py-2 rounded-md mt-2"
          onClick={() => taxiHandleClick(item.origin, item.destination)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationTile;
