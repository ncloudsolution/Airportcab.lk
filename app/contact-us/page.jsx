import ContactUsForm from "@/components/ContactUsForm";
import dynamic from "next/dynamic";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "We value your inquiries and are here to assist you with all your travel needs in Sri Lanka. Whether you have questions about our airport transfers, point-to-point transportation, day trips, tour packages, rail journeys, or custom trips, our dedicated team is ready to help. Please feel free to reach out to us anytime. Our friendly and professional staff are available 24/7 to provide you with detailed information, address your concerns, and ensure your travel experience is exceptional. Contact us today and let us help make your journey through Sri Lanka seamless and memorable",
  icons: {
    icon: ["/contactus.ico"],
  },
};

const Contact = () => {
  return (
    <>
      <ContactUsForm />
    </>
  );
};

export default Contact;
