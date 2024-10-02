"use client";
import React, { useRef, useState, useEffect } from "react";
import Title from "./standalone/Title";
import { SumCaptcha } from "@/libs/Captcha";
import ConatactUsBanner from "./ConatactUsBanner";
import Processing from "./loaders&Responses/Processing";
import SuccessSubmission from "./loaders&Responses/SuccessSubmission";
import FailedSubmission from "./loaders&Responses/FailedSubmission";

import successEmail from "@/public/Others/successImgEmail.jpg";

const ContactUsForm = () => {
  //this return a array

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const massageRef = useRef();
  const captchaRef = useRef();

  const [submitError, setSubmitError] = useState("");

  const [sumCaptchaValue, setSumCaptchaValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    // Fetch or generate captcha value on component mount
    setSumCaptchaValue(SumCaptcha());
  }, [submitError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      massageRef.current.value === "" ||
      captchaRef.current.value === ""
    ) {
      captchaRef.current.value = ""; // Empty the captcha field value
      return setSubmitError("Please fill all the fields");
    }

    if (parseInt(captchaRef.current.value) !== sumCaptchaValue[2]) {
      captchaRef.current.value = ""; // Empty the captcha field value
      return setSubmitError("Captacha Validation Failed! Try again");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsLoading(true);

    setSubmitError("");

    const emailText = `Reach to Us:
    Name: ${nameRef.current.value}
    Email: ${emailRef.current.value}
    Massage: ${massageRef.current.value}`;

    const ContactusDetails = {
      ownerEmail: process.env.NEXT_PUBLIC_MY_EMAIL.split(","),
      customerEmail: emailRef.current.value,
      customerName: nameRef.current.value,
      emailSubject: subjectRef.current.value,
      message: massageRef.current.value,
    };

    const formData = new FormData();
    // formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL); // Set the recipient's email here
    // formData.append("subject", subjectRef.current.value);
    // formData.append("text", emailText);
    // formData.append("clientmail", emailRef.current.value); // Set the sender's email here
    formData.append("allDataBundle", JSON.stringify(ContactusDetails));

    try {
      const response = await fetch("/api/contactusEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      const result = await response.json();

      //alert(result.message);
      setIsLoading(false); // Stop loading
      setResponseMessage(result.message); // Set the message from the server

      // setTimeout(() => {
      //   setResponseMessage(false);
      // }, 2000);
    } catch (error) {
      console.error("Error:", error);
      // alert("Failed to send the file.");
      setIsLoading(false); // Stop loading
      setResponseMessage("Failed to send the Message. Please try again.");

      // setTimeout(() => {
      //   setResponseMessage(false);
      // }, 2000);
    }

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (subjectRef.current) subjectRef.current.value = "";
    if (massageRef.current) massageRef.current.value = "";

    setSubmitError("");
  };

  return (
    <>
      {(isLoading || responseMessage) && (
        <div className="w-full h-[90vh] flex items-center justify-center">
          {/* Your form or component elements go here */}
          {isLoading && (
            <Processing
              title={"Email Sending"}
              msg={"Message! Your message is now being send"}
            />
          )}{" "}
          {/* Display a loading message */}
          {!isLoading && responseMessage === "Email Send Successfully" && (
            <SuccessSubmission
              title={"Email Sent"}
              msg={"We recieved your mail"}
              navtext={"Back"}
              img={successEmail}
            />
          )}
          {!isLoading && responseMessage === "Failed to Send Email" && (
            <FailedSubmission navtext={"Back"} msg={"message was not sent"} />
          )}
          {/* Display the response message */}
        </div>
      )}

      {!isLoading && !responseMessage && (
        <div className="xxs:my-10 my-5">
          <ConatactUsBanner />
          <div className="bigmd:-translate-y-28">
            <div className="w-full border-2 border-transparent flex justify-center">
              <div className="w-fit border-2 border-transparent bg-white xxs:p-8 px-6 py-8 rounded-xl shadow-lg relative flex flex-col items-center my-5">
                {/* <div className="absolute top-0 left-0 bottom-0 bg-white right-0 w-full  z-50 border-2 border-red-700  flex justify-center items-center">
          helloi
        </div> */}

                <Title title="Reach to Us" />

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2  xs:w-[400px] xxs:w-[260px]  xxxs:w-[240px] w-[220px]">
                    <div>
                      <div className="xs:text-[18px] text-[16px]">Name</div>
                      <input
                        ref={nameRef}
                        placeholder="John Nash"
                        type="text"
                        className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
                      />
                    </div>

                    <div>
                      <div className="xs:text-[18px] text-[16px]">
                        Your Email
                      </div>
                      <input
                        ref={emailRef}
                        placeholder="johnnash123@gmail.com"
                        type="email"
                        className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
                      />
                    </div>

                    <div>
                      <div className="xs:text-[18px] text-[16px] ">Subject</div>
                      <input
                        ref={subjectRef}
                        placeholder="Inquiry Regarding Tour Details ................."
                        type="text"
                        className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
                      />
                    </div>

                    <div>
                      <div className="xs:text-[18px] text-[16px] ">Message</div>
                      <textarea
                        ref={massageRef}
                        placeholder="I'm writing you regarding ................."
                        className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px] "
                        rows={5}
                      />
                    </div>

                    {submitError && (
                      <div className="w-full bg-errorpink p-2 text-white rounded text-center">
                        {submitError}
                      </div>
                    )}

                    <div className="flex justify-between my-2 gap-x-4">
                      <div className="xs:text-[18px] text-[16px] w-1/2  flex bg-black text-white rounded items-center justify-center p-2">
                        <div>{sumCaptchaValue[0]}</div>
                        <div className="xs:mx-2 mx-1">+</div>
                        <div>{sumCaptchaValue[1]}</div>
                      </div>
                      <input
                        ref={captchaRef}
                        placeholder="Sum"
                        type="number"
                        className="w-1/2 p-2 rounded border-[1px] border-primary outline-none text-[14px]"
                      />
                    </div>

                    <div>
                      <input
                        placeholder="Inquiry Regarding Tour Details and Booking Information"
                        type="submit"
                        className="w-full p-2 mb-5 rounded bg-primary text-black outline-none xs:text-[18px] text-[16px]"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsForm;
