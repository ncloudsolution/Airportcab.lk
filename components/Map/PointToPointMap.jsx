"use client";
import {
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useContext, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SelectVehiclesList } from "@/libs/calculations";
import { TourContext } from "@/context/TourContextProvider";
import { RetrunTimeValidity, StartTimeValidity } from "@/libs/TimeValidity";

import CustomDatePicker from "../CustomDatePicker";

import { IoIosCloseCircle } from "react-icons/io";
import { RiPinDistanceFill } from "react-icons/ri";

import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import useFineCurrency from "@/hooks/useFineCurrency";
import { IoCarSport } from "react-icons/io5";

const center = { lat: 6.9271, lng: 79.8612 };

// const libraries = ["places"];

const PointToPointMap = ({ children }) => {
  // setTimeout(() => {}, 1000);
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  //   region: "lk",
  //   libraries: libraries,
  // });

  const router = useRouter();

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [selectedVehiclesList, setSelectedVehiclesList] = useState([]);
  const [directionsRespone, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [durationForCalc, setDurationForCalc] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [returnTour, setReturnTour] = useState(false);

  const originRef = useRef();
  const destinationRef = useRef();
  const passengerCountRef = useRef();

  const mapRef = useRef();

  const { lkrRate, usdRate, euroRate, usdSymbol, euroSymbol, lkrSymbol } =
    useFineCurrency();

  //scroll to after the submission

  const [startDate, setStartDate] = useState(new Date());

  const [returnDate, setReturnDate] = useState(new Date());

  //

  // const [showSkeleton, setShowSkeleton] = useState(true);
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowSkeleton(false);
  //   }, 2000); // 3 seconds delay - 1s for google api load and 2 second timeout
  //   return () => clearTimeout(timeoutId);
  // }, []);

  // if (!isLoaded || showSkeleton) {
  //   return (
  //     <>
  //       <CarSkeleton />
  //     </>
  //   );
  // }
  //

  async function calculateRoute() {
    if (
      originRef.current.value === "" ||
      destinationRef.current.value === "" ||
      passengerCountRef.current.value === "" ||
      startDate === ""
    ) {
      return setSubmitError("Please fill all the fields");
    }

    const ValidStartTime = StartTimeValidity(startDate); // Assuming TimeValidity is synchronous

    if (ValidStartTime) {
      setSubmitError(ValidStartTime);
      return;
    }

    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      destinationpage: false,
    }));

    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      console.log(results, "direction results");
      setSubmitError("");
      setIsSubmit(true);
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
      setDurationForCalc(results.routes[0].legs[0].duration.value);

      const selectedVehiclesListValue = SelectVehiclesList(
        passengerCountRef.current.value,
        Math.ceil(results.routes[0].legs[0].distance.value / 1000)
      );
      setSelectedVehiclesList(selectedVehiclesListValue);

      if (returnTour) {
        const ValidReturnTime = RetrunTimeValidity(
          startDate.getTime() / (1000 * 60),
          returnDate.getTime() / (1000 * 60),
          durationForCalc / 60
        );
        setSubmitError(ValidReturnTime);
        return;
      }
      window.scrollBy({
        top: 300, // Scroll down by 200px
        behavior: "smooth", // Smooth scrolling
      });
    } catch (error) {
      setSubmitError(
        "At least one of the origin or destination you enterd could not be geocoded"
      );
      console.error("Error occurred while calculating route:", error);
      // Handle error as needed
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setIsSubmit(false);
    originRef.current.value = "";
    destinationRef.current.value = "";
    passengerCountRef.current.value = "";
  }

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="border-[1px] border-primary flex flex-col items-center justify-center bg-[white]/30 backdrop-blur-lg shadow-xl rounded-lg  mb-10">
          <div className="text-black bxs:text-[30px] xxxs:text-[24px] text-[22px] mt-[20px] bigmd:mt-[50px] mb-[10px] font-medium">
            Taxi Service
          </div>
          <RiPinDistanceFill className="text-[35px] text-primary" />
          <div className="flex mt-6 mb-8 bigmd:w-[838px] bxs:w-[464px] xxxs:w-[314px] w-[294px] px-8  my-10">
            <div className="flex flex-col gap-y-3 w-full text-center">
              <div className="flex gap-x-3 flex-col bigmd:flex-row  gap-y-3 ">
                <Autocomplete restrictions={{ country: ["lk"] }}>
                  <input
                    ref={originRef}
                    placeholder="Origin"
                    defaultValue={tourDetails.origin}
                    type="text"
                    className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black"
                  />
                </Autocomplete>

                <Autocomplete restrictions={{ country: ["lk"] }}>
                  <input
                    ref={destinationRef}
                    defaultValue={tourDetails.destination}
                    placeholder="Destination"
                    type="text"
                    className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black "
                  />
                </Autocomplete>

                <input
                  ref={passengerCountRef}
                  placeholder="No.Passengers"
                  type="number"
                  min="1"
                  className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black "
                />
              </div>

              <div className="flex gap-x-3 relative  flex-col bigmd:flex-row gap-y-3">
                <CustomDatePicker
                  selectedDate={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {returnTour ? (
                  <>
                    <CustomDatePicker
                      selectedDate={returnDate}
                      onChange={(date) => setReturnDate(date)}
                    />

                    <IoIosCloseCircle
                      size={25}
                      className="absolute cursor-pointer bigmd:left-[450px] bxs:left-[320px] xxxs:left-[180px] left-[165px] bigmd:top-[6px] bxs:top-[58px] top-[58px]"
                      onClick={() => setReturnTour(false)}
                    />
                  </>
                ) : (
                  <div
                    className="flex flex-1 justify-center items-center shadow-md rounded border-[1px] border-black bg-white cursor-pointer py-[6px]"
                    onClick={() => setReturnTour(true)}
                  >
                    Add Reurn
                  </div>
                )}

                <div className="flex flex-1 justify-between gap-x-4 bigmd:gap-x-[6px]  xxs:text-[16px] text-[12px] font-medium xxs:font-normal">
                  <div className="rounded-md bg-primary flex items-center flex-1 gap-2 justify-center text-white">
                    <IoCarSport className="text-[20px]" />
                    <button
                      type="submit"
                      className=" "
                      onClick={calculateRoute}
                    >
                      Search
                    </button>
                  </div>

                  <button
                    className=" text-primary border-[1px] border-primary bigmd:px-1 px-2 py-2 rounded bigmd:w-fit :flex-1 bigmd:block"
                    onClick={clearRoute}
                  >
                    Clear Search
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

          {/* <div className="flex my-4 gap-x-3 ">
            {/* <button
              className="bg-black text-white p-2 rounded"
              onClick={() => map.panTo(center)}
            >
              to center map
            </button> 
          </div> */}

          {/** map center smoothly**/}
        </div>

        <div>
          {!submitError && distance && duration && (
            <div className="w-[100vw] flex justify-center">
              <div className="flex xs:flex-row flex-col text-center py-2 px-5 gap-x-3 bg-primary text-white rounded mt-8 mb-6 w-fit">
                <div>Distance : {distance}</div>
                <div className="font-bold xs:flex hidden">||</div>
                <div>Duration : {duration}</div>
              </div>
            </div>
          )}
        </div>

        <div>
          {isSubmit && !submitError && (
            <div className="w-[100vw] flex justify-center" ref={mapRef}>
              <div className="midxl:w-[1400px] mobile:w-[1000px]  w-[800px] flex gap-x-10 xs:mt-8 mt-4 mb-16 mobile:flex-row flex-col bigmd:items-start items-center border-2 border-transparent gap-5 p-4">
                <div className="midxl:w-[800px] bxs:w-full xs:w-[400px] xxxs:w-[300px] w-[250px]  midxl:h-[500px] bigmd:h-[300px]  xs:h-[400px] xxxs:h-[300px] h-[250px] aspect-square flex rounded-lg overflow-hidden shadow-md ">
                  <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    onLoad={(map) => setMap(map)}
                  >
                    {directionsRespone && (
                      <DirectionsRenderer directions={directionsRespone} />
                    )}
                  </GoogleMap>
                </div>
                <div className="w-full">
                  {selectedVehiclesList.map((vehicle, index) => (
                    <div
                      key={index}
                      className="bg-transparent text-black w-full flex flex-col xs:flex-row mb-6 p-4 rounded-lg border-[2px] border-black shadow-md justify-between hover:scale-[1.03] transition-all duration-500"
                    >
                      <div className="flex flex-col items-center xs:items-start ">
                        <div className="font-semibold text-[30px] px-8">
                          {vehicle.type}
                        </div>
                        <div className=" w-[250px] xs:w-[200px] bxs:w-[250px] sm:w-[300px]  sm:h-[150px] h-[120px] xs:translate-y-5 translate-y-0">
                          <Image
                            src={vehicle.img}
                            alt=""
                            width={300}
                            height={300}
                            className="border-2 border-transparent object-cover w-[100%] h-[100%]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col mobile:mr-3 mr-1  gap-y-3  items-center justify-center border-2 border-transparent  xs:w-[200px] w-full">
                        <div className="flex flex-col xs:gap-y-[2px]  w-full">
                          <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                            <FaUser className="text-[28px] p-1 mr-1" />
                            <div>
                              {vehicle.minpassengers} - {vehicle.maxpassengers}{" "}
                              Passengers
                            </div>
                          </div>

                          <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                            <FaBriefcase className="text-[28px] p-1 mr-1" />
                            <div>{vehicle.luggages} Luggages </div>
                          </div>

                          <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                            <BsHandbagFill className="text-[28px] p-1 mr-1" />
                            <div>{vehicle.handbaggages} Hand Baggages</div>
                          </div>

                          <div className="text-gray-600 xs:text-[16px] text-[14px] bg-transparent w-full flex items-center">
                            <FaRegSnowflake className="text-[28px] p-1 mr-1" />
                            <div>Air Conditioning</div>
                          </div>
                        </div>
                        <div className="text-white overflow-hidden rounded w-full text-center flex flex-col items-center">
                          <div className="flex py-1 text-[14px] bg-black w-full justify-center text-white">
                            <div className="pr-1">{lkrSymbol}</div>
                            <div>
                              {returnTour
                                ? (lkrRate * vehicle.price * 2).toFixed(2)
                                : (lkrRate * vehicle.price).toFixed(2)}
                            </div>
                          </div>

                          <div className="flex py-1 text-[14px] bg-slate-300 w-full justify-center text-black">
                            <div className="pr-1">{usdSymbol}</div>
                            <div>
                              {returnTour
                                ? (usdRate * vehicle.price * 2).toFixed(2)
                                : (usdRate * vehicle.price).toFixed(2)}
                            </div>
                          </div>

                          <div className="flex py-1 text-[14px] bg-slate-200 w-full justify-center text-black">
                            <div className="pr-1">{euroSymbol}</div>
                            <div>
                              {returnTour
                                ? (euroRate * vehicle.price * 2).toFixed(2)
                                : (euroRate * vehicle.price).toFixed(2)}
                            </div>
                          </div>
                        </div>

                        <button
                          className="bg-primary text-white w-full py-2 rounded font-semibold  hover:border-black border-2 border-transparent transition-all duration-500"
                          onClick={() => {
                            //
                            setTourDetails((prevTourDetails) => ({
                              ...prevTourDetails,
                              tourType: "p2p",
                              highwayCharge: tourDetails.highwayCharge
                                ? tourDetails.highwayCharge
                                : 0,
                              isReturntour: returnTour,

                              vehicleType: vehicle.type,
                              vehicalSeatCapacityMin: vehicle.minpassengers,
                              vehicalSeatCapacityMax: vehicle.maxpassengers,
                              weightFactor: vehicle.weightFactor,
                              price: vehicle.price,
                              convertedPrice: returnTour
                                ? (
                                    tourDetails.conversionRate *
                                    vehicle.price *
                                    2
                                  ).toFixed(2)
                                : (
                                    tourDetails.conversionRate * vehicle.price
                                  ).toFixed(2),

                              image: vehicle.img,
                              luggages: vehicle.luggages,
                              category: vehicle.category,

                              origin: originRef.current.value,
                              destination: destinationRef.current.value,
                              noOfPassengers: passengerCountRef.current.value,
                              startDate: startDate,
                              returnDate: returnTour
                                ? returnDate
                                : "No any Return",
                              distance: distance,
                              duration: duration,
                              pageTwoToken: true,
                            }));

                            router.push("/tour-booking");
                          }}
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/** context usage **/}

      {children}
    </>
  );
};

export default PointToPointMap;
