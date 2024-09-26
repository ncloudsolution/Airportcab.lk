"use client";
import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";

import RouteMapSkeleton from "./skeletonUI/compoundElements/RouteMapSkeleton";

const PackageRouteMap = ({ destinations }) => {
  const [directionResponse, setDirectionResponse] = useState(null);

  const [map, setMap] = useState(null);

  // const origin = "Colombo";
  // const destinations = ["Padukka", "Ingiriya"];

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSkeleton(false);
    }, 500); // 3 seconds delay - 1s for google api load and 2 second timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    region: "lk",
    libraries: libraries,
  });

  useEffect(() => {
    if (isLoaded && !showSkeleton) {
      const calculateRoute = async () => {
        try {
          const directionService = new window.google.maps.DirectionsService();
          const results = await directionService.route({
            origin: destinations[0],
            destination: destinations[destinations.length - 1], // Last destination
            waypoints: destinations
              .slice(1, -1)
              .map((location) => ({ location })), // Intermediate destinations as waypoints
            travelMode: window.google.maps.TravelMode.DRIVING,
          });

          setDirectionResponse(results);
        } catch (error) {
          console.error("Error occurred while route rendering:", error);
        }
      };

      calculateRoute();
    }
  }, [isLoaded, showSkeleton]);

  if (!isLoaded || showSkeleton) {
    return (
      <div className="w-full midxl:h-[350px] bxs:h-[300px] xxs:h-[250px] xxxs:h-[200px] h-[150px] rounded-md overflow-hidden border-[1px] border-black">
        <RouteMapSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full midxl:h-[350px] bxs:h-[300px] xxs:h-[250px] xxxs:h-[200px] h-[150px] rounded-md overflow-hidden outline-none">
      <GoogleMap
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => setMap(map)}
      >
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default PackageRouteMap;
