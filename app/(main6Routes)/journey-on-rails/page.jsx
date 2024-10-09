import RailsComp from "./RailsComp";

export const metadata = {
  title:
    "Train Booking in Sri Lanka | Railway Timetable, Seat Booking & Ticket Prices | Online Reservations & Contact Info",
  description:
    "Book Sri Lanka train tickets online easily with our platform. Check the latest Sri Lanka railway time table, seat availability, and ticket prices. Get real-time updates, seat booking options, and direct contact support. Fast and convenient railway booking service for all your travel needs across Sri Lanka",
  keywords:
    "Train booking, Sri Lanka railway timetable, seat booking, ticket prices, online reservations, railway contact, Sri Lanka trains, book train seats",
  icons: {
    icon: ["/train.ico"],
  },
};

const RailPage = () => {
  return (
    <>
      <RailsComp />
    </>
  );
};

export default RailPage;
