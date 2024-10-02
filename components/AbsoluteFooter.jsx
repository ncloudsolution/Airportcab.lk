import React from "react";
import ncloudlogo from "@/public/Footers/Ft1.png";
import Image from "next/image";
import { CashOnDelivery, MasterCard, Visa } from "@/public/Footers";
import Link from "next/link";

const AbsoluteFooter = () => {
  return (
    <>
      <div className=" mobile:h-[80px]  bigmd:h-[60px] h-[180px] text-[14px] mobile:text-[16px] bg-gradient-to-l from-primary to-newprimary  w-full   text-white flex  bigmd:flex-row  flex-col-reverse items-center justify-center bigmd:justify-around">
        <div className="flex mobile:h-[40px] items-center justify-center bigmd:flex-row flex-col xxs:text-[14px] text-[12px] text-white">
          {/*PART 1 */}
          <div className="flex mb-2 bigmd:mb-0">Copyright 2024 ©</div>
          {/*PART2 */}
          <div className="font-semibold mx-[5px] flex xs:flex-row flex-col items-center ">
            <div> Ceylon Taxi and Tours (PVT) Ltd </div>
            <div className="xs:mx-[5px] hidden xs:flex"> - </div>
            <div className="mb-2 xs:mb-0">All Rights Reserved.</div>
          </div>
          {/*PART3 */}
          <div className="flex items-center">
            <div>Web by</div>
            <Link
              href="https://ncloud.lk/"
              target="_blank"
              className="flex mx-[5px] mobile:h-[40px] h-[35px] py-[5px]"
            >
              <Image src={ncloudlogo} alt="" className="size-[100%] " />
            </Link>
          </div>
        </div>

        {/*icons */}
        <div className="flex mobile:h-[40px] bigmd:h-[35px] py-[5px] w-[150px] gap-2 mb-2 bigmd:my-0">
          <Visa className="paymentstyle" />
          <MasterCard className="paymentstyle" />
          <CashOnDelivery className="paymentstyle" />
        </div>
      </div>
    </>
  );
};

export default AbsoluteFooter;
