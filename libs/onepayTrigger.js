"use client";

import { BaseUrl } from "@/constant";

export const handleOnePayPayment = async ({
  orderReference,
  amount,
  currency,
  customerData,
}) => {
  try {
    // Request secure hash from the backend
    const response = await fetch("/api/payments/onepay/hash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency,
      }),
    });

    const { hash, appId, appToken } = await response.json();

    const paymentData = {
      currency: currency,
      amount: amount,
      app_id: appId,
      reference: orderReference,
      customer_first_name: customerData.customer_first_name,
      customer_last_name: customerData.customer_last_name,
      customer_phone_number: customerData.customer_phone_number,
      customer_email: customerData.customer_email,
      transaction_redirect_url: `${BaseUrl}`,
      hash: hash,
      additional_data: `${customerData.paymentType},${amount}`,
    };

    //triger the ipg api
    //  const ipgResponse = await axios.post("https://api.onepay.lk/v3/checkout/link/", paymentData, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization:appToken,
    //       },
    //       timeout: 10000,
    //     });

    const ipgResponse = await fetch("https://api.onepay.lk/v3/checkout/link/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: appToken,
      },
      body: JSON.stringify(paymentData),
    });

    const responseJson = await ipgResponse.json();
    //destructring and assertation
    const {
      ipg_transaction_id: transactionId,
      gateway: { redirect_url: gatewayUrl },
    } = responseJson.data;

    console.log(transactionId, "transid");
    console.log(gatewayUrl, "gatewayurl");

    return { transactionId, gatewayUrl };

    // // Create the iframe container if not exists
    // let iframeContainer = document.querySelector("#iframe-container");
    // if (!iframeContainer) {
    //   iframeContainer = document.createElement("div");
    //   iframeContainer.id = "iframe-container";
    //   document.body.appendChild(iframeContainer);
    // }

    // // Clear any previous iframe if needed
    // iframeContainer.innerHTML = "";

    // // Create the iframe
    // const iframe = document.createElement("iframe");
    // iframe.src = gatewayUrl;
    // iframe.width = "100%";
    // iframe.height = "100%";
    // iframe.style.position = "absolute";
    // iframe.style.top = "0";
    // iframe.allow = "payment"; // optional depending on OnePay's requirements

    // // Append the iframe to the container
    // iframeContainer.appendChild(iframe);
  } catch (error) {
    console.error("Error initializing OnePay:", error);
    return { transactionId: "", gatewayUrl: "" };
  }
};
