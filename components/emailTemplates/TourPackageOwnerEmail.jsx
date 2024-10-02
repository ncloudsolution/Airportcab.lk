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

const TourPackageOwnerEmail = ({ tourPackage }) => {
  return (
    <Html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <Preview>Confirmation Email</Preview>
      <Body style={main}>
        <Container style={{ padding: "10px 20px" }}>
          <Container style={container}>
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
                  padding: "40px 40px",
                  paddingBottom: "20px",
                  width: "680px",
                  maxwidth: "100%",
                  margin: "0 auto",
                }}
              >
                <Column>
                  <Heading
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingBottom: "20px",
                      borderBottom: "4px solid #eab308",
                      color: "black",
                      width: "100%",
                      margin: "10px auto",
                      marginBottom: 40,
                    }}
                  >
                    New Tour Package Request
                  </Heading>

                  <Row style={{ marginTop: 20, width: "680px" }}>
                    <Column style={{ paddingRight: 0, width: 400 }}>
                      {/**JOURNEY DETAILS**/}
                      {/**msg**/}
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
                    </Column>
                    <Column style={{ paddingRight: 0, width: 280 }}>
                      {/**JOURNEY DETAILS**/}
                      {/**msg**/}
                      <Section style={section}>
                        <Row>
                          <Img
                            style={{ paddingBottom: 10, margin: "0 auto" }}
                            height={450}
                            src={"https://i.ibb.co/W3qdHpp/lady.png"}
                          />
                        </Row>
                      </Section>
                    </Column>
                  </Row>

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
                        href={`mailto:${tourPackage.cusEmail}`}
                      >
                        Email
                      </Button>
                      <Button
                        style={{
                          ...button,
                          backgroundColor: "#075e54",
                          margin: "0px 0px 0px 5px",
                        }}
                        href={`https://wa.me/${tourPackage.cusWhatsappNo}`}
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

export default TourPackageOwnerEmail;

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
