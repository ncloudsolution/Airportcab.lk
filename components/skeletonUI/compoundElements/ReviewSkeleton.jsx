import React from "react";
import SkeletonWrapper from "../singleElements/SkeletonWrapper";
import SkeletonBasic from "../singleElements/SkeletonBasic";
import Shimmer from "../singleElements/Shimmer";

const ReviewSkeleton = () => {
  return (
    <SkeletonWrapper customWidths={"w-full"}>
      {/* <div className="w-[100%] flex justify-center">
        <SkeletonBasic skeletonType={"image"} />
      </div> */}
      <div className="py-2 px-5 w-full flex flex-col gap-5">
        <div className="w-full flex items-center gap-5">
          <div className="size-[50px] rounded-full bg-[#ddd]" />
          <div className="flex flex-col flex-1">
            <SkeletonBasic skeletonType={"title-max"} />
            <SkeletonBasic skeletonType={"mini-title"} />
          </div>
        </div>

        <div className="flex flex-col ">
          <SkeletonBasic skeletonType={"para"} />
          <SkeletonBasic skeletonType={"para"} />
          <SkeletonBasic skeletonType={"para"} />
          <SkeletonBasic skeletonType={"para"} />
          <SkeletonBasic skeletonType={"description"} />
        </div>

        <Shimmer />
      </div>
    </SkeletonWrapper>
  );
};

export default ReviewSkeleton;
