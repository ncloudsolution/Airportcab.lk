import trains from "@/data/trains.json";

export function TrainSearchByTourPoints(points) {
  // sorting time duration
  const filterdTrains = [...trains].filter(
    (tour) => tour.travelPoints === points
  );

  return filterdTrains;
}
