import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Img,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
} from "@react-email/components";

const TourPackageCustomerEmail = ({ tourPackage }) => {
  return (
    <Html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <Preview>Confirmation Email</Preview>
      <Body style={main}>
        <Container style={{ padding: "10px 20px" }}>
          <Container style={container}>
            <Section>
              <Row style={{ padding: "10px 20px" }}>
                <Column>
                  <Img
                    height={60}
                    // src={"https://i.ibb.co/84NTTCw/bgremovedlogo.png"}
                    src={"https://i.ibb.co/WfXK6bZ/tblogo.png"}
                  />
                </Column>
                <Column align="right">
                  <Text style={{ ...paragraph, fontSize: 20 }}>
                    <b>
                      Tour <span style={{ color: "#eab308" }}>Booking</span> Sri
                      Lanka
                    </b>
                  </Text>
                </Column>
              </Row>
            </Section>

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
                  width: "680px",
                  maxwidth: "100%",
                  margin: "0 auto",
                }}
              >
                <Column>
                  <Row>
                    <Img
                      style={{ paddingBottom: 10, margin: "0 auto" }}
                      height={200}
                      src={"https://i.ibb.co/wNnSdp6/thankyou.jpg"}
                    />
                  </Row>

                  <Text
                    style={{
                      ...paragraph,
                      textAlign: "center",
                      fontSize: 16,
                      marginBottom: 30,
                    }}
                  >
                    For choosing Tour Booking Sri Lanka As Your Travel Partner
                  </Text>

                  <Heading
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingBottom: "15px",
                      borderBottom: "4px solid #eab308",
                      color: "black",
                      width: "fit-content",
                      margin: "10px auto",
                      marginBottom: 30,
                    }}
                  >
                    Here&apos;s your tour package details
                  </Heading>

                  <Row style={{ marginTop: 20, width: "680px" }}>
                    <Column
                      style={{
                        ...section,
                        width: 380,
                        margin: 0,
                      }}
                    >
                      {/**IDENTITY DETAILS**/}
                      <Section style={section}>
                        <Text style={paragraph}>
                          <b>Customer Name : </b>
                          {tourPackage.cusName}
                        </Text>
                        <Text style={paragraph}>
                          <b>Customer Email : </b>
                          {tourPackage.cusEmail}
                        </Text>
                        <Text style={paragraph}>
                          <b>Mobile No : </b>
                          {tourPackage.cusMobileNo}
                        </Text>
                        <Text style={paragraph}>
                          <b>Whatsapp No : </b>
                          {tourPackage.cusWhatsappNo}
                        </Text>
                        <Text style={paragraph}>
                          <b>NIC / Passport No : </b>
                          {tourPackage.cusNicPassport}
                        </Text>
                      </Section>

                      {/**JOURNEY DETAILS**/}
                      <Section style={section}>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: 18,
                            marginBottom: 5,
                          }}
                        >
                          <b>Selected Tour: </b>
                        </Text>

                        <Text
                          style={{
                            ...paragraph,
                            fontSize: 16,
                          }}
                        >
                          {tourPackage.selectedTrip}
                        </Text>
                      </Section>

                      <Section style={section}>
                        <Text style={paragraph}>
                          <b>Pickup Date : </b>
                          {tourPackage.pickUpDate}
                        </Text>
                        <Text style={paragraph}>
                          <b>People Count : </b>
                          {tourPackage.noOfAdults > 1
                            ? `${tourPackage.noOfAdults} adults`
                            : "1 adult"}{" "}
                          {tourPackage.noOfKids === 0 && "and no kids. "}{" "}
                          {tourPackage.noOfKids === 1 && "and 1 kid. "}{" "}
                          {tourPackage.noOfKids > 1 &&
                            `and ${tourPackage.noOfKids} kids. `}
                        </Text>
                        <Text style={paragraph}>
                          <b>Meal Type : </b>
                          {tourPackage.selectedMealOption}
                        </Text>

                        <Text style={paragraph}>
                          <b>Requested Vehical : </b>
                          {tourPackage.selectedVehical}
                        </Text>
                      </Section>

                      <Section style={section}>
                        <Text style={paragraph}>
                          Thank you for your interest in our tour packages. Our
                          agent will contact you shortly to discuss your tour in
                          detail. During the conversation, we can adjust your
                          plans to suit your budget and preferences. We look
                          forward to helping you plan the perfect trip!
                        </Text>
                        <b>
                          <Text style={{ ...paragraph, marginTop: 10 }}>
                            Best regards,
                          </Text>
                          <Text style={paragraph}>Tour Booking Sri Lanka.</Text>
                        </b>
                      </Section>
                    </Column>
                  </Row>

                  <Section style={section}>
                    <Heading
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingBottom: "15px",
                        borderBottom: "4px solid #eab308",
                        color: "black",
                        width: "fit-content",
                        margin: "30px auto",
                      }}
                    >
                      Things May you like
                    </Heading>

                    <Row>
                      {/**airport**/}
                      <Column
                        style={{
                          width: 220,
                          padding: "0px 5px",
                        }}
                      >
                        <div
                          style={{
                            height: 200,

                            borderRadius: 8,
                            overflow: "hidden",
                          }}
                        >
                          <Img
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            src={"https://i.ibb.co/ydtmqTh/airport.jpg"}
                          />
                        </div>
                        <Text
                          style={{
                            fontSize: "16px",
                            textAlign: "center",
                            ...paragraph,
                            marginTop: 10,
                          }}
                        >
                          <b>Airport Transfer</b>
                        </Text>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: "12px",
                            textAlign: "center",
                            color: "rgb(0,0,0, 0.5)",
                          }}
                        >
                          Experience precise, punctual airport transfers with
                          our focus on safety and comfort. Trust us for
                          accurate, timely travel arrangements
                        </Text>
                      </Column>

                      <Column
                        style={{
                          width: 220,
                          padding: "0px 5px",
                        }}
                      >
                        <div
                          style={{
                            height: 200,

                            borderRadius: 8,
                            overflow: "hidden",
                          }}
                        >
                          <Img
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            src={"https://i.ibb.co/4d4sChq/ptop.png"}
                          />
                        </div>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: "16px",
                            textAlign: "center",

                            marginTop: 10,
                          }}
                        >
                          <b>Point to Point Transfer</b>
                        </Text>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: "12px",
                            textAlign: "center",

                            color: "rgb(0,0,0, 0.5)",
                          }}
                        >
                          Reliable transport service ensuring seamless travel
                          experiences, prioritizing safety and comfort. Your
                          trusted choice for transfers
                        </Text>
                      </Column>

                      <Column
                        style={{
                          width: 220,
                          padding: "0px 5px",
                        }}
                      >
                        <div
                          style={{
                            height: 200,

                            borderRadius: 8,
                            overflow: "hidden",
                          }}
                        >
                          <Img
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            src={"https://i.ibb.co/VVZHbfX/train.jpg"}
                          />
                        </div>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: "16px",
                            textAlign: "center",
                            marginTop: 10,
                          }}
                        >
                          <b>Journey On Rails</b>
                        </Text>
                        <Text
                          style={{
                            ...paragraph,
                            fontSize: "12px",
                            textAlign: "center",

                            color: "rgb(0,0,0, 0.5)",
                          }}
                        >
                          Reliable train journey bookings ensuring timely
                          departures and arrivals, with a focus on comfort and
                          safety. Trust us for seamless travel.
                        </Text>
                      </Column>
                    </Row>
                  </Section>

                  <Section style={section}>
                    <Heading
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingBottom: "15px",
                        borderBottom: "4px solid #eab308",
                        color: "black",
                        width: "fit-content",
                        margin: "20px auto",
                      }}
                    >
                      Connect The Tour Booking Sri Lanka
                    </Heading>

                    <Row style={{ width: "680px", maxWidth: "100%" }}>
                      <Column align="center">
                        <Button
                          style={{ ...button, margin: "0px 5px 0px 0px" }}
                          href={`mailto:easycabandtours@gmail.com`}
                        >
                          Email
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#075e54",
                            margin: "0px 5px 0px 5px",
                          }}
                          href={`https://wa.me/+94712100500`}
                        >
                          WhatsApp
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#24A1DE",
                            margin: "0px 5px 0px 5px",
                          }}
                          href={`https://t.me/Tourbookingsrilanka`}
                        >
                          Telegram
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#CD201F",
                            margin: "0px 5px 0px 5px",
                          }}
                          href={`https://youtu.be/QXXXz8MipHA`}
                        >
                          Youtube
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#1877F2",
                            margin: "0px 0px 0px 5px",
                          }}
                          href={`https://web.facebook.com/easycabandtours?mibextid=ZbWKwL&_rdc=1&_rdr`}
                        >
                          Facebook
                        </Button>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>

            <Text
              style={{
                ...paragraph,
                textAlign: "center",
                paddingTop: 10,
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | 118/ 5 st Joseph street, Grandpass, Colombo 14, Sri
              Lanaka | www.tourbookingsrilanka.com
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default TourPackageCustomerEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  margin: "0",
};

const container = {
  width: "648px",
  maxWidth: "100%",
  position: "relative",
};

const section = {
  marginBottom: 20,
};

const paragraph = {
  fontSize: 14,
  margin: 0,
  color: "black",
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
