// "use client";
// import React, { useEffect, useState } from "react";

// const useCurrency = () => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
//     )
//       .then((res) => res.json())
//       .then((data) => setData(data["lkr"]));
//   }, []);

//
//   return data;
// };

// export default useCurrency;

"use client";
import { TourContext } from "@/context/TourContextProvider";
import { useContext, useEffect, useState } from "react";

const useCurrency = (pathname) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (
        pathname.includes("/day-trips") ||
        pathname.includes("/tour-packages")
      ) {
        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
          );
          const result = await response.json();
          setData(result["usd"]);
          setTourDetails((prevDetails) => ({
            ...prevDetails,
            slRate: result["usd"]["lkr"],
          }));
        } catch (error) {
          console.error("Fetch error:", error);
        }
      } else {
        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
          );
          const result = await response.json();
          setData(result["lkr"]);
          const cal = result["lkr"]["usd"];
          setTourDetails((prevDetails) => ({
            ...prevDetails,
            slRate: 1 / cal,
          }));
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();
  }, [pathname, setTourDetails]);

  return data;
};

export default useCurrency;

// "use client";
// import { useContext, useEffect, useState } from "react";
// import { TourContext } from "@/context/TourContextProvider";

// const useCurrency = (pathname) => {
//   const { setTourDetails } = useContext(TourContext);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       let url = "";
//       let updateRate = "";

//       if (
//         pathname.includes("/day-trips") ||
//         pathname.includes("/tour-packages")
//       ) {
//         url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`;
//         updateRate = "usd";
//       } else {
//         url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`;
//         updateRate = "lkr";
//       }

//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result[updateRate]);

//         if (updateRate === "usd") {
//           setTourDetails((prevDetails) => ({
//             ...prevDetails,
//             slRate: result["usd"]["lkr"],
//           }));
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     fetchData();
//   }, [pathname, setTourDetails]);

//   return data;
// };

// export default useCurrency;
