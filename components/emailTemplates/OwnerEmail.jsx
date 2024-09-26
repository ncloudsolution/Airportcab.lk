import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const OwnerEmail = ({ tourDetails }) => {
  return (
    <Html>
      <Head />
      <Preview>Order Details</Preview>
      <Body style={main}>
        <Container style={{ maxWidth: "680px", backgroundColor: "#FDFDFD" }}>
          {/* <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section> */}

          <Section style={content}>
            {/* <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row> */}

            <Row
              style={{
                ...boxInfos,
                paddingBottom: "0",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "20px",
                    borderBottom: "4px solid #eab308",
                  }}
                >
                  New Order Received
                </Heading>
                {/* <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  We noticed a recent login to your Yelp account.
                </Heading> */}
                {/**IDENTITY DETAILS**/}
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Customer Name : </b>
                    {tourDetails.customerName}
                  </Text>
                  <Text style={paragraph}>
                    <b>Customer Email : </b>
                    {tourDetails.customerEmail}
                  </Text>
                  <Text style={paragraph}>
                    <b>Mobile No : </b>
                    {tourDetails.customerMobileNo}
                  </Text>
                  <Text style={paragraph}>
                    <b>Whatsapp No : </b>
                    {tourDetails.customerWhatsappMobileNo}
                  </Text>
                  <Text style={paragraph}>
                    <b>NIC / Passport No : </b>
                    {tourDetails.customerNicPassport}
                  </Text>
                </Section>

                {/**FLIGHT DETAILS**/}
                {tourDetails.tourType === "airport" && (
                  <Section style={section}>
                    <Text style={paragraph}>
                      <b>Flight No : </b>
                      {tourDetails.customerFlightNo}
                    </Text>
                    <Text style={paragraph}>
                      <b>
                        {tourDetails.isPickup
                          ? "Arrival Date :"
                          : "Depart Date :"}
                      </b>
                      {tourDetails.arrivalDate}
                    </Text>
                    <Text style={paragraph}>
                      <b>
                        {tourDetails.isPickup
                          ? "Arrival Time :"
                          : "Depart Time :"}
                      </b>
                      {tourDetails.arrivalTime}
                    </Text>
                    {tourDetails.cusDisplayName != "" && (
                      <Text style={paragraph}>
                        <b>Board Name : </b>
                        {tourDetails.cusDisplayName}
                      </Text>
                    )}
                  </Section>
                )}

                {/**JOURNEY DETAILS**/}
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Origin : </b>
                    {tourDetails.origin}
                  </Text>
                  <Text style={paragraph}>
                    <b>Destination : </b>
                    {tourDetails.destination}
                  </Text>
                  <Text style={paragraph}>
                    <b>Start Date : </b>
                    {tourDetails.startDate}
                  </Text>
                  <Text style={paragraph}>
                    <b>Start Time : </b>
                    {tourDetails.startTime}
                  </Text>
                  <Text style={paragraph}>
                    <b>Return Date : </b>
                    {tourDetails.returnDate}
                  </Text>
                  {tourDetails.returnTime && (
                    <Text style={paragraph}>
                      <b>Return Time : </b>
                      {tourDetails.returnTime}
                    </Text>
                  )}
                  <Text style={paragraph}>
                    <b>Distance : </b>
                    {tourDetails.distance}
                  </Text>
                  <Text style={paragraph}>
                    <b>Duration : </b>
                    {tourDetails.duration}
                  </Text>
                </Section>

                {/**PRICING SECTION**/}
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Selected Vehical : </b>
                    {tourDetails.vehicleType}
                  </Text>
                  <Text style={paragraph}>
                    <b>No.of Passengers : </b>
                    {tourDetails.noOfPassengers}
                  </Text>
                  <Text style={paragraph}>
                    <b>Luggage Count : </b>
                    {tourDetails.customerLuggageCount}
                  </Text>
                  <Text style={paragraph}>
                    <b>Vehical Price: </b>
                    {tourDetails.converedCurrencySymbol}{" "}
                    {tourDetails.convertedPrice}
                  </Text>
                  {tourDetails.boardShow != 0 && (
                    <Text style={paragraph}>
                      <b>Board Show: </b>
                      {tourDetails.converedCurrencySymbol}{" "}
                      {(
                        tourDetails.boardShow * tourDetails.conversionRate
                      ).toFixed(2)}
                    </Text>
                  )}

                  {tourDetails.highwayExit &&
                    tourDetails.highwayExit !== "None" &&
                    tourDetails.highwayCharge !== "No any Charge" && (
                      <Text style={paragraph}>
                        <b>Highway Charges: </b>
                        {tourDetails.converedCurrencySymbol}{" "}
                        {(
                          tourDetails.highwayCharge * tourDetails.conversionRate
                        ).toFixed(2)}
                      </Text>
                    )}

                  {tourDetails.tourType === "airport" &&
                    tourDetails.highwayExit !== "None" && (
                      <Text style={paragraph}>
                        <b>Higway Exit : </b>
                        {tourDetails.highwayExit}
                      </Text>
                    )}
                </Section>

                {/**TOTAL SECTION**/}
                <Section style={section}>
                  {/* <Text style={paragraph}>
                    <b>Total Price : </b>
                    {tourDetails.converedCurrencySymbol} {""}
                    {tourDetails.totalPrice}
                  </Text> */}
                  <div
                    style={{
                      ...paragraph,
                      marginTop: 5,
                      display: "flex",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#eab308",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <b>Total Price in {tourDetails.currencyType} : </b>
                      <span>
                        {tourDetails.converedCurrencySymbol} {""}
                        {tourDetails.totalPrice}
                      </span>{" "}
                    </span>
                  </div>
                  <div
                    style={{
                      ...paragraph,
                      marginTop: 5,
                      display: "flex",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#eab308",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <b>Total Price in LKR : </b>
                      <span>{`Rs. ${tourDetails.totalPriceInLkr}`}</span>{" "}
                    </span>
                  </div>
                </Section>

                {/* <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                  {tourDetails.converedCurrencySymbol}
                </Text> */}

                <Section style={section}>
                  <Text
                    style={{
                      ...paragraph,
                      fontSize: 18,
                      color: "rgb(0,0,0, 0.5)",
                      borderTop: "4px solid #eab308",
                      padding: "20px 0px",
                    }}
                  >
                    Connect The Customer
                  </Text>

                  {/* <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please
                  see our support page.
                </Text> */}

                  <Row style={{ paddingTop: "0" }}>
                    {/* <Column style={containerButton} colSpan={2}> */}
                    <Button
                      style={{ ...button }}
                      href={`mailto:${tourDetails.customerEmail}`}
                    >
                      Email
                    </Button>
                    <Button
                      style={{
                        ...button,
                        backgroundColor: "#075e54",
                        margin: "0px 0px 0px 5px",
                      }}
                      href={`https://wa.me/${tourDetails.customerWhatsappMobileNo}`}
                    >
                      WhatsApp
                    </Button>

                    {/* </Column> */}
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>

          {/* <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/static/yelp-footer.png`}
            />
          </Section> */}

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              paddingBottom: 10,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | 118/ 5 st Joseph street, Grandpass, Colombo 14, Sri Lanaka
            | www.tourbookingsrilanka.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OwnerEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const section = {
  marginBottom: 20,
};

const paragraph = {
  fontSize: 14,
  margin: 0,
  color: "black",
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
  width: "100%",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
