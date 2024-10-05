import P2PComp from "./P2PComp";

export const metadata = {
  title: "Taxi Service",
  description:
    "Reliable taxi service for hassle-free travel. Book seamless rides with professional drivers. Offering airport transfers, hotel pickups, and city-wide transport. Affordable rates, easy booking, and 24/7 availability. Safe, timely, and stress-free travel.",
  keywords:
    "Airport to city transfer, Point-to-point transfer services, Private point-to-point transfers, Door-to-door transportation, Luxury point-to-point transfers, Private car transfers",
  icons: {
    icon: ["/pointtopoint.ico"],
  },
};

const PtoP = () => {
  return (
    <>
      <P2PComp />
    </>
  );
};

export default PtoP;
