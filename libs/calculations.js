import vehicle from "@/data/vehicle.json";

export function SelectVehiclesList(noOfPassengers, distance) {
  // Filtering vehicles based on passenger count
  const filteredVehicles = vehicle.filter(
    (v) =>
      v.minpassengers <= noOfPassengers && v.maxpassengers >= noOfPassengers
  );

  // Creating a new array with filtered vehicles and calculated price
  const selectedVehiclesList = filteredVehicles.map((v) => {
    // const price = Math.ceil(v.weightFactor * distance);

    const fixedPriceArray = v.pricing.fixed;
    const fixedPriceLastObj = fixedPriceArray[fixedPriceArray.length - 1];
    const fixedPriceLastKey = Object.keys(fixedPriceLastObj)[0];

    let newPrice;
    if (fixedPriceLastKey > distance) {
      //fixed pricing
      const key = v.pricing.fixed.find(
        (i) => Number(Object.keys(i)[0]) > distance
      );

      newPrice = Object.values(key)[0];
    } else {
      //per km pricing
      const key = v.pricing.perKm.find(
        (i) => Number(Object.keys(i)[0]) > distance
      );
      console.log(Object.values(key)[0]);
      newPrice = Math.ceil(Object.values(key)[0] * distance);
    }

    return {
      type: v.type,
      minpassengers: v.minpassengers,
      maxpassengers: v.maxpassengers,
      weightFactor: v.weightFactor,
      price: newPrice,
      img: v.img,
      luggages: v.luggages,
      handbaggages: v.handbaggages,
      category: v.category,
    };
  });

  return selectedVehiclesList;
}
