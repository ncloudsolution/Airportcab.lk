import React from "react";
import SliderBtn from "@/components/SliderBtn";
import Title from "./standalone/Title";
import ReviewSkeleton from "./skeletonUI/compoundElements/ReviewSkeleton";

const ReviewLoader = () => {
  return (
    <div className="w-full flex flex-col text-center items-center px-5">
      <Title title={"Most Recent Reviews"} />
      <div className="flex items-center justify-center w-full">
        <div className="cursor-pointer">
          <SliderBtn side={"left"} />
        </div>

        <div className="w-[90%] flex p-5 bg-transparent">
          <div className="flex w-full overflow-hidden rounded-xl bg-white py-2">
            <div className="flex w-full gap-5 bg-white xxs:h-[270px] h-full">
              <div className="w-full border-[1px] border-gray-400 rounded-xl shadow-md">
                <ReviewSkeleton />
              </div>
              <div className="hidden md:flex w-full border-[1px] border-gray-400 rounded-xl shadow-md">
                <ReviewSkeleton />
              </div>
              <div className=" hidden lg:flex w-full border-[1px] border-gray-400 rounded-xl shadow-md">
                <ReviewSkeleton />
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <SliderBtn side={"right"} />
        </div>
      </div>
    </div>
  );
};

export default ReviewLoader;
