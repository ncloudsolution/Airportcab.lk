import MainTab from "@/components/MainTab";
import FAQ from "@/components/FAQ";
import PopularDestination from "@/components/PopularDestination";
import GoogleReviews from "@/components/GoogleReviews";
import PopularTours from "@/components/v2/PopularTours";

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
