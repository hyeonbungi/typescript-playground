import { randomInt } from 'node:crypto';

const LUCKY_NUMBERS_COUNT = 6;
const LUCKY_NUMBER_MIN = 1;
const LUCKY_NUMBER_MAX = 45;
const MAX_DUPLICATE_NUMBERS = 2; // 세트 간 최대 허용 중복 개수
const MAX_RETRY_ATTEMPTS = 100; // 최대 재시도 횟수

/**
 * 겹치는 숫자를 최소화하여 여러 세트의 로또 번호를 생성합니다.
 * @param quantity - 생성할 세트 수
 * @param maxDuplicate - 세트 간 허용되는 최대 중복 숫자 수 (기본값: 2)
 * @returns 정렬된 로또 번호 배열들의 리스트
 */
export function generateLuckyNumbersList(
  quantity: number,
  maxDuplicate: number = MAX_DUPLICATE_NUMBERS,
): number[][] {
  const luckyNumbersList: number[][] = [];

  for (let i = 0; i < quantity; i++) {
    const luckyNumbers = generateUniqueLuckyNumbersWithMinimalOverlap(
      luckyNumbersList,
      maxDuplicate,
    );
    luckyNumbersList.push(luckyNumbers);
  }

  return luckyNumbersList;
}

/**
 * 기존 세트들과 겹치는 숫자를 최소화하여 하나의 로또 번호 세트를 생성합니다.
 * 조건을 만족하지 못할 경우 최대 재시도 횟수 동안 반복하며,
 * 가장 겹침이 적은 후보를 최종적으로 반환합니다.
 * 
 * @param existingSets - 기존에 생성된 세트 목록
 * @param maxAllowedOverlap - 세트 간 허용되는 최대 중복 숫자 수
 * @returns 정렬된 하나의 로또 번호 세트
 */
function generateUniqueLuckyNumbersWithMinimalOverlap(
  existingSets: number[][],
  maxAllowedOverlap: number,
): number[] {
  let bestCandidate: number[] = [];
  let lowestMaxOverlap = Infinity;

  for (let attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {
    const candidateSet = generateUniqueLuckyNumbers();

    const maxOverlap = Math.max(
      ...existingSets.map((set) => countOverlap(candidateSet, set)),
    );

    if (maxOverlap <= maxAllowedOverlap) {
      return candidateSet;
    }

    if (maxOverlap < lowestMaxOverlap) {
      lowestMaxOverlap = maxOverlap;
      bestCandidate = candidateSet;
    }
  }

  // 재시도에도 조건을 만족하는 세트를 찾지 못한 경우, 가장 덜 겹치는 후보를 반환
  return bestCandidate;
}

/**
 * 두 숫자 세트 간의 중복된 숫자 개수를 계산합니다.
 * @param set1 - 첫 번째 숫자 세트
 * @param set2 - 두 번째 숫자 세트
 * @returns 겹치는 숫자의 개수
 */
function countOverlap(set1: number[], set2: number[]): number {
  const set1Set = new Set(set1);
  return set2.reduce((count, num) => count + (set1Set.has(num) ? 1 : 0), 0);
}

/**
 * 하나의 로또 번호 세트를 생성합니다.
 * @param count - 생성할 고유 번호 개수 (기본값: 6)
 * @returns 정렬된 로또 번호 배열
 */
function generateUniqueLuckyNumbers(count: number = LUCKY_NUMBERS_COUNT): number[] {
  const luckyNumbers = new Set<number>();

  while (luckyNumbers.size < count) {
    const number = generateRandomNumber(LUCKY_NUMBER_MIN, LUCKY_NUMBER_MAX);
    luckyNumbers.add(number);
  }

  return [...luckyNumbers].sort((a, b) => a - b);
}

/**
 * 주어진 범위 내에서 암호학적으로 안전한 랜덤 숫자를 생성합니다.
 * @param min - 최소 값 (포함)
 * @param max - 최대 값 (포함)
 * @returns 생성된 랜덤 숫자
 */
function generateRandomNumber(min: number, max: number): number {
  return randomInt(min, max + 1); // randomInt는 [min, max) 범위이므로, max 포함을 위해 +1
}