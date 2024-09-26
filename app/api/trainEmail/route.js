import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import TrainOwnerEmail from "@/components/emailTemplates/TrainOwnerEmail";
import TrainCustomerEmail from "@/components/emailTemplates/TrainCustomerEmail";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    const to = formData.get("to");
    const clientmail = formData.get("clientmail");
    const trainBookingDetails = JSON.parse(formData.get("allDataBundle"));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    const newCompHtmlforOwner = render(
      <TrainOwnerEmail trainBookingDetails={trainBookingDetails} />
    );
    const newCompHtmlforCustomer = render(
      <TrainCustomerEmail trainBookingDetails={trainBookingDetails} />
    );

    const mailOptionsTo = {
      from: `"Airportcab.lk" <${process.env.MAIL_USERNAME}>`,
      to: to,
      subject: "New Train Tour Request",

      html: newCompHtmlforOwner,
    };

    const mailOptionsClient = {
      from: `"Airportcab.lk" <${process.env.MAIL_USERNAME}>`,
      to: clientmail,
      subject: "Here's your new train ride from Airportcab.lk",
      html: newCompHtmlforCustomer, // Assuming you want to send the same text; adjust if different
    };

    // Send the email to the main recipient
    await transporter.sendMail(mailOptionsTo);
    // Send the email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json(
      { message: "Order completed Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json(
      { message: "Failed to Send Email", error: error.message },
      { status: 500 }
    );
  }
}
