import { randomInt } from 'crypto';

const LUCKY_NUMBERS_COUNT = 6;
const LUCKY_NUMBER_MIN = 1;
const LUCKY_NUMBER_MAX = 45;

/**
 * Generates a list of unique lucky numbers.
 * @param quantity - The number of sets of lucky numbers to generate.
 * @returns A list of sorted arrays containing unique lucky numbers.
 */
export function generateLuckyNumbersList(quantity: number): number[][] {
  const luckyNumbersList: number[][] = [];

  for (let setIndex = 0; setIndex < quantity; setIndex++) {
    const luckyNumbers = generateUniqueLuckyNumbers();
    luckyNumbersList.push(luckyNumbers);
  }

  return luckyNumbersList;
}

/**
 * Generates a single set of unique lucky numbers.
 * @returns A sorted array of unique lucky numbers.
 */
function generateUniqueLuckyNumbers(): number[] {
  const luckyNumbers: Set<number> = new Set();

  while (luckyNumbers.size < LUCKY_NUMBERS_COUNT) {
    const luckyNumber = generateRandomNumber(
      LUCKY_NUMBER_MIN,
      LUCKY_NUMBER_MAX,
    );
    luckyNumbers.add(luckyNumber);
  }

  return Array.from(luckyNumbers).sort((a, b) => a - b);
}

/**
 * Generates a cryptographically secure random number between the given min and max values (inclusive).
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 */
function generateRandomNumber(min: number, max: number): number {
  return randomInt(min, max + 1); // `randomInt` is inclusive of `min` and exclusive of `max`, so add 1 to include `max`.
}
