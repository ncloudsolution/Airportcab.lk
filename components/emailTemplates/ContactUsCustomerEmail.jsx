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

export const ContactUsCustomerEmail = ({ ContactusDetails }) => {
  return (
    <Html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <Preview>Confirmation Email</Preview>
      <Body style={main}>
        <Container style={{ padding: "10px 20px" }}>
          <Container style={container}>
            {/* <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section> */}

            <Section>
              <Row style={{ padding: "10px 20px" }}>
                <Column>
                  <Img
                    height={60}
                    // src={"https://i.ibb.co/84NTTCw/bgremovedlogo.png"}
                    // src={"https://i.ibb.co/80wTQm2/cablk.jpg"}
                    src={"https://i.ibb.co/PZ7zsdZc/brand-new-logo2.png"}
                  />
                </Column>
                <Column align="right">
                  <Text style={{ ...paragraph, fontSize: 20 }}>
                    <b>
                      Airportcab<span style={{ color: "#eab308" }}>.lk</span>
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
                  {/* <Heading
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "15px",
                    borderBottom: "4px solid #eab308",
                    color: "black",
                    width: "fit-content",
                    margin: "10px auto",
                  }}
                >
                  Thank You
                </Heading> */}

                  <Row>
                    <Img
                      style={{ paddingBottom: 10, margin: "0 auto" }}
                      height={400}
                      src={"https://i.ibb.co/9WVCmr8/thankyou-Email.jpg"}
                    />
                  </Row>

                  <Text
                    style={{
                      ...paragraph,
                      textAlign: "left",
                      fontSize: 16,
                      marginTop: 20,
                      marginBottom: 0,
                    }}
                  >
                    Hi <b>{ContactusDetails.customerName},</b>
                  </Text>

                  <Text
                    style={{
                      ...paragraph,
                      textAlign: "left",
                      fontSize: 16,
                      marginTop: 20,
                      marginBottom: 0,
                    }}
                  >
                    Thank you for contacting us. We have received your message
                    regarding <b>{ContactusDetails.emailSubject}</b> and
                    appreciate you reaching out. One of our agents will get in
                    touch with you as soon as possible to assist you further. If
                    you have any additional questions or need immediate
                    assistance, please feel free to reach out again.
                  </Text>

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
                            src={"https://i.ibb.co/XxJX66p5/door.jpg"}
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
                            src={"https://i.ibb.co/8nYFQxmR/door3.png"}
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
                            src={"https://i.ibb.co/27r5qLsx/train.jpg"}
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
                      Connect The Airportcab.lk
                    </Heading>

                    {/* <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please
                  see our support page.
                </Text> */}

                    <Row style={{ width: "680px", maxWidth: "100%" }}>
                      <Column align="center">
                        <Button
                          style={{ ...button, margin: "0px 5px 0px 0px" }}
                          href={`mailto:info@airportcab.lk`}
                        >
                          Email
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#075e54",
                            margin: "0px 5px 0px 5px",
                          }}
                          href={`https://wa.me/+94703199556`}
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
                          href={`https://www.youtube.com/@airportcabsrilanka`}
                        >
                          Youtube
                        </Button>
                        <Button
                          style={{
                            ...button,
                            backgroundColor: "#1877F2",
                            margin: "0px 0px 0px 5px",
                          }}
                          href={`https://facebook.com/airportcab.lk`}
                        >
                          Facebook
                        </Button>
                      </Column>
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
                ...paragraph,
                textAlign: "center",
                paddingTop: 10,
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | No : 262/5A Church Rd, Liyanagemulla, Seeduwa, Sri Lanaka
              | www.airportcab.lk
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsCustomerEmail;

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

const boxInfos = {
  padding: "20px",
};
