import dayjs from "dayjs";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}

export function makeid() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 18; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function threeHousesNumberPipe(number: number) {
  if (number <= 9) {
    return `00${number}`;
  } else if (number <= 99) {
    return `0${number}`;
  } else {
    return number + "";
  }
}

export const isObject = <T extends object>(value: any): value is T =>
  typeof value === "object" &&
  typeof value !== "function" &&
  value !== undefined;

export function diffDaysFromToday(date: Date) {
  return dayjs(date).endOf("day").diff(dayjs().endOf("day"), "day");
}

/*
 Calculate the amount of Pokemon that should load based on the user screen size - this is needed in order to load the infinite scroll with a good experience
  width >= 1200 = 12 col
  width >= 768 = 6 col
  width >= 576 = 4 col
  < = 3 col */
export function getTotalItemsToShowOnViewport() {
  const totalCols =
    window.innerWidth >= 1200
      ? 12
      : window.innerWidth >= 768
      ? 6
      : window.innerWidth >= 576
      ? 4
      : 3;
  const colHeight = 90;
  const totalRows = Math.floor(window.innerHeight / colHeight) + 1;
  const totalOnInitialLoading = Math.floor(totalRows * totalCols);
  return totalOnInitialLoading;
}
