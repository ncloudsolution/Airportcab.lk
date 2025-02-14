"use client";

import { useContext, useRef, useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";
import { FaBriefcase, FaRegSnowflake, FaTrain, FaUser } from "react-icons/fa6";
import CustomTrainDropDown from "../standalone/CustomTrainDropDown";
import { TrainSearchByTourPoints } from "@/libs/TrainSearch";
import { SelectVehiclesList } from "@/libs/calculations";
import Title from "../standalone/Title";
import Image from "next/image";
import { BsHandbagFill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import CustomDatePicker from "../CustomDatePicker";
import { vehicalInsteadOfTrain } from "@/libs/VehicalInsteadOfTrain";

const center = { lat: 6.9271, lng: 79.8612 };

const TrainMap = ({ children }) => {
  const router = useRouter();

  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [filterdTrains, setFilterdTrains] = useState("");

  const [selectedVehicalsX, setSelectedVehicalX] = useState();
  const passengerCountRef = useRef();

  const [distanceX, setDistanceX] = useState();
  const [otherData, setOtherData] = useState();

  const [isDateActive, setIsDateActive] = useState();

  async function calculateRoute(e) {
    e.preventDefault();
    if (
      passengerCountRef.current.value === "" ||
      tourDetails.trainTourPoints === undefined
    ) {
      return setSubmitError("Please fill all the fields");
    }

    try {
      setFilterdTrains((prevFilteredTrains) =>
        TrainSearchByTourPoints(tourDetails.trainTourPoints)
      );

      //from libs switch case function
      const vehicalInsteadOfTrian = vehicalInsteadOfTrain(
        tourDetails.trainTourPoints
      );

      const selectedVehicals = SelectVehiclesList(
        passengerCountRef.current.value,
        vehicalInsteadOfTrian.newDistanceX
      );

      setOtherData(vehicalInsteadOfTrian.otherDataX);
      setDistanceX(vehicalInsteadOfTrian.newDistanceX);

      setSelectedVehicalX(selectedVehicals);

      // setTourDetails((prevTourDetails) => ({
      //   ...prevTourDetails,
      //   trainTourPoints: tourDetails.trainTourPoints,
      //   noOfPassengers: passengerCountRef.current.value,
      // }));
      setSubmitError("");
      setIsSubmit(true);

      window.scrollBy({
        top: 300, // Scroll down by 200px
        behavior: "smooth", // Smooth scrolling
      });
    } catch (error) {
      console.error("Error occurred while calculating route:", error);
      // Handle error as needed
    }
  }

  // useEffect(() => {
  //
  // }, [filterdTrains]);
  useEffect(() => {}, [tourDetails]);

  return (
    <>
      <div className="flex flex-col items-center w-full border-transparent border-2">
        <div className="flex flex-col items-center justify-center bg-[white]/30 backdrop-blur-lg shadow-xl rounded-lg  mb-10">
          <div className="text-black bxs:text-[30px] xxxs:text-[24px] text-[22px] mt-[20px] bigmd:mt-[50px] mb-[10px] font-medium ">
            Journey On Rails
          </div>
          <FaTrain className="text-[30px] text-primary mb-2" />
          <div className="flex mb-8 mt-6 border-2 border-transparent bigmd:w-fit bxs:w-[400px] xxs:w-[320px] xxxs:w-[290px] w-[250px]">
            <div className="flex flex-col gap-y-3 w-full px-8 ">
              <div className="flex flex-col bigmd:flex-row gap-x-3 gap-y-3 bigmd:w-[778px] w-full">
                {/**750px**/}
                <div className="relative w-full flex-2 z-50">
                  <CustomTrainDropDown />
                </div>

                <input
                  ref={passengerCountRef}
                  placeholder="No.Passengers"
                  type="number"
                  min="1"
                  className="p-2 text-[12px] xs:text-[14px] bigmd:mt-0 mt-[40px]  outline-none  h-[39px]  bigmd:w-[150px] w-full shadow-md rounded border-[1px] border-primary "
                />
              </div>

              {/* <div className="flex bigmd:flex-row flex-col mt-[40px] w-full gap-x-3">
                
              </div> */}

              <div className="flex gap-x-3 relative  flex-col bigmd:flex-row gap-y-3">
                <div className="flex flex-1 justify-between gap-x-4 bigmd:gap-x-2  xxs:text-[16px] text-[12px] font-medium xxs:font-normal">
                  <button
                    type="submit"
                    className="bg-primary text-white p-2 rounded bigmd:w-fit flex-1 bigmd:block "
                    onClick={calculateRoute}
                  >
                    Search Train
                  </button>
                </div>
              </div>
            </div>
          </div>

          {submitError && (
            <div className="text-errorpink bg-gray-200 px-4 py-2 rounded mb-4">
              {submitError}
            </div>
          )}
        </div>

        {isSubmit && !submitError && (
          <div className="w-[100vw] bg-gray-200 border-b-2 border-primary ">
            <div className="w-full flex justify-center">
              <div className=" midxl:w-[1400px] mobile:w-[1000px] w-[800px] flex gap-x-10 xs:mt-8 mb-0  bigmd:flex-row flex-col bigmd:items-start items-center gap-2 mt-6">
                <div className="flex flex-col w-full items-center ">
                  {filterdTrains.map((train, index) => (
                    <div
                      key={index}
                      className="2xl:w-[1056px] bigmd:w-[846px] bxs:w-[400px] xxs:w-[350px] xxxs:w-[290px] w-[250px]"
                    >
                      <div className="flex flex-col gap-y-5 md:gap-y-8">
                        {train.trainList.map((train, index) => (
                          <div
                            key={index}
                            className="w-full  px-4 border-[1px] border-black rounded"
                          >
                            {" "}
                            {/**upper section over the line**/}
                            <div className="w-full bigmd:py-3 py-[10px] bigmd:gap-y-0 gap-y-[2px] flex bigmd:flex-row flex-col justify-between items-center  border-b-black border-b-[2px]">
                              <div className="bigmd:text-[26px] bxs:text-[20px]  xxs:text-[18px] text-[17px] font-semibold ">
                                {train.trainName}
                              </div>
                              <div className="flex bigmd:gap-x-4  gap-x-6  text-[#6c6c6c]">
                                <div className="flex flex-col items-center ">
                                  <div className="font-semibold text-[12px] bxs:text-[16px] ">
                                    {train.trainPoints[0]}
                                  </div>
                                  <div className="bigmd:text-[12px] text-[11px]">
                                    {train.trainTime[0]}
                                  </div>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="font-semibold text-[12px] bxs:text-[16px]">
                                    {train.trainPoints[1]}
                                  </div>
                                  <div className="bigmd:text-[12px] text-[11px]">
                                    {train.trainTime[1]}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/**arrive departs**/}
                            <div className="flex justify-between items-center my-3">
                              <div className="flex flex-col my-2 bxs:text-[18px] xxs:text-[16px] text-[14px]">
                                <div className="flex gap-x-3">
                                  <div className="bxs:w-[70px] w-[50px] font-semibold ">
                                    Departs
                                  </div>
                                  <div className="font-medium text-primary">
                                    {train.travelTime[0]}
                                  </div>
                                </div>
                                <div className="flex gap-x-3">
                                  <div className="bxs:w-[70px] w-[50px] font-semibold">
                                    Arrives
                                  </div>
                                  <div className="font-medium text-errorpink">
                                    {train.travelTime[1]}
                                  </div>
                                </div>
                              </div>

                              {/**days**/}
                              <div className="flex gap-2 flex-wrap justify-end">
                                {train.availableDays.map((day, index) => (
                                  <div key={index}>
                                    <div className="bigmd:py-2 py-[6px] bigmd:text-[16px] text-[14px] bigmd:px-3 px-2 rounded bg-[#eeeeee] shadow font-medium">
                                      {day}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/**class**/}
                            <div className="my-5">
                              {train.types.map((type, index) => (
                                <div
                                  key={index}
                                  className="my-2"
                                  onClick={() => {
                                    setTourDetails((prevTourDetails) => ({
                                      ...prevTourDetails,
                                      noOfPassengers:
                                        passengerCountRef.current.value,
                                      tourType: "train",
                                      trainName: train.trainName,

                                      trainPoints: train.trainPoints,
                                      trainTime: train.trainTime,

                                      travelPoints: tourDetails.trainTourPoints,
                                      travelTime: train.travelTime,

                                      trainAvailableDays: train.availableDays,

                                      trainClass: type.class,
                                      trainPrice: type.price,
                                    }));

                                    router.push("/journey-on-rails/summary");
                                  }}
                                >
                                  <div
                                    className={` ${
                                      type.class ===
                                      "Air Conditioned First Class Reserved"
                                        ? // ? "bg-gradient-to-b from-gold via-gold-light to-gold-dark text-white font-medium"
                                          "bg-primary text-white font-medium"
                                        : type.class === "Observation Saloon"
                                        ? "bg-gradient-to-r from-black from-2% via-gold to-black to-98% text-white"
                                        : type.class === "Second Class Reserved"
                                        ? "bg-[#d1d5db] text-black"
                                        : type.class === "Third Class Reserved"
                                        ? "bg-black text-white"
                                        : type.class ===
                                          "First Class Sleeperetts"
                                        ? "bg-gradient-to-b from-primary to-[#020617] text-white"
                                        : type.class ===
                                          "Second Class Sleeperetts"
                                        ? "bg-gradient-to-b from-[#fed7aa] to-[#44403c]  text-white"
                                        : type.class ===
                                          "Third Class Sleeperetts"
                                        ? "bg-gradient-to-b from-[#d1d5db] to-[#374151] text-white"
                                        : "bg-[#92400e] text-white"
                                    } flex  justify-between items-center gap-2 p-2 text-[11px] xxxs:text-[12px] xxs:text-[14px] bxs:text-[16px] rounded`}
                                  >
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <div className="bigmd:w-fit bxs:w-[200px] xxs:w-[150px] xxxs:w-[120px] w-[90px]">
                                        {type.class}
                                      </div>
                                      <div>
                                        {tourDetails.currencyType}{" "}
                                        {(
                                          type.price *
                                          tourDetails.conversionRate
                                        ).toFixed(2)}
                                      </div>
                                    </div>

                                    <BiSolidRightArrow className="cursor-pointer" />
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/**select button**/}
                            {/* <div className="bg-black rounded w-full text-white font-semibold p-3 text-center mb-3 -mt-1">
                            Select This Train
                          </div> */}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="my-10 2xl:w-[1056px] bigmd:w-[846px] bxs:w-[400px] xxs:w-[350px] xxxs:w-[290px] w-[250px] ">
                    <div className="w-full text-center">
                      <Title title={"Recomondations For You"} />
                      <div className="text-[18px]">
                        {tourDetails.trainTourPoints}
                      </div>
                    </div>
                    <div className="my-10">
                      {selectedVehicalsX && (
                        <div className="w-full">
                          {selectedVehicalsX.map((vehicle, index) => (
                            <div
                              key={index}
                              className="bg-transparent relative text-black w-full flex flex-col bigmd:flex-row mb-6 p-4 rounded-lg border-[2px] border-black shadow-md justify-between "
                            >
                              {isDateActive === index && (
                                <div className=" bg-primary text-white absolute z-40 w-full flex flex-col justify-center items-center -translate-x-4 -translate-y-4 h-full rounded-md ">
                                  <div className="flex flex-col items-center">
                                    <div className="text-[20px] font-semibold mb-3">
                                      Select Pickup Date
                                    </div>
                                    <div className="my-3 z-50">
                                      <CustomDatePicker
                                        selectedDate={startDate}
                                        onChange={(date) => setStartDate(date)}
                                      />
                                    </div>
                                    <div
                                      className="py-2 w-full bg-black text-white text-center rounded-md"
                                      onClick={() => {
                                        setTourDetails((prevTourDetails) => ({
                                          ...prevTourDetails,

                                          startDate: startDate,
                                        }));

                                        router.push("/tour-booking");
                                      }}
                                    >
                                      Next
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="flex flex-col items-center bigmd:items-start ">
                                <div className="font-semibold text-[30px] px-8">
                                  {vehicle.type}
                                </div>
                                <div className=" w-[250px] xs:w-[200px] bxs:w-[250px] sm:w-[300px] sm:h-[150px] h-[120px] bigmd:translate-y-5 translate-y-0">
                                  <Image
                                    src={vehicle.img}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="border-2 border-transparent object-cover w-[100%] h-[100%]"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col mobile:mr-3 mr-1  gap-y-3  items-center justify-center border-2 border-transparent  bigmd:w-[200px] w-full">
                                <div className="flex flex-col xs:gap-y-[2px]  w-full">
                                  <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                                    <FaUser className="text-[28px] p-1 mr-1" />
                                    <div>
                                      {vehicle.minpassengers} -{" "}
                                      {vehicle.maxpassengers} Passengers
                                    </div>
                                  </div>

                                  <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                                    <FaBriefcase className="text-[28px] p-1 mr-1" />
                                    <div>{vehicle.luggages} Luggages </div>
                                  </div>

                                  <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                                    <BsHandbagFill className="text-[28px] p-1 mr-1" />
                                    <div>
                                      {vehicle.handbaggages} Hand Baggages
                                    </div>
                                  </div>

                                  <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                                    <FaRegSnowflake className="text-[28px] p-1 mr-1" />
                                    <div>Air Conditioning</div>
                                  </div>
                                </div>

                                <div className="bg-black text-white py-2 rounded w-full text-center flex flex-col items-center">
                                  <div className="flex text-[18px]">
                                    <div className="pr-1">
                                      {tourDetails.converedCurrencySymbol}
                                    </div>
                                    <div>
                                      {(
                                        tourDetails.conversionRate *
                                        vehicle.price
                                      ).toFixed(2)}
                                    </div>
                                  </div>
                                  {/* <div className="bigmd:text-[12px] text-[10px] text-yellow-500 w-full  px-2 text-center">
                          Highway Charges and other Charges are Not Included
                        </div> */}
                                </div>
                                <button
                                  className="bg-primary text-white w-full py-2 rounded font-semibold  hover:border-black border-2 border-transparent transition-all duration-500"
                                  onClick={() => {
                                    //

                                    // let placeX;

                                    // switch (tourDetails.trainTourPoints) {
                                    //   case "Colombo to Kandy":
                                    //     placeX = "Kandy";
                                    //     break;
                                    //   case "Colombo to Polonnaruwa":
                                    //     placeX = "Polonnaruwa";
                                    //     break;
                                    //   // Add more cases as needed
                                    //   default:
                                    //     placeX = "Colombo";
                                    //     break;
                                    // }
                                    //

                                    //
                                    setIsDateActive(index);
                                    setTourDetails((prevTourDetails) => ({
                                      ...prevTourDetails,
                                      tourType: "p2p",

                                      isReturntour: false,

                                      vehicleType: vehicle.type,
                                      vehicalSeatCapacityMin:
                                        vehicle.minpassengers,
                                      vehicalSeatCapacityMax:
                                        vehicle.maxpassengers,
                                      weightFactor: vehicle.weightFactor,
                                      price: vehicle.price,
                                      convertedPrice: (
                                        tourDetails.conversionRate *
                                        vehicle.price
                                      ).toFixed(2),

                                      image: vehicle.img,
                                      boardShow: false,

                                      category: vehicle.category,

                                      origin: otherData.origin,
                                      destination: otherData.destination,
                                      noOfPassengers:
                                        passengerCountRef.current.value,
                                      highwayCharge: 0,
                                      returnDate: "No any Return",
                                      distance: otherData.distance,
                                      duration: otherData.duration,
                                      pageTwoToken: true,
                                    }));

                                    // router.push("/tour-booking");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default TrainMap;
