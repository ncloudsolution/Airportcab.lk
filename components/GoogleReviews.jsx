"use client";

import React, { useRef, useState, useEffect } from "react";

import Stars from "@/components/Stars";
import Image from "next/image";

// import reviews from "@/data/reviews.json";
import SliderBtn from "@/components/SliderBtn";
import useWindowSize from "@/hooks/useWindowSize";
import Title from "@/components/standalone/Title";
import ReviewLoader from "./ReviewLoader";
import Link from "next/link";

const GoogleReviews = () => {
  const [windowWidth] = useWindowSize();
  const [sliderWidth, setSliderWidth] = useState(windowWidth);
  const [mounted, setMounted] = useState(false); // Track component mounting

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=name,reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    const url = "api/googlereviews";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Google reviews:", error.message);
        setError(error.message); // Set the error message in state
      });
  }, []);

  const elementRef = useRef(null);

  const handleResize = () => {
    if (elementRef.current) {
      setSliderWidth(elementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    setMounted(true);
    // Set mounted to true when the component mounts
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [windowWidth]);

  const columnSizeByScreenSize = () => {
    if (windowWidth >= 1420) {
      return 3;
    } else if (windowWidth >= 826) {
      return 2;
    } else {
      return 1;
    }
  };

  const columnSizebyScreenSizeValue = columnSizeByScreenSize();

  const hoppingSizeValue = Math.ceil(
    reviews.length / columnSizebyScreenSizeValue
  );

  const [count, setCount] = useState(0);

  const leftHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const rightHandler = () => {
    if (count < hoppingSizeValue - 1) {
      setCount(count + 1);
    }
  };

  let cal;
  switch (true) {
    case columnSizebyScreenSizeValue === 3:
      cal = 132.5;

      // cal = 116;
      break;
    case columnSizebyScreenSizeValue === 2:
      cal = 96;
      break;
    default:
      cal = 77;
  }

  const size = (0.9 * windowWidth - cal) / columnSizebyScreenSizeValue;
  // const translationOffset =
  //   columnSizebyScreenSizeValue === 1 ? 24 * count : 20 * count;

  const translationOffset =
    // columnSizebyScreenSizeValue != 1 ? 20 * count : 24 * count;
    columnSizebyScreenSizeValue == 1
      ? 20 * count
      : // ? 18.5 * count
      columnSizebyScreenSizeValue == 2
      ? 20 * count
      : 20 * count;
  // : 34 * count;

  // Don't render the actual content until the component has mounted on the client
  if (!mounted || reviews.length == 0) {
    return <ReviewLoader />;
  }

  console.log(reviews);

  return (
    <div className="w-full flex flex-col text-center items-center px-5 ">
      <Title title={"Most Recent Reviews"} />
      <div className="flex items-center justify-center w-full">
        <div onClick={leftHandler} className="cursor-pointer">
          <SliderBtn side={"left"} />
        </div>

        <div className="w-[90%] flex p-5 bg-transparent">
          <div
            className="flex w-full overflow-hidden rounded-xl bg-white py-2"
            ref={elementRef}
          >
            <div className="flex gap-5 bg-white">
              {reviews.map((review, index) => (
                <div
                  style={{
                    transform: `translateX(-${
                      count * size + translationOffset
                    }px)`,
                    width: `${size}px`,
                  }}
                  key={index}
                  className="flex bg-white flex-col border-[1px] border-gray-400 text-left p-[20px] xxs:h-[270px] h-full rounded-xl shadow-md translate-x-0 transition-all duration-1000"
                >
                  <div className="flex items-start">
                    <div className="rounded-full max-w-[50px]">
                      <Image
                        src={review.profile_photo_url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col ml-[10px]">
                      <div className="font-semibold">{review.author_name}</div>
                      <div className="text-customGray-900">
                        {review.relative_time_description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stars count={review.rating} />
                  </div>
                  <div className="flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 pr-[10px]">
                    {review.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div onClick={rightHandler} className="cursor-pointer">
          <SliderBtn side={"right"} />
        </div>
      </div>
      <Link
        href="https://www.google.lk/search?sca_esv=eb29a46433157e1a&sca_upv=1&sxsrf=ADLYWIImbbuiMtrycICs22pyGG-8N-VBgg%3A1725438539992&q=booking+trip+srilanka+padukka+reviews&uds=ADvngMhgJg-4M5HhU_b4PR5CeYmmSNv134nXCi99aca0NrE5j12OTU_808CMAa57CwAu_SBLp3jQFlxGTr3ycsGgrgUdKgyHkT4kRFN17ZiSekPKt_5yfvj3iniSJ72IPLqizeQXc_1oH_8cyEeeMiuXdG7PgLHlZjBQfrQM4yXCkJi_LN7Tp0qX8s8eUPSZgtKdhxDpF-IQ9M9br7U8Bsg4LWOcuRUQAOMX-3iCbiW4I-N2g10dkJSzC6dvlQ1jJMRB8s6xPVtOqtykTb9qrIgIDlRKHIgtGRvFCKvrXaceDEyBaZ025UWKmX6cyekmqOC2WRHXZsIi8qUGYLdpzVU89Kyy7SUr2EgasaOj3kvD_8d4gwf-dmKnWo_VCtW_STcg0DWdJY4C31aD25gS5TZtg-nV_QjALbMShxJcKvhHMHbEonxA0QrDY04T6vK-lRg-520N7gvNxhtFhMXubQK0zpxAwoc3sjLhU66XLCW5ZFCc0hxeOMUAJLjxMRbCn7b8AyA4ld0OPHEerbEp1YFPiTIDhCX4WDlxiOp_GAgOJAJSvISuBGo&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7rsiQGq6YmgHwsNdkb5ouasnZs4ZnYPkZe_MDstnohK6orqkto6V756xAwcyRNY_8Cr4Vw-d5f6-rV7u198DlpQXDfE2TvLsAAVOoJGQCWYw4G5CmA%3D%3D&sa=X&ved=2ahUKEwip84e676iIAxXE-DgGHcr5B4YQk8gLegQIIxAB&ictx=1&stq=1&ebo=3"
        className="mb-10 px-5 py-2 rounded-md bg-primary text-black"
      >
        More Reviews
      </Link>
    </div>
  );
};

export default GoogleReviews;
