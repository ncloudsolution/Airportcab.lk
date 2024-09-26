import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
} from "@react-email/components";

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  margin: 0,
  padding: 0,
};

const containerStyle = {
  width: "680px",
  backgroundColor: "#eab308",
  borderRadius: "10px",
  margin: "0 auto",
  padding: "0px",
  boxSizing: "border-box",
};

const content = {
  borderBottom: "2px solid black",
  borderRadius: "3px",
  overflow: "hidden",
  width: 680,
};

const boxInfos = {
  padding: "20px",
};

const section = {
  width: 680,
  marginBottom: "20px",
};

const paragraph = {
  width: 680,
  fontSize: "15px",
  margin: 0,
  color: "black",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: "3px",
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
  textDecoration: "none",
};

const ContactUsOwnerEmail = ({ ContactusDetails }) => {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>Customer Message</Preview>
      <Body style={main}>
        <Container style={containerStyle}>
          <Section style={content}>
            <Row
              style={{
                ...boxInfos,
                paddingBottom: "0",
                margin: "0 auto",
                width: 680,
              }}
            >
              <Column align="center">
                <Heading
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "10px",
                    borderBottom: "3px solid black",
                    width: "fit-content",
                    marginBottom: "30px",
                  }}
                >
                  New Message Received
                </Heading>
                <Section style={section}>
                  <Text style={paragraph}>
                    <b>Customer Name: </b>
                    {ContactusDetails.customerName}
                  </Text>
                  <Text style={paragraph}>
                    <b>Customer Email: </b>
                    {ContactusDetails.customerEmail}
                  </Text>
                  <Text
                    style={{
                      ...paragraph,
                      textAlign: "center",
                      fontSize: "20px",
                      margin: "40px 0px 30px 0px",
                    }}
                  >
                    <b>{ContactusDetails.emailSubject}</b>
                  </Text>
                  <Text style={{ ...paragraph, marginBottom: "0" }}>
                    {ContactusDetails.message}
                  </Text>
                </Section>
                <Section style={section} align="left">
                  <Text
                    style={{
                      ...paragraph,
                      fontSize: "18px",
                      color: "black",
                      marginBottom: 10,
                    }}
                  >
                    <b>Connect The Customer</b>
                  </Text>
                  <Button
                    style={button}
                    href={`mailto:${ContactusDetails.customerEmail}`}
                  >
                    Email
                  </Button>
                </Section>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: "12px",
              paddingBottom: "0px",
              color: "rgb(0,0,0, 0.7)",
              width: 680,
            }}
          >
            © 2024 | 118/ 5 St Joseph Street, Grandpass, Colombo 14, Sri Lanka |
            www.tourbookingsrilanka.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsOwnerEmail;
