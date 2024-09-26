"use client";
import React from "react";
import Image from "next/image";
import pack1 from "@/public/Packages/pack1.jpg";
import pack2 from "@/public/Packages/pack2.jpg";
import pack3 from "@/public/Packages/pack3.jpg";

const Packages = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[600px] text-center">
              <h1 className="mb-[30px]  ">Tour Packages</h1>
              <p className="text-base text-body-color dark:text-dark-6">
                Explore our diverse range of meticulously crafted tour packages,
                designed to immerse you in the captivating beauty and cultural
                richness of Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <Package
              Packimage={pack1}
              date="7 Days /6 Nights"
              PackageName="Ceylon Wild Life Tour"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Book Now"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </Package>
            <Package
              Packimage={pack2}
              date="10 Days /9 Nights"
              PackageName="Ceylon Beach Tour"
              description="Perfect for using in a personal website or a client project."
              buttonText="Book Now"
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on31 (Three) project</List>
              <List>4 Months support</List>
            </Package>

            <Package
              Packimage={pack3}
              date="12 Days /11 Nights"
              PackageName="Honemoon Tour"
              description="Perfect for using in a personal website or a client project."
              buttonText="Book Now"
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </Package>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

const Package = ({
  Packimage,
  children,
  description,
  PackageName,
  date,
  buttonText,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 mx-[40px] md:mx-0 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[30px]">
          <a href="/">
            <Image
              className="w-[full] h-[300px] rounded-lg object-cover"
              src={Packimage}
              alt="logo"
            />
          </a>
          <span className="my-3 block text-lg font-semibold text-primary">
            {date}
          </span>
          <h2 className="mb-6 text-[30px] font-bold text-dark dark:text-white">
            {PackageName}
          </h2>
          <p className="mb-4 border-b border-stroke pb-6 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[8px]">{children}</div>

          <a
            className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            href="/#"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <ul className="list-disc pl-5">
      <li className="text-base text-body-color dark:text-dark-6">{children}</li>
    </ul>
  );
};
