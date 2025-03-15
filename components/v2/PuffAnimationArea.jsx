"use client";
import React, { useEffect, useState } from "react";
import PuffComponent from "./puffComponent";

const PuffAnimationArea = () => {
  const [size, setSize] = useState(40); // Default size

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(30); // Small screens
      } else {
        setSize(40); // Large screens
      }
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="py-5 flex gap-3 items-center font-semibold bxs:text-[20px] xxs:text-[16px] text-[15px]">
      <PuffComponent size={size} />
      <div>Looking for taxi, make your booking</div>
    </div>
  );
};

export default PuffAnimationArea;
