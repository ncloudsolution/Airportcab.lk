import Image from "next/image";
import slmap from "@/public/Others/sriLanka.png";

const RouteMapSkeleton = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center border-2 border-transparent py-8 ">
        {/** <Image src={car} alt="" className="size-[100%] animate-carmoving" /> **/}
        <div className="bxs:w-[350px] xxs:w-[250px] w-[180px] bxs:h-[250px] xxs:h-[150px] h-[80px]">
          {/** line 1 give hieght and width to container**/}
          <Image
            layout="responsive"
            src={slmap}
            alt=""
            className="object-cover border-2 border-transparent animate-mapmoving  xxs:translate-y-0"
            priority
          />
          {/** line 2 give layout as responsible**/}
          {/** line 3 give priority to load first line 4 give placeholder="blur" to give initial blur as before loading**/}
        </div>
      </div>
    </>
  );
};

export default RouteMapSkeleton;
