import FailedSubmission from "@/components/loaders&Responses/FailedSubmission";
import React from "react";

const FailedPage = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <FailedSubmission
        navtext={"New Booking"}
        msg={"booking was not completed"}
      />
    </div>
  );
};

export default FailedPage;
