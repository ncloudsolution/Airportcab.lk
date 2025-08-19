import SuccessSubmission from "@/components/loaders&Responses/SuccessSubmission";
import React from "react";
import success from "@/public/Others/successImg.jpg";

const SuccessPage = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <SuccessSubmission
        title={"Booking Success"}
        msg={"Your booking has been successfully completed"}
        navtext={"New Booking"}
        img={success}
      />
    </div>
  );
};

export default SuccessPage;
