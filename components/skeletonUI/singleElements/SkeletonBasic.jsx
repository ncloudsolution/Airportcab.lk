import React from "react";

const SkeletonBasic = ({ skeletonType }) => {
  const classes = `skeleton ${skeletonType}`;
  return <div className={classes}></div>;
};

export default SkeletonBasic;
