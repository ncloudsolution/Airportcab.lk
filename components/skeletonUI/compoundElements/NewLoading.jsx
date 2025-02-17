"use client";
import Image from "next/image";
import React from "react";
import { DNA } from "react-loader-spinner";
import car from "@/public/cargif.gif";

const NewLoading = () => {
  return (
    <div className=" w-full h-[calc(100vh-60px)] bg-gradient-radial from-white to-gray-200 flex justify-center items-center text-[30px] xs:text-[50px] xs:leading-[60px] leading-[40px] flex-col  gap-3">
      <div className="flex flex-col justify-center items-center">
        <div>Your Journey with</div>
        <div className="text-white">
          <b className="text-primary">AirportCab.lk </b>
        </div>
        <div className="xs:text-[30px] text-[20px] xs:leading-[40px] leading-[30px]">
          Starts Here
        </div>

        <div className="xs:text-[16px] text-[14px] mt-5 xs:leading-[30px] leading-[20px]">
          Your safety and comfort is our concern
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="xs:text-[20px] text-[16px]"> Loading</div>
        {/* <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> */}
        <Image src={car} alt="" className="size-[80px] animate-newcarmoving" />
      </div>
    </div>
  );
};

export default NewLoading;
