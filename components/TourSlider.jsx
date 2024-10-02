"use client";
import React, { useRef, useState, useEffect, useContext } from "react";

import Image from "next/image";

import tourPackage from "@/data/tourPackage.json";
import SliderBtn from "./standalone/SliderBtn";
import useWindowSize from "@/hooks/useWindowSize";
import Title from "./standalone/Title";
import Link from "next/link";
import { TourContext } from "@/context/TourContextProvider";

const TourSlider = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const [windowWidth, windowHeight] = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setTourDetails((prevDetails) => ({
  //     ...prevDetails,
  //     converedCurrencySymbol: "$",
  //     currencyType: "USD",
  //     conversionRate: 1,
  //   }));
  // }, [setTourDetails]);

  useEffect(() => {
    setIsClient(true); // Component has mounted in the client
  }, []);

  // unlimited scroll tile
  function generateRepeatedArray(baseArray, repetitions) {
    const result = [];
    for (let i = 0; i < repetitions; i++) {
      result.push(...baseArray);
    }

    return result;
  }
  const multiplier = 4;
  const repeatedArray = generateRepeatedArray(tourPackage, multiplier); // Repeats array 3 times

  //array repeat over

  const elementRef = useRef(null);

  const handleResize = () => {
    if (elementRef.current) {
      setSliderWidth(elementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const [sliderWidth, setSliderWidth] = useState(0);

  function columnSizeByScreenSize() {
    if (!isClient) return 1;

    if (windowWidth >= 1400) {
      return 4;
    } else if (windowWidth >= 1150) {
      return 3;
    } else if (windowWidth >= 860) {
      return 2;
    } else {
      return 1;
    }
  }

  let columnSizebyScreenSizeValue = columnSizeByScreenSize();

  function hoppingSize() {
    return Math.ceil(repeatedArray.length / columnSizebyScreenSizeValue);
  }

  // function dottedSize() {
  //   return Math.ceil(places.length / columnSizebyScreenSizeValue);
  // }

  const hoppingSizeValue = hoppingSize();

  const [count, setCount] = useState(0);
  // const [dotcount, setDotCount] = useState(1);

  //
  const leftHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      // setDotCount((count % (multiplier + 1)) - 1);
    }
  };

  const rightHandler = () => {
    if (count < hoppingSizeValue - 1) {
      setCount(count + 1);
      // setDotCount((count % (multiplier + 1)) + 1);

      //
    }
  };

  const translationOffset = count > 0 ? count * -3 : 0;

  // const dottedSizeValue = dottedSize();

  const dots = [];
  for (let i = 0; i < hoppingSizeValue / multiplier; i++) {
    dots.push(
      <div
        key={i}
        onClick={() => {
          setCount(i);
        }}
        className={` ${
          i === count % Math.ceil(hoppingSizeValue / multiplier)
            ? "bg-primary"
            : "bg-slate-500"
        } size-[12px] rounded-full  flex`}
      />
    );
  }

  return (
    <>
      <div className="w-full flex flex-col text-center items-center">
        <Title title={"Our Best Promotional Tours"} />
        <div className="flex items-center">
          <div onClick={leftHandler} className="cursor-pointer">
            <SliderBtn side={"left"} />
          </div>
          <div
            ref={elementRef}
            className="midxl:w-[1330px] mobile:w-[1000px] bigmd:w-[666px] sm:w-[300px] xs:w-[350px] xxs:w-[310px] xxxs:w-[285px] w-[240px] overflow-hidden flex  "
          >
            <div className="py-4 flex ">
              {repeatedArray.map((place, index) => (
                //{placearray.map((place, index) => (
                <Link
                  href={`/tour-packages/${place.description}`}
                  style={{
                    transform: `translateX(-${
                      count * sliderWidth + translationOffset
                    }px)`,
                  }}
                  key={index}
                  className="flex flex-col text-left  overflow-hidden   bigmd:w-[300px] sm:w-[265px] xs:w-[315px] xxs:w-[275px] xxxs:w-[250px] w-[220px]  shadow xxxs:m-4 m-2 transition-all duration-3000 rounded-xl"
                >
                  <div className="h-[320px] rounded-lg relative ">
                    <Image
                      src={place.img}
                      alt=""
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                    />
                    <div className="bg-black bg-opacity-60 absolute bottom-0">
                      <div className="px-[15px]  py-[15px] text-center text-white font-semibold flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 ">
                        {place.description}
                      </div>
                    </div>
                  </div>

                  {/* <div className="border-[3px] border-t-0 rounded-t-none border-primary rounded-xl">
                   
                    <div className="text-primary py-[15px] px-[15px] font-semibold text-[15px]">
                      From {tourDetails.converedCurrencySymbol}{" "}
                      {(place.price * tourDetails.conversionRate).toFixed(2)}
                      <span className="text-black ml-1 text-[15px]">
                        Per Person
                      </span>
                    </div>
                  </div> */}
                </Link>
              ))}
            </div>
          </div>
          <div onClick={rightHandler} className="cursor-pointer">
            <SliderBtn side={"right"} />
          </div>
        </div>
        {isClient && ( // Render this div only on the client side
          <div className="flex gap-2 flex-row bg-transparent">{dots}</div>
        )}
      </div>
    </>
  );
};

export default TourSlider;
