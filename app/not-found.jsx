import Image from "next/image";
import React from "react";
import notFound from "@/public/Others/notFound.jpg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex w-full justify-center items-center xs:h-[90vh] h-[85vh] gap-10 ">
      <div className="xl:w-[1200px] mobile:w-[900px] bxs:w-[600px] xxs:w-[350px] w-[300px] mx-5 my-10 flex mobile:flex-row flex-col mobile:justify-normal items-center ">
        <div className=" xxxs:text-[40px] text-[30px] leading-[40px] xxxs:leading-[50px] font-semibold flex mobile:hidden ">
          Oops,
        </div>
        <div className="  xxxs:text-[40px] text-[30px] leading-[40px] xxxs:leading-[50px] font-semibold flex mobile:hidden gap-2">
          <span className="text-primary">nothing</span> here ...
        </div>
        <div className="xl:w-[600px] bxs:w-[300px] xxs:w-[250px] w-[200px] h-fit ">
          <Image src={notFound} alt="" className="size-[100%]" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="xl:text-[70px] text-[60px] font-semibold mobile:flex hidden">
            Oops,
          </div>
          <div className="xl:text-[70px] text-[60px] font-semibold xl:leading-[70px] leading-[60px] mobile:flex hidden gap-2">
            <span className="text-primary">nothing</span> here ...
          </div>
          <div className="my-[20px] xl:text-[16px] text-[14px]">
            The page you are looking for doesn&#39;t exist. It might have been
            moved or deleted. Please check the URL and try again. If you need
            help, you can return to the home page or contact our support team.
          </div>
          <Link
            href={"/"}
            className="py-2 px-10 rounded-md bg-primary w-fit bxs:mt-5 mt-2 font-semibold"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
