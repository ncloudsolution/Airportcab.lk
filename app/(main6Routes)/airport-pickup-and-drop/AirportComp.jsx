"use client";
import AirportMap from "@/components/Map/AirportMap";
import Hierarchy from "@/components/standalone/Hierarchy";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import Flow from "@/components/standalone/Flow";
import DescriptionTile from "@/components/DescriptionTile";
import CurrencyFullBar from "@/components/CurrencyFullBar";
import NewLoading from "@/components/skeletonUI/compoundElements/NewLoading";
import { useSearchParams } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";

const AirportComp = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const params = useSearchParams();
  const dest = params.get("destination");
  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      destination: dest,
    }));
  });

  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000); // 3 seconds delay - 1s for google api load and 2 second timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    region: "lk",
    libraries: libraries,
  });

  if (!isLoaded || showSkeleton) {
    return (
      <>
        <NewLoading />
      </>
    );
  }
  return (
    <div className="pt-[60px]">
      <CurrencyFullBar />
      <div className=" flex flex-col justify-center items-center bg-gradient-to-t from-white to-gray-200 w-full ">
        <div className="xs:mt-10 bigmd:w-[838px] bxs:w-[464px] xxxs:w-[314px] w-[294px] px-8 rounded-md flex justify-center bg-[white]/50 shadow-lg backdrop-blur-lg mt-[40px]">
          <Hierarchy />
        </div>
        <div className="flex flex-col items-center  -scroll-mb-14">
          <div className="xs:mt-8 mt-5 bigmd:w-[838px] bxs:w-[464px] xxxs:w-[314px] w-[294px] px-8">
            <AirportMap />
          </div>
          <div className="my-10">
            <Flow />
          </div>

          <div className="mb-16 mt-3">
            <DescriptionTile type={"airport"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportComp;
