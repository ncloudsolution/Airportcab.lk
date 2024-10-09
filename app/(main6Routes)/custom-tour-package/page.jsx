import CustomTourBookingForm from "@/components/CustomTourBookingForm";
import Image from "next/image";
import man3 from "@/public/Others/man3.jpg";

export const metadata = {
  title:
    "Create Your Own Sri Lanka Itinerary: Discover Top Tourist Attractions, Best Tour Packages, Ideal Visiting Times & Prices for an Unforgettable Trip!",
  description:
    "Create your perfect Sri Lanka itinerary! Discover top tourism places, customize your tour package, and find the best times to visit. Explore diverse attractions, from stunning beaches to cultural sites, all while considering affordable prices. Start planning your dream trip to Sri Lanka today!",
  keywords:
    "make own trip, Sri Lanka itinerary, tourism places, tour package, best time to visit Sri Lanka, travel cost, Sri Lanka tours",
  icons: {
    icon: ["/customtour.ico"],
  },
};

const page = () => {
  return (
    <CustomTourBookingForm>
      <div className="flex w-full justify-center items-center">
        <div className="flex lg:w-[800px] sm:w-[600px] bxs:w-[450px] w-full mt-[50px] mb-[10px] px-[30px]">
          <div className="flex flex-col w-full">
            <div className="bxs:text-[40px] text-[28px] font-semibold lg:text-left text-center">
              Plan Your Own Trip
            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center  w-full ">
              <div className="lg:w-[300px] w-full text-justify">
                Experience the beauty of Sri Lanka with our bespoke travel
                packages, crafted to showcase the most captivating destinations
                the island has to offer. Our dedicated team of experts is here
                to guide you through every step of the planning process,
                ensuring you have an unforgettable adventure. Let us help you
                create memories that will last a lifetime
              </div>
              <Image src={man3} alt="" className="w-[350px] lg:mt-0 mt-5 " />
            </div>
          </div>
        </div>
      </div>
    </CustomTourBookingForm>
  );
};

export default page;
