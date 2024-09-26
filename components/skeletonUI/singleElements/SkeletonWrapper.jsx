import React from "react";

const SkeletonWrapper = ({ customWidths, children }) => {
  return (
    <div
      className={` flex flex-col items-center py-3 rounded-xl relative overflow-hidden bg-[#f9f9f9] min-h-full ${
        customWidths ? customWidths : "" // Apply custom widths
      }`}
    >
      {children}
    </div>
  );
};

export default SkeletonWrapper;
