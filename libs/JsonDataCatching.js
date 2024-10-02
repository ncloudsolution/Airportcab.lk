import daytrips from "@/data/daytrips.json";
import tourPackage from "@/data/tourPackage.json";

export function GetDescriptionParaData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const paragraphArray = data.fullDescriptionParas;

  return paragraphArray;
}

export function GetIncludeData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const IncludeArray = data.include;

  return IncludeArray;
}

export function GetExcludeData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const ExcludeArray = data.exclude;

  return ExcludeArray;
}

export function GetPlacesData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const PlacesArray = data.places;

  return PlacesArray;
}

export function GetTimeSlot(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const TimeSlotArray = data.timeSlots;

  if (TimeSlotArray === undefined) {
    return ["6.00 AM", "6.30 AM", "7.00 AM", "7.30 AM"];
  }

  return TimeSlotArray;
}

export function GetCustomTourCheckedItems(jsonfilelocation) {
  const data = jsonfilelocation;
  return data;
}

export function GetAllDataOfTourPackage(title) {
  const data = [...tourPackage].find((trip) => trip.description === title);

  const AllDataObject = {
    image: data.img,
    discountedPrice: data.discountedPrice,
    duration: data.duration,
    experience: data.experience,
    routeOrder: data.routeOrder,
  };

  return AllDataObject;
}
