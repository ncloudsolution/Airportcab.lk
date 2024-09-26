import React from "react";

import SkeletonWrapper from "../singleElements/SkeletonWrapper";
import Shimmer from "../singleElements/Shimmer";
import SkeletonBasic from "../singleElements/SkeletonBasic";

const ProductCardSkeleton = () => {
  return (
    <SkeletonWrapper customWidths={"w-[240px] xxxs:w-[300px]"}>
      <div className="w-[100%] flex justify-center">
        <SkeletonBasic skeletonType={"image"} />
      </div>

      <SkeletonBasic skeletonType={"title"} />
      <SkeletonBasic skeletonType={"description"} />
      <SkeletonBasic skeletonType={"description"} />
      <Shimmer />
    </SkeletonWrapper>
  );
};

export default ProductCardSkeleton;
