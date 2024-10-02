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

export const DayTripOwner = ({ dayTripDetails }) => {
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
                    borderBottom: "4px dashed black",
                  }}
                >
                  New Day Trip Received
                </Heading>

                {/**JOURNEY DETAILS**/}
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Selected Day Trip : </b>
                    {dayTripDetails.selectedTrip}
                  </Text>
                  <Text style={paragraph}>
                    <b>Pickup Date : </b>
                    {dayTripDetails.pickUpDate}
                  </Text>
                  <Text style={paragraph}>
                    <b>Pickup Time : </b>
                    {dayTripDetails.timeSlot}
                  </Text>
                </Section>

                {/**customer details**/}
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Customer Name : </b>
                    {dayTripDetails.cusName}
                  </Text>
                  <Text style={paragraph}>
                    <b>Customer Email : </b>
                    {dayTripDetails.cusEmail}
                  </Text>
                  <Text style={paragraph}>
                    <b>Mobile No : </b>
                    {dayTripDetails.cusMobileNo}
                  </Text>
                  <Text style={paragraph}>
                    <b>Whatsapp No : </b>
                    {dayTripDetails.cusWhatsappNo}
                  </Text>
                  <Text style={paragraph}>
                    <b>NIC / Passport No : </b>
                    {dayTripDetails.CusNicPassport}
                  </Text>
                  <Text style={paragraph}>
                    <b>No of Adults : </b>
                    {dayTripDetails.noOfAdults}
                  </Text>
                  <Text style={paragraph}>
                    <b>No of Kids : </b>
                    {dayTripDetails.noOfKids}
                  </Text>
                </Section>

                {/**TOTAL SECTION**/}
                <Section style={section}>
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
                        backgroundColor: "black",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      <b>
                        Total Price in {dayTripDetails.selectedCurrencyType} :{" "}
                      </b>
                      <span>
                        {dayTripDetails.selectedCurrencySymbol} {""}
                        {dayTripDetails.totalPriceInSelectedCurrency}
                      </span>{" "}
                    </span>
                  </div>
                  {dayTripDetails.selectedCurrencyType != "LKR" && (
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
                          backgroundColor: "black",
                          padding: "10px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        <b>Total Price in LKR : </b>
                        <span>{`Rs ${dayTripDetails.totalPriceInLKR}`}</span>{" "}
                      </span>
                    </div>
                  )}
                </Section>

                <Section style={section}>
                  <Text
                    style={{
                      ...paragraph,
                      fontSize: 18,
                      color: "rgb(0,0,0, 0.5)",
                      borderTop: "4px dashed black",
                      padding: "20px 0px",
                    }}
                  >
                    Connect The Customer
                  </Text>

                  <Row style={{ paddingTop: "0" }}>
                    {/* <Column style={containerButton} colSpan={2}> */}
                    <Button
                      style={{ ...button }}
                      href={`mailto:${dayTripDetails.cusEmail}`}
                    >
                      Email
                    </Button>
                    <Button
                      style={{
                        ...button,
                        backgroundColor: "#075e54",
                        margin: "0px 0px 0px 5px",
                      }}
                      href={`https://wa.me/${dayTripDetails.cusWhatsappNo}`}
                    >
                      WhatsApp
                    </Button>

                    {/* </Column> */}
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>

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

export default DayTripOwner;

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
