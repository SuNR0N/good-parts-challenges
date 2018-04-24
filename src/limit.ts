import { BinaryFunction } from './types';

type Result = (a: number, b: number) => number | undefined;

/**
 * Function that allows a binary function to be called a limited number of times
 * @param binary Binary function
 * @param n Number
 */
export function limit(binary: BinaryFunction<number>, n: number): Result {
  return (a: number, b: number) => {
    if (n >= 1) {
      n -= 1;
      return binary(a, b);
    } else {
      return undefined;
    }
  };
}
