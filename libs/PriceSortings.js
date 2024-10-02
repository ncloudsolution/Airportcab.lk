import daytrips from "@/data/daytrips.json";
import tourPackage from "@/data/tourPackage.json";

function compareByDiscountedPriceForLowToHigh(a, b) {
  const priceA = a.discountedPrice;
  const priceB = b.discountedPrice;
  return priceA - priceB;
}

function compareByDiscountedPriceForHighToLow(a, b) {
  const priceA = a.discountedPrice;
  const priceB = b.discountedPrice;
  return priceB - priceA;
}

export function PriceLowToHigh(type) {
  // sorting accending
  const category = type === "daytrips" ? [...daytrips] : [...tourPackage];
  const sortedTours = category.sort(compareByDiscountedPriceForLowToHigh);

  return sortedTours;
}

export function PriceHighToLow(type) {
  // sorting decending

  const category = type === "daytrips" ? [...daytrips] : [...tourPackage];
  const sortedTours = category.sort(compareByDiscountedPriceForHighToLow);

  return sortedTours;
}

export function PriceRange(input1, input2, rate, type) {
  // selective range

  const category = type === "daytrips" ? [...daytrips] : [...tourPackage];

  const sortedTours1 = category.filter(
    (tour) => tour.discountedPrice * rate >= input1
  );
  const sortedTours2 = category.filter(
    (tour) => tour.discountedPrice * rate <= input2
  );

  const finalSortedTour = sortedTours1.filter((tour) =>
    sortedTours2.includes(tour)
  );

  return finalSortedTour;
}
