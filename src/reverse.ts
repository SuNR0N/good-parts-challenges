import { BinaryFunction } from './types';

/**
 * Function that reverses the arguments of a binary function
 * @param binary Binary function
 */
export function reverse(binary: BinaryFunction<number>): BinaryFunction<number> {
  return (a: number, b: number) => binary(b, a);
}
