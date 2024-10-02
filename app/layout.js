import { Inter } from "next/font/google";
import "./globals.css";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import NavBar from "@/components/Navbar";

import TourContextProvider from "../context/TourContextProvider";
import UpperFooter from "@/components/UpperFooter";

import Script from "next/script";
import FoloatingActionBtn from "@/components/standalone/FoloatingActionBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    // absolute:
    //   "Tour Booking Sri Lanka | Airport Transfers, Tour Packages, Day Tours, Train Tickets, Point-to-Point & Plan Your Trip | Best Travel Deals",
    default: "Airportcab.lk",
    template: "%s | Airportcab.lk",
  },
  description:
    "Book your Sri Lanka adventure with ease! Explore top airport transfers, customized tour packages, and day tours. Need train bookings or want to plan your own trip? Find the best deals and services all in one place. Start your journey today with seamless tour booking in Sri Lanka.",
  keywords:
    "Srilanka airport taxi price list, Airport Taxi Srilanka taxi contact Numbers, Katunayake airport taxi service, BIA taxi price, Best airport transfer Colombo, Cab service Colombo, Taxi Service colombo, Colombo airport taxi service, Airport drop taxi, Airport pickup taxi,cab service, taxi service, airport taxi service, cab near me, taxi cab, taxi booking, taxi service near me, book taxi online, cab booking, taxi company, cab service near me, taxi near me, taxi cab near me, taxi company near me, cab company near me, cab company, taxi number, airport transport,",
  icons: { icon: ["/favicon.ico"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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

        <TourContextProvider>
          <div className="  relative  min-h-[100vh]   w-full">
            <NavBar />

            <FoloatingActionBtn />
            <main className="min-h-[23vh] xs:mt-[80px] mt-[60px] px-0">
              {children}
            </main>

            <UpperFooter />
            <AbsoluteFooter />
          </div>
        </TourContextProvider>
      </body>
    </html>
  );
}
