import Image from "next/image";
import React from "react";

import driving from "@/public/Tiles/driving.jpg";
import cardairport from "@/public/Tiles/card1.webp";
import cardpointtopoint from "@/public/Tiles/card.webp";
import cardtrain from "@/public/Tiles/card3.webp";
import door from "@/public/Tiles/door.jpg";
import door2 from "@/public/Tiles/door2.jpg";
import door3 from "@/public/Tiles/door3.jpg";
import lowprice from "@/public/Tiles/newyard.png";
import lowprice2 from "@/public/Tiles/lowprice2.webp";
import lowprice3 from "@/public/Tiles/lowprice3.jpg";

import tour from "@/public/Tiles/tour.jpeg";
import tour2 from "@/public/Tiles/tour2.jpg";
import train from "@/public/Tiles/train.jpg";

const DescriptionTile = ({ type }) => {
  const airport = [
    {
      img: lowprice,
      title: "Always Low Prices",
      Description:
        "Ensuring your safety is our priority, and your comfort our goal. We compare prices from numerous renowned transportation providers in Colombo, aiming to provide the best service at affordable rates.",
    },
    // {
    //   img: driving,
    //   title: "Professional Service",
    //   Description:
    //     "We use reputable airport transfer service providers employing professional and reliable drivers",
    // },
    {
      img: door,
      title: "Door to Door",
      Description:
        "Our Colombo airport transfer service features meet and greet and flight monitoring. It offers the most comfortable, stress-free travel experience, ensuring punctuality and personalized assistance.",
    },
    {
      img: tour,
      title: "Tours and Excursions",
      Description:
        "We offer airport transfers, cruise port transfers, and hourly car hire with a driver. Book your tour online, or contact us to create your perfect private tour or trip, with or without a guide.",
    },
    {
      img: cardairport,
      title: "Secure Booking Process",
      Description:
        "This website secures your connection with advanced encryption and ensures your sensitive information is never stored. Rest assured, your privacy is our top priority, providing peace of mind for all transactions.",
    },
  ];

  const points = [
    {
      img: lowprice2,
      title: "Always Low Prices",
      Description:
        "Ensuring your safety is our priority, and your comfort our goal. We compare prices from numerous renowned transportation providers in Colombo, aiming to provide the best service at affordable rates.",
    },
    {
      img: tour2,
      title: "Tours and Excursions",
      Description:
        "We offer airport transfers, cruise port transfers, and hourly car hire with a driver. Book your tour online, or contact us to create your perfect private tour or trip, with or without a guide.",
    },
    // {
    //   img: driving,
    //   title: "Professional Service",
    //   Description:
    //     "We use reputable airport transfer service providers employing professional and reliable drivers",
    // },
    {
      img: door2,
      title: "Door to Door",
      Description:
        "Our Colombo airport transfer service features meet and greet and flight monitoring. It offers the most comfortable, stress-free travel experience, ensuring punctuality and personalized assistance.",
    },

    {
      img: cardpointtopoint,
      title: "Secure Booking Process",
      Description:
        "This website secures your connection with advanced encryption and ensures your sensitive information is never stored. Rest assured, your privacy is our top priority, providing peace of mind for all transactions.",
    },
  ];

  const rails = [
    {
      img: train,
      title: "Rail Journeys",
      Description:
        "Discover Sri Lanka's scenic railways with our curated train experiences. Enjoy seamless travel and book your rail adventure online for an unforgettable journey experience.",
    },
    {
      img: lowprice3,
      title: "Always Low Prices",
      Description:
        "Ensuring your safety is our priority, and your comfort our goal. We compare prices from numerous renowned transportation providers in Colombo, aiming to provide the best service at affordable rates.",
    },
    // {
    //   img: driving,
    //   title: "Professional Service",
    //   Description:
    //     "We use reputable airport transfer service providers employing professional and reliable drivers",
    // },
    {
      img: door3,
      title: "Door to Door",
      Description:
        "Our Colombo airport transfer service features meet and greet and flight monitoring. It offers the most comfortable, stress-free travel experience, ensuring punctuality and personalized assistance.",
    },

    {
      img: cardtrain,
      title: "Secure Booking Process",
      Description:
        "This website secures your connection with advanced encryption and ensures your sensitive information is never stored. Rest assured, your privacy is our top priority, providing peace of mind for all transactions.",
    },
  ];

  const renderItems = (items) => {
    return (
      <div className="px-5 xl:gap-10 bigmd:gap-x-10 gap-10 grid xl:grid-cols-4 bigmd:grid-cols-2 grid-cols-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md rounded-lg overflow-hidden bg-gray-100"
          >
            <div className="h-[200px] xl:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px]">
              <Image
                src={item.img}
                alt=""
                className="size-[100%] object-cover"
              />
            </div>
            <div className="mt-5 text-center mobile:text-[22px] bigmd:text-[18px] text-[24px] bxs:px-4 mobile:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px]">
              {item.title}
            </div>
            <div className="text-[14px] mobile:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px] text-center mt-3 mb-6 px-4">
              {item.Description}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {type === "airport" && renderItems(airport)}
      {type === "p2p" && renderItems(points)}
      {type === "rails" && renderItems(rails)}
    </>
  );
};

export default DescriptionTile;
