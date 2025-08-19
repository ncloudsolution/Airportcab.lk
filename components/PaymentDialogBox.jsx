import Image from "next/image";
import React, { useState } from "react";
import collage from "../public/payments/collage.jpg";

const PaymentDialogBox = ({ gatewayLink }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="absolute flex justify-center items-center z-30 size-full bg-black/50 px-4">
      {/* Background Image */}
      <Image
        onLoad={() => setImageLoaded(true)}
        fill
        src={collage}
        alt=""
        className={`${
          imageLoaded
            ? "opacity-100 blur-0"
            : "opacity-0 blur-lg mix-blend-multiply"
        } w-full h-full object-cover absolute -z-0 transition-all duration-500`}
      />

      {/* Gradient Overlay */}
      {imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 -z-0" />
      )}

      {/* Dialog Content */}
      <div className="w-full xs:w-[432px] h-[580px] rounded-md overflow-hidden relative z-10">
        <iframe src={gatewayLink} className="size-full" />
      </div>
    </div>
  );
};

export default PaymentDialogBox;
