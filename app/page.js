// import AboutSrilanka from "@/components/AboutSrilanka";
// import AboutUs from "@/components/AboutUs";
// import Activities from "@/components/Activities";
// import GoogleReviews from "@/components/GoogleReviews";
import MainTab from "@/components/MainTab";
import FAQ from "@/components/FAQ";
import PopularDestination from "@/components/PopularDestination";

// import PlanYourOwnTripHome from "@/components/PlanYourOwnTripHome";

// import TourSlider from "@/components/TourSlider";

export default function Home() {
  return (
    <>
      <MainTab />
      <PopularDestination />
      <FAQ />

      {/** <MainSlider />**/}

      {/* <div className="my-10">
        <TourSlider />
      </div>

      <div className="xs:my-20 xxs:my-10 my-5">
        <AboutSrilanka />
      </div>

      <div className="xs:my-20 xxs:my-10 my-5">
        <PlanYourOwnTripHome />
      </div>

      <div className="my-5">
        <AboutUs />
      </div>

      <Activities />

      <div className="my-5">
        <GoogleReviews />
      </div> */}
    </>
  );
}
