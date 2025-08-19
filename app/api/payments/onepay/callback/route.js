import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const POST = auth(async function POST(req) {
  const data = await req.json();

  const status_message = data.status_message;
  const transaction_id = data.transaction_id;

  const additional_data = data.additional_data;
  const decodedString = Buffer.from(additional_data, "base64").toString(
    "utf-8"
  );
  const tourDetails = JSON.parse(decodedString);
  const TourDetails = { ...tourDetails, transactionId: transaction_id };

  try {
    console.log(data, "callback data response");

    if (status_message == "FAILED") {
      return NextResponse.redirect(new URL("/failed", req.url));
    }

    const formData = new FormData();
    formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL.split(",")); // Set the recipient's email here
    formData.append("clientmail", tourDetails.customerEmail); // Set the sender's email here
    formData.append("allDataBundle", JSON.stringify(TourDetails));
    try {
      await fetch("/api/bookingEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      return NextResponse.redirect(new URL("/success", req.url));
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.redirect(new URL("/failed", req.url));
    }

    // if (status_message === "SUCCESS") {
    //   //push mail

    //   return NextResponse.redirect(new URL("/success", req.url));
    // }
  } catch (error) {
    console.error("Error in callback:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error },
      { status: 500 }
    );
  }
});
