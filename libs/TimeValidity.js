export function StartTimeValidity(submittedTime) {
  const currentTime = new Date();

  if (submittedTime < currentTime) {
    return "Unreachable Start Time";
  }
  return false;
}

export function RetrunTimeValidity(
  submittedTimeforStart,
  submittedTimeforReturn,
  journeyTime
) {
  if (submittedTimeforReturn < submittedTimeforStart) {
    return "Impossible Return Time please check the return time again";
  }
  if (submittedTimeforReturn - submittedTimeforStart < journeyTime) {
    return "Practically unreachable Return Time please check the return time again";
  }
  return false;
}
