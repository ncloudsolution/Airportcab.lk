import vehicle from "@/data/vehicle.json";

export function SelectVehiclesList(noOfPassengers, distance) {
  // Filtering vehicles based on passenger count
  const filteredVehicles = vehicle.filter(
    (v) =>
      v.minpassengers <= noOfPassengers && v.maxpassengers >= noOfPassengers
  );

  // Creating a new array with filtered vehicles and calculated price
  const selectedVehiclesList = filteredVehicles.map((v) => {
    const price = Math.ceil(v.weightFactor * distance);

    return {
      type: v.type,
      minpassengers: v.minpassengers,
      maxpassengers: v.maxpassengers,
      weightFactor: v.weightFactor,
      price: price,
      img: v.img,
      luggages: v.luggages,
      handbaggages: v.handbaggages,
      category: v.category,
    };
  });

  return selectedVehiclesList;
}
