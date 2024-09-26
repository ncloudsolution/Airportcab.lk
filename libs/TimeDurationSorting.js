import daytrips from "@/data/daytrips.json";
import tourPackage from "@/data/tourPackage.json";

export function SelectiveMinMaxDuration(selectedMinRange, selectedMaxRange) {
  // sorting time duration
  const sortedMinBoundry = [...daytrips].filter(
    (tour) => tour.minduration >= selectedMinRange
  );
  const sortedMaxBoundry = [...daytrips].filter(
    (tour) => tour.minduration <= selectedMaxRange
  );

  const finalSortedTour = sortedMinBoundry.filter((tour) =>
    sortedMaxBoundry.includes(tour)
  );

  return finalSortedTour;
}

export function SelectiveMinMaxDurationforTourPackage(
  selectedMinRange,
  selectedMaxRange
) {
  // sorting time duration
  const sortedMinBoundry = [...tourPackage].filter(
    (tour) => tour.duration >= selectedMinRange
  );
  const sortedMaxBoundry = [...tourPackage].filter(
    (tour) => tour.duration <= selectedMaxRange
  );

  const finalSortedTour = sortedMinBoundry.filter((tour) =>
    sortedMaxBoundry.includes(tour)
  );

  return finalSortedTour;
}
