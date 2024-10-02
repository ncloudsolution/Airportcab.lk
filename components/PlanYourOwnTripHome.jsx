import React from "react";
import Image from "next/image";
import calander from "@/public/Others/calander.jpg";
import text from "@/data/text.json";
import Title from "./standalone/Title";
import Link from "next/link";

function PlanYourOwnTripHome() {
  const textcontent = text[0];
  return (
    <>
      <div
        className="flex justify-center  " /*</>style={{ backgroundImage: `url(${srilanka4.src})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}} */
      >
        <div className="bg-gradient-to-b from-yellow-600 via-primary to-yellow-600 w-[300px] xxs:w-[350px] xs:w-[450px] bxs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[90%] 2xl:w-[80%] flex flex-col-reverse  lg:flex-row-reverse justify-between gap-3 2xl:gap-6 shadow-lg items-center mobile:p-[50px] bxs:p-[30px] p-[20px] rounded-lg">
          <div className="w-full lg:w-1/2 flex lg:justify-end justify-center">
            <Image
              className="hidden lg:block mb-[20px] lg:mb-0 w-[400px] 2xl:w-[500px] border-2 border-white rounded-md p-6 h-auto overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={calander}
              alt=""
            />
          </div>

          <div className="w-full flex flex-col lg:w-1/2 lg:mb-0 ">
            <div className="translate-y-1 bxs:translate-y-3 lg:translate-y-0 lg:text-left text-center">
              <Title title={"Plan Your Own Trip"} />
            </div>

            <div className="w-full lg:w-1/2 flex lg:justify-end justify-center">
              <Image
                className=" my-7 lg:hidden lg:mb-0 w-[400px] 2xl:w-[500px] border-2 border-white rounded-md p-6 h-auto overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
                src={calander}
                alt=""
              />
            </div>

            <p className="text-[14px] text-black bxs:text-[16px] mb-5">
              {textcontent.owntrip_txt1}
            </p>

            <Link
              className="bg-black py-3 px-7 text-center text-white rounded-md lg:w-fit w-full"
              href={"/custom-tour-package"}
            >
              Plan it Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanYourOwnTripHome;
