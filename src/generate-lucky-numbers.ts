import { randomInt } from 'node:crypto';

const LUCKY_NUMBERS_COUNT = 6;
const LUCKY_NUMBER_MIN = 1;
const LUCKY_NUMBER_MAX = 45;
const MAX_DUPLICATE_NUMBERS = 2; // 세트 간 최대 중복 허용 개수
const MAX_RETRY_ATTEMPTS = 100; // 최대 재시도 횟수

/**
 * Generates a list of unique lucky numbers with minimal overlap between sets.
 * @param quantity - The number of sets of lucky numbers to generate.
 * @returns A list of sorted arrays containing unique lucky numbers.
 */
export function generateLuckyNumbersList(quantity: number): number[][] {
  const luckyNumbersList: number[][] = [];

  for (let setIndex = 0; setIndex < quantity; setIndex++) {
    const luckyNumbers = generateUniqueLuckyNumbersWithMinimalOverlap(
      luckyNumbersList,
    );
    luckyNumbersList.push(luckyNumbers);
  }

  return luckyNumbersList;
}

/**
 * Generates a single set of unique lucky numbers with minimal overlap with existing sets.
 * @param existingSets - Previously generated sets to avoid excessive overlap.
 * @returns A sorted array of unique lucky numbers.
 */
function generateUniqueLuckyNumbersWithMinimalOverlap(
  existingSets: number[][],
): number[] {
  for (let attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {
    const candidateSet = generateUniqueLuckyNumbers();

    // 기존 세트들과의 중복 검사
    let maxOverlap = 0;
    for (const existingSet of existingSets) {
      const overlap = countOverlap(candidateSet, existingSet);
      maxOverlap = Math.max(maxOverlap, overlap);
    }

    // 중복이 허용 범위 내라면 해당 세트 반환
    if (maxOverlap <= MAX_DUPLICATE_NUMBERS) {
      return candidateSet;
    }
  }

  // 최대 재시도 횟수를 초과한 경우 마지막으로 생성된 세트 반환
  return generateUniqueLuckyNumbers();
}

/**
 * Counts the number of overlapping numbers between two sets.
 * @param set1 - First set of numbers.
 * @param set2 - Second set of numbers.
 * @returns The number of overlapping numbers.
 */
function countOverlap(set1: number[], set2: number[]): number {
  const set1Set = new Set(set1);
  let overlapCount = 0;

  for (const num of set2) {
    if (set1Set.has(num)) {
      overlapCount++;
    }
  }

  return overlapCount;
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
