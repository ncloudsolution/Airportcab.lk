import CustomTourBookingForm from "@/components/CustomTourBookingForm";
import Image from "next/image";
import man3 from "@/public/Others/man3.jpg";

export const metadata = {
  title:
    "Plan Your Sri Lanka Trip: Customize Tours, Transfers & More | Make My Tour | Best Travel Packages & Airport Transfers",
  description:
    "Plan your own trip to Sri Lanka with our expert guide. Discover top attractions, beautiful beaches, and cultural landmarks. Enjoy personalized airport transfers and day tours. Your ideal Sri Lankan adventure starts here!",
  keywords:
    "Plan your own trip Sri Lanka, Sri Lanka travel guide, DIY Sri Lanka itinerary, Sri Lanka vacation planning, Sri Lanka travel tips, Sri Lanka attractions, Sri Lanka trip planning",
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
