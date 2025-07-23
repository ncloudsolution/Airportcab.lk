import React from "react";
import DestinationTile from "./DestinationTile";
import sigiriya from "@/public/popular/sigiriya-pop.jpg";
import sigiriya2 from "@/public/popular/sigiriya-pop-2.jpg";
import colombo from "@/public/popular/colombo-pop.jpg";
import colombo2 from "@/public/popular/colombo-pop2.jpg";
import colombo3 from "@/public/popular/colombo-pop3.jpg";
import ella from "@/public/popular/ella-pop.jpg";
import ella2 from "@/public/popular/ella-pop-2.jpg";
import mirissa from "@/public/popular/mirissa-pop.jpg";
import mirissa2 from "@/public/popular/mirissa-pop2.webp";
import cardpointtopoint from "@/public/Tiles/card.webp";

const PopularTours = () => {
  const items = [
    {
      label: "BIA Airport to Sigiriya | Dambulla | Habarana",
      origin: "Bandaranaike International Airport (CMB), Katunayake",
      destination: "Sigiriya",
      road: "Highway",
      distance: "150 km",
      time: "3 hours 10 mins",
      price: "Starting from 44 USD",
      img: sigiriya2,
    },
    {
      label: "BIA Airport to Colombo",
      origin: "Bandaranaike International Airport (CMB), Katunayake",
      destination: "Colombo",
      road: "Highway",
      distance: "35 km",
      time: "40 mins",
      price: "Starting from 12 USD",
      img: colombo3,
    },
    {
      label: "BIA Airport to Mirissa | Waligama | Ahangama",
      origin: "Bandaranaike International Airport (CMB), Katunayake",
      destination: "Mirissa",
      road: "Highway",
      distance: "180 km",
      time: "2 hours 45 mins",
      price: "Starting from from 53 USD",
      img: mirissa2,
    },
    {
      label: "BIA Airport to Ella",
      origin: "Bandaranaike International Airport (CMB), Katunayake",
      destination: "Ella, Sri Lanka",
      road: "Highway",
      distance: "210 km",
      time: "5 hours 45 mins",
      price: "Starting from 110 USD",
      img: ella2,
    },
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center  bg-gradient-to-b from-gray-200 to bg-slate-100 gap-10 py-10 xxs:px-5 px-3">
        <div className="2xl:text-[50px] bigmd:text-[40px] text-[30px] text-center font-semibold text-black">
          Popular Destinations From Airport Taxi Fair
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
