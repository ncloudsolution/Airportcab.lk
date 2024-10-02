"use client";
import { GetAllDataOfTourPackage } from "@/libs/JsonDataCatching";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { MdLocalHotel } from "react-icons/md";

const TourPackageDayByDaySection = ({ experience }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // const elementRefs = useRef([]);

  // const scrollToSection = (index) => {
  //   const targetElement = elementRefs.current[index];
  //   if (targetElement) {
  //     const targetOffset = targetElement.offsetTop - 400;
  //     window.scrollTo({
  //       top: targetOffset,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    // scrollToSection(index);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border-[2px] border-slate-100 py-5 flex flex-col">
        <div className="xs:text-[30px] text-[24px] font-medium sm:mx-10 xs:mx-5 mx-4 pb-2 border-b-[2px] border-primary w-fit">
          Itinerary
        </div>
        {experience.map((exp, index) => (
          <div
            key={index}
            // ref={(el) => (elementRefs.current[index] = el)}
            className="flex flex-col border-b-[2px] border-primary sm:mx-10 xs:mx-5 mx-4 sm:py-8 py-4"
          >
            <div className="flex flex-col xs:flex-row xs:gap-5 xs:items-center items-start gap-4">
              <div className="w-[100px] px-4 xs:py-2 py-1 bg-primary font-semibold text-center sx:rounded-md rounded-sm">
                Day {index + 1}
              </div>
              <div className="flex flex-col flex-1 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium md:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px]">
                    {exp.heading}
                  </div>
                  <FaCaretDown
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } text-[24px] transition-all duration-700`}
                    onClick={() => toggleOpen(index)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                openIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="text-[16px] sm:mt-5 mt-3">
                <div className="sm:text-[16px] bxs:text-[14px] text-[12px]">
                  {exp.text}
                </div>
                {exp.hotelName && (
                  <div className="xs:mt-5 mt-4">
                    <Link
                      href={exp.hotelLink}
                      className="flex gap-3 items-center"
                      target="_blank"
                    >
                      <Image
                        src={exp.hotelLogo}
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full overflow-hidden sm:size-[40px] size-[35px] border-[2px] border-primary p-[2px]"
                      />
                      <div className="flex flex-col xxs:flex-row xxs:gap-x-5 gap-x-3">
                        <div className="font-medium md:text-[18px] sm:text-[16px] text-[14px]">
                          {exp.hotelName}
                        </div>
                        <div className="flex gap-2 items-center">
                          <MdLocalHotel className="md:text-[20px] text-[16px]" />
                          <div className="font-medium md:text-[18px] sm:text-[16px] text-[14px]">
                            {exp.hotelType}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TourPackageDayByDaySection;
