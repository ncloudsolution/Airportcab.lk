export function vehicalInsteadOfTrain(travelpoints) {
  let newDistanceX;
  let otherDataX;
  //starting from colombo
  switch (travelpoints) {
    case "Colombo to Kandy":
      newDistanceX = 122;
      otherDataX = {
        origin: "Colombo Fort Railway Station",
        destination: "Railway Station - Kandy",
        duration: "3 hours 17 mins",
        distance: "122 km",
      };
      break;
    case "Colombo to Nanu Oya":
      newDistanceX = 163;
      otherDataX = {
        origin: "Colombo Fort Railway Station",
        destination: "Nanu Oya Railway Station",
        duration: "4 hours 41 mins",
        distance: "163 km",
      };
      break;
    case "Colombo to Ella":
      newDistanceX = 195;
      otherDataX = {
        origin: "Colombo Fort Railway Station",
        destination: "Railway Station - Ella",
        duration: "5 hours 16 mins",
        distance: "195 km",
      };
      break;
    case "Colombo to Badulla":
      newDistanceX = 213;
      otherDataX = {
        origin: "Colombo Fort Railway Station",
        destination: "Badulla Railway Station",
        duration: "5 hours 45 mins",
        distance: "213 km",
      };
      break;
    //starting from kandy
    case "Kandy to Nanu Oya":
      newDistanceX = 80;
      otherDataX = {
        origin: "Railway Station - Kandy",
        destination: "Nanu Oya Railway Station",
        duration: "2 hours 50 mins",
        distance: "80 km",
      };
      break;
    case "Kandy to Ella":
      newDistanceX = 136;
      otherDataX = {
        origin: "Railway Station - Kandy",
        destination: "Railway Station - Ella",
        duration: "3 hours 25 mins",
        distance: "136 km",
      };
      break;
    case "Kandy to Badulla":
      newDistanceX = 116;
      otherDataX = {
        origin: "Railway Station - Kandy",
        destination: "Badulla Railway Station",
        duration: "2 hours 53 mins",
        distance: "116 km",
      };
      break;
    case "Kandy to Colombo":
      newDistanceX = 122;
      otherDataX = {
        origin: "Railway Station - Kandy",
        destination: "Colombo Fort Railway Station",
        duration: "3 hours 17 mins",
        distance: "122 km",
      };
      break;
    //starting from nanu oya
    case "Nanu Oya to Ella":
      newDistanceX = 61;
      otherDataX = {
        origin: "Nanu Oya Railway Station",
        destination: "Railway Station - Ella",
        duration: "2 hours 5 mins",
        distance: "61 km",
      };
      break;
    case "Nanu Oya to Badulla":
      newDistanceX = 62;
      otherDataX = {
        origin: "Nanu Oya Railway Station",
        destination: "Badulla Railway Station",
        duration: "1 hours 52 mins",
        distance: "62 km",
      };
      break;
    case "Nanu Oya to Colombo":
      newDistanceX = 163;
      otherDataX = {
        origin: "Nanu Oya Railway Station",
        destination: "Colombo Fort Railway Station",
        duration: "4 hours 41 mins",
        distance: "163 km",
      };
      break;
    case "Nanu Oya to Kandy":
      newDistanceX = 80;
      otherDataX = {
        origin: "Nanu Oya Railway Station",
        destination: "Railway Station - Kandy",
        duration: "2 hours 50 mins",
        distance: "80 km",
      };
      break;
    //starting from ella
    case "Ella to Badulla":
      newDistanceX = 25;
      otherDataX = {
        origin: "Railway Station - Ella",
        destination: "Badulla Railway Station",
        duration: "47 mins",
        distance: "25 km",
      };
      break;
    case "Ella to Colombo":
      newDistanceX = 195;
      otherDataX = {
        origin: "Railway Station - Ella",
        destination: "Colombo Fort Railway Station",
        duration: "5 hours 16 mins",
        distance: "195 km",
      };
      break;
    case "Ella to Kandy":
      newDistanceX = 136;
      otherDataX = {
        origin: "Railway Station - Ella",
        destination: "Railway Station - Kandy",
        duration: "3 hours 25 mins",
        distance: "136 km",
      };
      break;
    case "Ella to Nanu Oya":
      newDistanceX = 61;
      otherDataX = {
        origin: "Railway Station - Ella",
        destination: "Nanu Oya Railway Station",
        duration: "2 hours 5 mins",
        distance: "61 km",
      };
      break;
      //starting from badu

      lla;
    case "Badulla to Ella":
      newDistanceX = 20;
      otherDataX = {
        origin: "Badulla Railway Station",
        destination: "Railway Station - Ella",
        duration: "40 mins",
        distance: "20 km",
      };
      break;
    case "Badulla to Nanu Oya":
      newDistanceX = 63;
      otherDataX = {
        origin: "Badulla Railway Station",
        destination: "Nanu Oya Railway Station",
        duration: "2 hours 7 mins",
        distance: "63 km",
      };
      break;
    case "Badulla to Kandy":
      newDistanceX = 116;
      otherDataX = {
        origin: "Badulla Railway Station",
        destination: "Railway Station - Kandy",
        duration: "2 hours 45 mins",
        distance: "116 km",
      };
      break;
    case "Badulla to Colombo":
      newDistanceX = 213;
      otherDataX = {
        origin: "Badulla Railway Station",
        destination: "Colombo Fort Railway Station",
        duration: "5 hours 45 mins",
        distance: "213 km",
      };
      break;

    // Add more cases as needed
    default:
      newDistanceX = 10;
      break;
  }

  return { newDistanceX, otherDataX };
}
