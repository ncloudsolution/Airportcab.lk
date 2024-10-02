function DayTripPricingAlgorithm(price, adultCountX, ChildrenCountX) {
  const adultCount = adultCountX ? Number(adultCountX) : 1;
  const ChildrenCount = ChildrenCountX ? Number(ChildrenCountX) : 0;
  const pricePerChildren = ChildrenCount > 0 ? price * 0.35 : 0;
  const totalpriceForChildren = ChildrenCount * pricePerChildren;
  const basicObject = {
    noOfAdults: adultCount,
    noOfChildren: ChildrenCount,
    pricePerChildren: pricePerChildren,
  };

  if (adultCount == 1) {
    return {
      ...basicObject,
      pricePerAdult: price * 2,
      totalPriceforAdult: adultCount * price * 2,
      totalPriceforChildren: totalpriceForChildren,
      totalPrice: adultCount * price * 2 + totalpriceForChildren,
    };
  }

  if (adultCount == 2) {
    return {
      ...basicObject,
      pricePerAdult: price * 1,
      totalPriceforAdult: adultCount * price * 1,
      totalPriceforChildren: totalpriceForChildren,
      totalPrice: adultCount * price * 1 + totalpriceForChildren,
    };
  }
  if (adultCount == 3 || adultCount == 4) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.75,
      totalPriceforAdult: adultCount * price * 0.75,
      totalPriceforChildren: totalpriceForChildren,
      totalPrice: adultCount * price * 0.75 + totalpriceForChildren,
    };
  }
  if (adultCount == 5) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.6,
      totalPriceforAdult: adultCount * price * 0.6,
      totalPriceforChildren: totalpriceForChildren,
      totalPrice: adultCount * price * 0.6 + totalpriceForChildren,
    };
  }
  if (adultCount >= 6) {
    return {
      ...basicObject,
      pricePerAdult: price * 0.5,
      totalPriceforAdult: adultCount * price * 0.5,
      totalPriceforChildren: totalpriceForChildren,
      totalPrice: adultCount * price * 0.5 + totalpriceForChildren,
    };
  }
}

export default DayTripPricingAlgorithm;

// const myprice = DayTripPricingAlgorithm(75.05, 8, 3);

//
