import React from "react";
import Image from "next/image";
import srilanka2 from "@/public/AboutSl/sl2.jpg";
import text from "@/data/text.json";
import Title from "./standalone/Title";

function AboutSrilanka() {
  const textcontent = text[0];
  return (
    <>
      <div
        className="flex justify-center " /*</>style={{ backgroundImage: `url(${srilanka4.src})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}} */
      >
        <div className="w-[300px] xxs:w-[350px] xs:w-[450px] bxs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[90%] 2xl:w-[80%] flex flex-col lg:flex-row justify-center gap-3 2xl:gap-6 shadow-lg items-center mobile:p-[50px] bxs:p-[30px] p-[20px] rounded-lg">
          <div className="w-full lg:w-1/2 flex justify-start">
            <Image
              className="mb-[20px] lg:mb-0 size-[400px] 2xl:size-[500px]  border-2 border-primary rounded-md p-6 h-auto overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={srilanka2}
              alt=""
            />
          </div>

          <div className="w-full  lg:w-1/2 lg:mb-0 mb-5">
            <div className="translate-y-1 bxs:translate-y-3 lg:translate-y-0">
              <Title title={"Welcome To Sri Lanka"} />
            </div>

            <p className="text-[14px] bxs:text-[16px]">
              {textcontent.aboutsl_txt1}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSrilanka;
