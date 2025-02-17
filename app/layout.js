import { Inter } from "next/font/google";
import "./globals.css";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import NavBar from "@/components/Navbar";

import TourContextProvider from "../context/TourContextProvider";
import UpperFooter from "@/components/UpperFooter";

import Script from "next/script";
import FoloatingActionBtn from "@/components/standalone/FoloatingActionBtn";
import CallBtn from "@/components/standalone/CallBtn";
import NewNavBar from "@/components/v2/NewNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute:
      "Airport Taxi | Best Price & Contact for BIA Transfers - Sri Lanka",
    default: "Airportcab.lk",
    template: "%s | Airportcab.lk",
  },
  description:
    "Affordable Sri Lanka airport taxi services from Katunayake to Colombo. Check BIA taxi prices, book your airport transfer with ease. Call our reliable Katunayake airport taxi service for the best rates. Trusted Colombo airport taxi contact number for fast, convenient airport transfers",
  keywords:
    "Srilanka airport taxi price list Colombo, Best airport taxi Srilanka, srilanka airport taxi price per km, cheap airport taxi,  bandaranaike international airport, airport taxi service contact number, colombo airport taxi service, katunayake airport airport taxi, taxi booking, airport taxi online booking, book airport taxi, taxi transfers, taxi hire, airport to hotel taxi, airport taxi fare, airport taxi quote, online taxi booking, taxi service, hotel shuttle,taxi, car taxi ",
  icons: { icon: ["/favicon.ico"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16563747465"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16563747465');
        `}
        </Script>
        <Script
          id="google-conversion"
          dangerouslySetInnerHTML={{
            __html: `
      gtag('event', 'conversion', {'send_to': 'AW-16563747465/h3caCMDywbIZEIn1mto9'});
    `,
          }}
        />
        <NewNavBar />
        <TourContextProvider>
          {/* <NavBar /> */}

          <main>{children}</main>
          <CallBtn />
          <FoloatingActionBtn />

          <UpperFooter />
          <AbsoluteFooter />
        </TourContextProvider>
      </body>
    </html>
  );
}
