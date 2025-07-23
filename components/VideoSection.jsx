import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-h-full bg-transparent flex justify-center">
      <video
        className="w-full"
        src="/Others/airportcab.m4v"
        loop
        muted
        autoPlay
        playsInline
        controls
      />
    </div>
  );
};

export default VideoSection;
