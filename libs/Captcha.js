export function SumCaptcha() {
  // sum captcha

  let finalFirstNumber = 0;
  let finalSecondNumber = 0;

  const firstGenNumber = Math.trunc(Math.random() * 100);
  const secondGenNumber = Math.trunc(Math.random() * 100);

  if (firstGenNumber >= 50) {
    finalFirstNumber = Math.trunc(firstGenNumber / 2);
  } else {
    finalFirstNumber = firstGenNumber;
  }

  if (secondGenNumber >= 50) {
    finalSecondNumber = Math.trunc(secondGenNumber / 2);
  } else {
    finalSecondNumber = secondGenNumber;
  }

  const sum = finalFirstNumber + finalSecondNumber;

  const numArray = [finalFirstNumber, finalSecondNumber, sum];

  return numArray;
}
