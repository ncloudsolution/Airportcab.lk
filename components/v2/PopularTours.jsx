import React from "react";
import DestinationTile from "./DestinationTile";
import sigiriya from "@/public/popular/sigiriya-pop.jpg";
import cardpointtopoint from "@/public/Tiles/card.webp";

const PopularTours = () => {
  const items = [
    {
      origin: "Colombo",
      destination: "Sigiriya",
      road: "Highway",
      distance: "180 km",
      time: "3 hours 40 mins",
      price: "Starting from 17,800 LKR",
      img: sigiriya,
    },
    {
      origin: "Colombo",
      destination: "Mirissa",
      road: "Highway",
      distance: "160 km",
      time: "2 hours 30 mins",
      price: "Starting from 15,600 LKR",
      img: cardpointtopoint,
    },
    {
      origin: "Colombo",
      destination: "Sigiriya",
      road: "Highway",
      distance: "180 km",
      time: "3 hours 40 mins",
      price: "Starting from 17,800 LKR",
      img: sigiriya,
    },
    {
      origin: "Colombo",
      destination: "Mirissa",
      road: "Highway",
      distance: "160 km",
      time: "2 hours 30 mins",
      price: "Starting from 15,600 LKR",
      img: cardpointtopoint,
    },
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center  bg-gradient-to-b from-gray-200 to bg-slate-100 gap-10 py-10 xxs:px-5 px-3">
        <div className="2xl:text-[50px] bigmd:text-[40px] text-[30px] text-center font-semibold text-black">
          Popular Destinations
        </div>
        <div className="w-full bigmd:w-[90%] 2xl:w-[80%] px-5 gap-5 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {items.map((item, index) => (
            <DestinationTile key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularTours;
