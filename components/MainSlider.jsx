"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "@/public/mainSlider/s1.jpeg";
import image2 from "@/public/mainSlider/s2.jpeg";
import image3 from "@/public/mainSlider/s3.jpeg";
import image4 from "@/public/mainSlider/s4.jpeg";
import image5 from "@/public/mainSlider/s5.jpeg";

import btn1 from "@/public/mainSlider/right-arrow.png";
import btn2 from "@/public/mainSlider/left-arrow.png";

//import { FaChevronLeft } from "react-icons/fa6";
//import { FaChevronRight } from "react-icons/fa6";

const MainSlider = () => {
  const [current, setCurrent] = useState(0);

  //go to previous slide manually
  const previousSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  //go to next slide manually
  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  //automatic movement after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  //related data array
  const images = [image1, image2, image3, image4, image5];
  const titles = [
    "Nature's Canvas",
    "Wild Encounters",
    "Timeless Treasures",
    "Sandy Serenity",
    "Cultural Tapestry",
  ];
  const titlesminor = [
    "Sri Lanka's Flora & Fauna",
    " Sri Lanka's Diverse Wildlife Adventures",
    "Exploring Sri Lanka's Heritage Sites",
    "Discover Sri Lanka's Beach Paradise",
    " Immerse in Sri Lanka's Rich Traditions",
  ];

  return (
    //animated slider area
    // <div className="w-[100%] px-[2%]">
    <div className="group relative w-[100] rounded-lg  flex items-center overflow-y-hidden overflow-x-auto scrollbar-hide scroll-smooth  ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative min-w-full h-full transition ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <Image
            src={image}
            className={`w-full h-full object-cover object-right-bottom`}
            alt={`Image ${index}`}
          />
          <div className="absolute top-0 left-0 w-full h-full"></div>

          {/*BOX POST AREA*/}
          <div
            className={`${
              index === 0
                ? "left-[50%] -translate-x-1/2"
                : index === 1
                ? "left-[50%] -translate-x-1/2"
                : index === 2
                ? "left-[50%] -translate-x-1/2"
                : index === 3
                ? "left-[50%] -translate-x-1/2"
                : index === 4
                ? "left-[50%] -translate-x-1/2"
                : ""
            } midxl:w-[600px] lg:w-[500px] sm:w-[450px] w-[350px] midxl:py-[40px] lg:py-[25px] sm:py-[15px] py-[10px] bg-black opacity-50 absolute z-40 bottom-[20%] rounded-lg flex flex-col justify-center items-center shadow-xl`}
          >
            <div className="text-white midxl:text-[40px] lg:text-[30px] sm:text-[24px] text-[18px] font-bold">
              {titles[index]}
            </div>

            <div className=" text-white midxl:text-[24px] lg:text-[18px] sm:text-[14px] text-[10px] font-normal midxl:mt-[10px] sm:mt-[6px] mt-[2px]">
              {titlesminor[index]}
            </div>
          </div>
        </div>
      ))}

      {/*slider nav buttons*/}
      <div className="absolute top-1/2 -translate-y-1/2 flex w-full  justify-between px-[30px] ">
        <Image
          src={btn2}
          alt=""
          className=" w-[20px] sm:w-[30px] rounded-full xs:p-[10px]  p-[5px] bg-transparent xs:border-[2px] border-[1px] border-white bg-opacity-70 text-white xs:text-[40px] text-[25px] md:hover:bg-primary md:hover:border-primary  cursor-pointer transition-all duration-300"
          onClick={previousSlide}
        />
        <Image
          src={btn1}
          alt=""
          className="w-[20px] sm:w-[30px] rounded-full xs:p-[10px]  p-[5px] bg-transparent xs:border-[2px] border-[1px] border-white bg-opacity-70 text-white xs:text-[40px] text-[25px] md:hover:bg-primary md:hover:border-primary  cursor-pointer transition-all duration-300"
          onClick={nextSlide}
        />
      </div>

      {/*END LINE*/}
      {/*<div className="bg-primary h-[20px] w-full bottom-0 absolute"></div>*/}
    </div>
    //</div>
  );
};

export default MainSlider;
