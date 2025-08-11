import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { BaseUrl } from "@/constants";

export const POST = auth(async function POST(req) {
  const data = await req.json();

  const status_message = data.status_message;
  const additional_data = data.additional_data;
  const transaction_id = data.transaction_id;

  try {
    console.log(data, "callback data response");

    const additionalDataArray = additional_data.split(",");
    const paymentType = additionalDataArray[0];
    const payementAmount = additionalDataArray[1];

    console.log(additionalDataArray, "additional data");

    if (status_message == "FAILED") {
      return NextResponse.json({ message: "Payment Filed" }, { status: 400 });
    }

    if (status_message === "SUCCESS") {
      const modifiedData = {
        email: email,
        mobile: mobile,
        collections: {
          productCode: productCode,
          sellingPrice: sellingPrice,
          date: new Date().toISOString(),
          transactionType: "online",
          transactionReference: transaction_id,
          transactionVerification: true,
        },
      };

      // Call the /api/sales endpoint with the new payload
      const salesResponse = await fetch(`${BaseUrl}api/sales`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      });

      console.log("check point 1");

      if (!salesResponse.ok) {
        return NextResponse.json(
          { message: "Failed to send data to /api/sales" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: "Transaction verification updated successfully!",
          extraMsg: "Asset send to the email",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error in callback:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error },
      { status: 500 }
    );
  }
});
