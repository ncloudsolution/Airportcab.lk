function TourPackagePricingAlgorithm(
  price,
  adultCountX,
  ChildrenCountX,
  mealX,
  vehicalX
) {
  const adultCount = adultCountX ? Number(adultCountX) : 1;
  const ChildrenCount = ChildrenCountX ? Number(ChildrenCountX) : 0;
  const mealPricePerAnyone = mealX == "BB" ? 0 : price * 0.1;
  const vehicalPricePerAnyone =
    vehicalX == "Sedan"
      ? 0
      : vehicalX == "Micro vans"
      ? price * 0.1
      : vehicalX == "High roof"
      ? price * 0.15
      : vehicalX == "Mini coaches"
      ? price * 0.2
      : 0;
  const pricePerChildren =
    ChildrenCount > 0 ? price * 0.35 + mealPricePerAnyone : 0;
  const totalpriceForChildren = ChildrenCount * pricePerChildren;
  const basicObject = {
    noOfAdults: adultCount,
    noOfChildren: ChildrenCount,
    pricePerChildren: pricePerChildren,
  };

  if (adultCount == 1) {
    return {
      ...basicObject,
      pricePerAdult: price * 2 + mealPricePerAnyone + vehicalPricePerAnyone,
      totalPriceforAdult:
        adultCount * (price * 2 + mealPricePerAnyone + vehicalPricePerAnyone),
      totalPriceforChildren: totalpriceForChildren,
      totalPrice:
        adultCount * (price * 2 + mealPricePerAnyone + vehicalPricePerAnyone) +
        totalpriceForChildren,
    };
  }

  if (adultCount == 2) {
    return {
      ...basicObject,
      pricePerAdult: price * 1 + mealPricePerAnyone + vehicalPricePerAnyone,
      totalPriceforAdult:
        adultCount * (price * 1 + mealPricePerAnyone + vehicalPricePerAnyone),
      totalPriceforChildren: totalpriceForChildren,
      totalPrice:
        adultCount * (price * 1 + mealPricePerAnyone + vehicalPricePerAnyone) +
        totalpriceForChildren,
    };
  }
  if (adultCount == 3 || adultCount == 4) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.75 + mealPricePerAnyone + vehicalPricePerAnyone,
      totalPriceforAdult:
        adultCount *
        (price * 0.75 + mealPricePerAnyone + vehicalPricePerAnyone),
      totalPriceforChildren: totalpriceForChildren,
      totalPrice:
        adultCount *
          (price * 0.75 + mealPricePerAnyone + vehicalPricePerAnyone) +
        totalpriceForChildren,
    };
  }
  if (adultCount == 5) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.6 + mealPricePerAnyone + vehicalPricePerAnyone,
      totalPriceforAdult:
        adultCount * (price * 0.6 + mealPricePerAnyone + vehicalPricePerAnyone),
      totalPriceforChildren: totalpriceForChildren,
      totalPrice:
        adultCount *
          (price * 0.6 + mealPricePerAnyone + vehicalPricePerAnyone) +
        totalpriceForChildren,
    };
  }
  if (adultCount >= 6) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.5 + mealPricePerAnyone + vehicalPricePerAnyone,
      totalPriceforAdult:
        adultCount * (price * 0.5 + mealPricePerAnyone + vehicalPricePerAnyone),
      totalPriceforChildren: totalpriceForChildren,
      totalPrice:
        adultCount *
          (price * 0.5 + mealPricePerAnyone + vehicalPricePerAnyone) +
        totalpriceForChildren,
    };
  }
}

export default TourPackagePricingAlgorithm;

// const myprice = DayTripPricingAlgorithm(75.05, 8, 3);

//
