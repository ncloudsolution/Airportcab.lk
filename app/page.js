// import AboutSrilanka from "@/components/AboutSrilanka";
// import AboutUs from "@/components/AboutUs";
// import Activities from "@/components/Activities";
// import GoogleReviews from "@/components/GoogleReviews";
import MainTab from "@/components/MainTab";
import FAQ from "@/components/FAQ";
import PopularDestination from "@/components/PopularDestination";
import GoogleReviews from "@/components/GoogleReviews";
import PopularTours from "@/components/v2/PopularTours";

// import PlanYourOwnTripHome from "@/components/PlanYourOwnTripHome";

// import TourSlider from "@/components/TourSlider";

export default function Home() {
  return (
    <div className="flex flex-col pt-[60px]">
      <MainTab />
      <PopularTours />
      <PopularDestination />
      <FAQ />
      <div className="py-5 bg-slate-100">
        <GoogleReviews />
      </div>
    </div>
  );
}
