import React from "react";

const Shimmer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full animate-shimmer">
      <div className="w-1/2 h-full bg-[#ffffff33] skew-x-[-30deg] shadow-shimmershadow"></div>
    </div>
  );
};

export default Shimmer;
