import React from "react";
import Aboutus1 from "@/public/AboutUs/aboutus1.jpg";
import Aboutus2 from "@/public/AboutUs/aboutus2.webp";
import Aboutus3 from "@/public/AboutUs/aboutus3.jpg";
import text from "@/data/text.json";

import Image from "next/image";
import Title from "./standalone/Title";

const AboutUs = () => {
  const textcontent = text[0];

  return (
    <>
      <section className="overflow-hidden  pb-[30px] lg:pt-[50px] lg:pb-[50px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between -mx-4">
            <div className="w-full lg:px-4 md:px-20  px-[36px] lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full sm:px-4 xl:w-1/2">
                  <div className=" py-3 sm:py-4 px-2 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    {/** w-[300px] h-[400px] **/}
                    <Image
                      placeholder="blur"
                      layout="responsive"
                      src={Aboutus1}
                      alt="ffff"
                      className="w-full rounded-2xl "
                    />
                  </div>
                  <div className="py-3 sm:py-4  px-2 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Image
                      placeholder="blur"
                      src={Aboutus3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full xl:w-1/2 ">
                  <div className=" py-3 z-10 my-4  px-2 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Image
                      placeholder="blur"
                      src={Aboutus2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className=" lg:px-4 md:px-20 px-5 mb-5 lg:mb-0 mt-3 lg:mt-0">
                {/* <span className="block bxs:text-[80px] text-[50px] font-semibold text-primary">
                  About us
                </span> */}
                <div className="flex mx-0">
                  <Title title={"About Us"} />
                </div>

                <div className="bxs:-translate-y-6 xs:-translate-y-5 -translate-y-3">
                  <h2 className="bxs:mb-5 mb-3 bxs:text-[36px] xs:text-[24px] text-[22px] font-bold text-dark text-primary  ">
                    Your Best Tour Operators
                  </h2>
                  <p className="mb-5  bxs:text-[16px] text-[14px] text-body-color dark:text-dark-6">
                    {textcontent.aboutus_txt1}
                  </p>
                  <p className="lg:mb-8 mb-5  bxs:text-[16px] text-[14px] text-body-color dark:text-dark-6">
                    {textcontent.aboutus_txt2}
                  </p>
                  <a
                    href="/day-trips"
                    className="inline-flex items-center justify-center py-3 text-base  text-center text-black font-semibold border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                  >
                    Explore a Day Trip
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
