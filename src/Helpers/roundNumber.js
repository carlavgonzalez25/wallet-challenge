export const roundNumber = (number) => {
  const roundedNumber = Math.floor(number * 100) / 100;
  return roundedNumber;
};
