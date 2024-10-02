import highway from "@/data/highwayCharges.json";

export function SetHighwayCharge(vehicleType, exitPoint, isReturn) {
  // Find the charge array for the specified exit point
  const chargeArray = highway[exitPoint];

  if (exitPoint === "None") {
    return 0;
  }

  // If the charge array exists
  if (chargeArray) {
    // Return the array value based on vehicle type
    let charge;

    if (vehicleType === "A") {
      charge = chargeArray[0];
    } else if (vehicleType === "B") {
      charge = chargeArray[1];
    } else {
      charge = chargeArray[2];
    }

    // If isReturn is true, double the charge
    if (isReturn) {
      return (charge *= 2);
    }

    return charge;
  }
}
