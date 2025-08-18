import React from "react";

const PrivacyPolicy = () => {
  const listArray = [
    {
      heading: "Personal Identification Information",
      description:
        "Such as your name, email address, and phone number — provided by you during booking.",
    },
    {
      heading: "Payment & Billing Information",
      description:
        "Including credit/debit card details and billing addresses — processed securely via trusted third-party payment gateways. We do not store your card details.",
    },
    {
      heading: "Browsing Information",
      description:
        "Such as your IP address, browser type, device details, and pages visited — collected automatically via cookies and analytics tools. We do not store your card details.",
    },
  ];

  const weUseArray = [
    "To process and fulfill your orders, including payments.",
    "To contact you regarding your order, offer support, and respond to your inquiries.",
    "To improve our website, services, and customer experience through analytics.",
    "To detect, prevent, and address fraud or unauthorized activities on our site.",
  ];

  const sharingArray = [
    {
      heading: "Trusted Service Providers",
      description:
        "Such as payment processors, delivery companies, and analytics services — strictly for order fulfillment and website functionality. These partners are obligated to protect your data.",
    },
    {
      heading: "Legal Compliance",
      description:
        "If required by law or in response to a legal request, we may disclose your information to the relevant authorities.",
    },
  ];

  return (
    <div className="pt-[60px] h-full">
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="text-[30px] font-semibold py-5">Privacy Policy</div>
        <div className="xl:w-[65%] md:w-[80%] w-[90%] flex flex-col gap-10">
          <div>
            At airportcab.lk, we are committed to protecting the privacy and
            security of our customers’ personal information. This Privacy Policy
            outlines how we collect, use, and safeguard your data when you visit
            or make a purchase on our website. By using our site, you agree to
            the practices described in this policy.
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] font-semibold gap-2">
              Information We Collect
            </div>
            <div className="mb-5">
              When you visit airportcab.lk, we may collect the following types
              of information:
            </div>
            <div className="flex flex-col gap-2">
              {listArray.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <ul className="list-disc font-semibold">
                    <li>{item.heading}</li>
                  </ul>
                  <div>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] font-semibold gap-2">
              How We Use Your Information
            </div>
            <div className="mb-5">
              We use your data for the following purposes:
            </div>
            <div className="flex flex-col gap-2">
              {weUseArray.map((item, index) => (
                <ul key={index} className="list-disc">
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[20px] font-semibold gap-2">
              Sharing of Information
            </div>
            <div className="mb-5">
              We respect your privacy and do not sell or rent your personal
              data. However, we may share your information in the following
              situations:
            </div>
            <div className="flex flex-col gap-2">
              {sharingArray.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <ul className="list-disc font-semibold">
                    <li>{item.heading}</li>
                  </ul>
                  <div>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[20px] font-semibold gap-2">Data Security</div>
            <div>
              We implement industry-standard security practices (such as SSL
              encryption and secure servers) to protect your personal
              information. While we take all reasonable steps to secure your
              data, no online transmission is ever fully secure — so we cannot
              guarantee absolute protection.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[20px] font-semibold gap-2">
              Cookies and Tracking Technologies
            </div>
            <div>
              We use cookies and similar tools to enhance your browsing
              experience, track performance, and remember your preferences. You
              can disable cookies in your browser settings, but doing so may
              limit functionality on our website.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[20px] font-semibold gap-2">
              Changes to This Policy
            </div>
            <div>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised “Last Updated” date. We
              encourage you to check this page periodically to stay informed.
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10">
            <div className="text-[20px] font-semibold gap-2">Contact Us</div>
            <div>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us via
              the support details provided on our website:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
